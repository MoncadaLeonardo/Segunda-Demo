// /api/enviar.js
export default async function handler(req, res) {
  const response = await fetch("https://webhook.site/b6f74f2b-d513-4e7c-9503-169d65dd708f", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ nombre: "Leonardo", mensaje: "Desde el backend de Vercel" })
  });

  res.status(200).json({ ok: true });
}
