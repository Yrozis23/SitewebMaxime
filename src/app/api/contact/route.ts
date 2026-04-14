import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { createLogger } from "@/lib/logger";

const log = createLogger("API/contact");

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "maximedumesny@gmail.com";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "contact@maximedumesny.fr";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      log.warn("Missing fields in contact form", { name: !!name, email: !!email, message: !!message });
      return NextResponse.json({ error: "Tous les champs sont requis." }, { status: 400 });
    }

    // Basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      log.warn("Invalid email format", { email });
      return NextResponse.json({ error: "Format d'email invalide." }, { status: 400 });
    }

    log.info("Sending contact email", { name, email });

    const { data, error } = await resend.emails.send({
      from: `Portfolio Maxime <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `[Contact Portfolio] Message de ${name}`,
      text: `Nom : ${name}\nEmail : ${email}\n\nMessage :\n${message}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6366f1;">Nouveau message depuis le portfolio</h2>
          <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
            <tr>
              <td style="padding: 8px 0; color: #666; width: 80px;">Nom</td>
              <td style="padding: 8px 0; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
          </table>
          <div style="padding: 16px; background: #f4f4f5; border-radius: 8px; margin-top: 16px;">
            <p style="white-space: pre-wrap; margin: 0;">${message}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      log.error("Resend API error", error);
      return NextResponse.json({ error: "Erreur lors de l'envoi." }, { status: 500 });
    }

    log.info("Email sent successfully", { id: data?.id });
    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    log.error("Unexpected error in contact API", err);
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
  }
}
