import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, recaptchaToken } = body;

    // Verify reCAPTCHA token if not in development
    if (process.env.NODE_ENV !== "development") {
      const recaptchaResponse = await fetch(
        "https://www.google.com/recaptcha/api/siteverify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
        }
      );

      const recaptchaData = await recaptchaResponse.json();

      if (!recaptchaData.success) {
        return NextResponse.json(
          { error: "reCAPTCHA verification failed" },
          { status: 400 }
        );
      }
    }

    // Format message for Telegram
    const telegramMessage = `
🎯 New Contact Form Submission

👤 Name: ${name}
📧 Email: ${email}
📌 Subject: ${subject}

💬 Message:
${message}
    `;

    // Send to Telegram
    console.log(
      "Sending to Telegram with token:",
      process.env.TELEGRAM_BOT_TOKEN ? "Token exists" : "No token found",
      "and chat ID:",
      process.env.TELEGRAM_CHAT_ID
    );

    const response = await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text: telegramMessage,
          parse_mode: "HTML",
        }),
      }
    );

    const responseText = await response.text();
    console.log("Telegram API response:", responseText);

    if (!response.ok) {
      console.error("Telegram response not ok:", responseText);
      throw new Error(`Failed to send message to Telegram: ${responseText}`);
    }

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
