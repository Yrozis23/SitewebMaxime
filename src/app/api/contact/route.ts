import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { createLogger } from "@/lib/logger";

const log = createLogger("API/contact");


const MAX_NAME = 100;
const MAX_EMAIL = 200;
const MAX_MESSAGE = 5000;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "maximedumesny@gmail.com";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "contact@maximedumesny.fr";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { website } = body;

    // Honeypot : un bot remplit ce champ, on feint le succès
    if (typeof website === "string" && website.trim() !== "") {
      log.warn("Honeypot triggered");
      return NextResponse.json({ success: true });
    }

    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (!name || !email || !message) {
      log.warn("Missing fields in contact form", { name: !!name, email: !!email, message: !!message });
      return NextResponse.json({ error: "Tous les champs sont requis." }, { status: 400 });
    }

    if (name.length > MAX_NAME || email.length > MAX_EMAIL || message.length > MAX_MESSAGE) {
      return NextResponse.json({ error: "Un des champs est trop long." }, { status: 400 });
    }

    // Empêche l'injection d'en-têtes via le sujet
    if (/[\r\n]/.test(name)) {
      return NextResponse.json({ error: "Nom invalide." }, { status: 400 });
    }

    // Basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      log.warn("Invalid email format");
      return NextResponse.json({ error: "Format d'email invalide." }, { status: 400 });
    }

    log.info("Sending contact email");

    const resend = new Resend(process.env.RESEND_API_KEY);
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
              <td style="padding: 8px 0; font-weight: 600;">${escapeHtml(name)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td>
            </tr>
          </table>
          <div style="padding: 16px; background: #f4f4f5; border-radius: 8px; margin-top: 16px;">
            <p style="white-space: pre-wrap; margin: 0;">${escapeHtml(message)}</p>
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
