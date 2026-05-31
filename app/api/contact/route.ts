import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const emailTo = process.env.EMAIL_TO || "multanitanya87@gmail.com";
const smtpHost = process.env.EMAIL_SMTP_HOST;
const smtpPort = Number(process.env.EMAIL_SMTP_PORT || 587);
const smtpUser = process.env.EMAIL_SMTP_USER;
const smtpPass = process.env.EMAIL_SMTP_PASS;
const secure = process.env.EMAIL_SMTP_SECURE === "true";

function createTransporter() {
  if (!smtpHost || !smtpUser || !smtpPass) {
    throw new Error(
      "Missing email configuration. Set EMAIL_SMTP_HOST, EMAIL_SMTP_USER, and EMAIL_SMTP_PASS."
    );
  }

  return nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body ?? {};

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please provide name, email, and message." },
        { status: 400 }
      );
    }

    const transporter = createTransporter();
    const htmlMessage = `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br />")}</p>
    `;

    await transporter.sendMail({
      from:
        process.env.EMAIL_FROM || `"Portfolio Contact" <${smtpUser}>`,
      to: emailTo,
      subject: `New contact message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: htmlMessage,
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Unable to send contact email:", error);
    return NextResponse.json(
      { error: "Unable to send email right now. Please try again later." },
      { status: 500 }
    );
  }
}
