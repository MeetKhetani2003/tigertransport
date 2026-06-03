import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Contact } from "@/models/Contact";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, company, message, recaptchaToken } = body;

    if (!recaptchaToken) {
      return NextResponse.json({ message: "reCAPTCHA token is missing" }, { status: 400 });
    }

    // Verify reCAPTCHA token
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`;
    const recaptchaRes = await fetch(verifyUrl, { method: "POST" });
    const recaptchaJson = await recaptchaRes.json();
    
    if (!recaptchaJson.success) {
      return NextResponse.json({ message: "reCAPTCHA verification failed" }, { status: 400 });
    }

    // Connect to database
    await connectDB();

    // Save to database
    const newContact = await Contact.create({
      name,
      email,
      phone,
      company,
      message,
    });

    // Send Email
    const transporter = nodemailer.createTransport({
      service: "gmail", // Use your email provider
      auth: {
        user: process.env.EMAIL_USER || "dtsindiapvtltd1@gmail.com",
        pass: process.env.EMAIL_PASS || "your-app-password",
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER || "dtsindiapvtltd1@gmail.com",
      to: process.env.EMAIL_RECEIVER || process.env.EMAIL_USER || "dtsindiapvtltd1@gmail.com", // Send to company email
      subject: `New Contact Message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Enterprise Name (Company):</strong> ${company || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Note: Do not throw if email fails, so we can still save the contact
    try {
      await transporter.sendMail(mailOptions);
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
    }

    return NextResponse.json({ message: "Message submitted successfully", data: newContact }, { status: 201 });
  } catch (error) {
    console.error("Contact Submission Error:", error);
    return NextResponse.json({ message: "Failed to submit message" }, { status: 500 });
  }
}
