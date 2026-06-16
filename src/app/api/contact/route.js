import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const name = (body.name || "").trim();
    const email = (body.email || "").trim();
    const subject = (body.subject || "").trim();
    const message = (body.message || "").trim();

    if (!email || !message) {
      return NextResponse.json(
        { success: false, error: "Email and message are required." },
        { status: 400 }
      );
    }

    const user = process.env.GMAIL_USER?.trim();
    const pass = process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, "");

    if (!user || !pass) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Missing Gmail environment variables. Set GMAIL_USER and GMAIL_APP_PASSWORD in .env.local.",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user, pass },
    });

    const mailSubject = subject
      ? `[Portfolio] ${subject}`
      : name
        ? `New portfolio message from ${name}`
        : "New portfolio message";

    const senderLine = name ? `Name: ${name}\n` : "";

    await transporter.sendMail({
      from: `"Portfolio Contact" <${user}>`,
      to: user,
      replyTo: email,
      subject: mailSubject,
      text: `${senderLine}Email: ${email}\n\nMessage:\n${message}`,
      html: `
        <h2>New Portfolio Message</h2>
        ${name ? `<p><strong>Name:</strong> ${name}</p>` : ""}
        <p><strong>Email:</strong> ${email}</p>
        ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    const errorMessage =
      process.env.NODE_ENV === "development" && error?.message
        ? error.message
        : "Failed to send email.";
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}
