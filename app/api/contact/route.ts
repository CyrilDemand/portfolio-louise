// app/api/contact/route.ts
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json();

  if (!name || !email || !message) {
    return Response.json({ error: "Champs manquants" }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev", // domaine vérifié sur Resend
      to: "loupillion@gmail.com",
      replyTo: email,
      subject: subject ? `[Portfolio] ${subject}` : `[Portfolio] Message de ${name}`,
      text: `De : ${name} (${email})\n\n${message}`,
    });
    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "Envoi impossible" }, { status: 500 });
  }
}