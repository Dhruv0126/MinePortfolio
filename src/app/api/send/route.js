// app/api/send/route.js
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.FROM_EMAIL;  // Must be a verified Resend sender
    const toEmail = process.env.TO_EMAIL || fromEmail; // Where you receive messages

    if (!apiKey || !fromEmail) {
      console.error("Missing env vars:", { apiKey: !!apiKey, fromEmail: !!fromEmail });
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 503 }
      );
    }

    const body = await req.json();
    const { email, subject, message } = body;

    if (!email || !subject || !message) {
      return NextResponse.json(
        { error: "Email, subject, and message are required." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: fromEmail,         // e.g. "onboarding@resend.dev" or "contact@yourdomain.com"
      to: [toEmail],           // e.g. "dhruv06012@gmail.com"
      reply_to: email,         // visitor's email so you can reply directly
      subject: `[Portfolio] ${subject}`,
      text: `From: ${email}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error("Resend API error:", JSON.stringify(error));
      return NextResponse.json(
        { error: error.message || "Failed to send email." },
        { status: 500 }
      );
    }

    return NextResponse.json(data);
    
  } catch (error) {
    console.error("Send route error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

