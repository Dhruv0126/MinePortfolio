// app/api/send/route.js
import { NextResponse } from "next/server";
import { Resend } from "resend";

// Create a Resend instance using the API key from the environment variable.
const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  try {
    if (!process.env.RESEND_API_KEY || !process.env.FROM_EMAIL) {
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 503 }
      );
    }

    const { email, subject, message } = await req.json();

    if (!email || !subject || !message) {
      return NextResponse.json(
        { error: "Email, subject, and message are required." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail],
      subject: subject,
      text: `From: ${email}\n\nMessage: ${message}`,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
    
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
