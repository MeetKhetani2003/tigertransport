import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Quote } from "@/models/Quote";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { cargoType, origin, destination, weight, businessName, phone, email, recaptchaToken } = body;

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
    const newQuote = await Quote.create({
      cargoType,
      origin,
      destination,
      weight,
      businessName,
      phone,
      email
    });

    // Send Email
    const transporter = nodemailer.createTransport({
      service: "gmail", // Use your email provider
      auth: {
        user: process.env.EMAIL_USER || "your-email@gmail.com",
        pass: process.env.EMAIL_PASS || "your-app-password",
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER || "your-email@gmail.com",
      to: process.env.EMAIL_RECEIVER || process.env.EMAIL_USER || "your-email@gmail.com", // Send to company email
      subject: `New Quote Request from ${businessName}`,
      html: `
        <h2>New Freight Quote Request</h2>
        <p><strong>Business Name:</strong> ${businessName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Cargo Type:</strong> ${cargoType}</p>
        <p><strong>Origin:</strong> ${origin}</p>
        <p><strong>Destination:</strong> ${destination}</p>
        <p><strong>Weight:</strong> ${weight} Metric Tons</p>
      `,
    };

    // Note: Do not throw if email fails, so we can still save the quote
    try {
      await transporter.sendMail(mailOptions);
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
    }

    return NextResponse.json({ message: "Quote submitted successfully", data: newQuote }, { status: 201 });
  } catch (error) {
    console.error("Quote Submission Error:", error);
    return NextResponse.json({ message: "Failed to submit quote" }, { status: 500 });
  }
}
