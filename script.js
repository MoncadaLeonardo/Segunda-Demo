// 📅 Fecha automática
    const fecha = new Date().toLocaleDateString();
    document.getElementById("creationDate").textContent = fecha;

    // 📤 Envío del formulario con Fetch
    document.getElementById("form").addEventListener("submit", async function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const pin = document.getElementById("pin").value.trim();
      const gender = document.getElementById("gender").value;
      const age = document.getElementById("age").value.trim();
      const message = document.getElementById("form_message");

      if (!name || !email || !pin || !gender || !age) {
        message.textContent = "⚠️ Por favor completa todos los campos.";
        message.style.color = "orange";
        return;
      }

      const data = { name, email, pin, gender, age };

      try {
        const response = await fetch("https://webhook.site/b6f74f2b-d513-4e7c-9503-169d65dd708f", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data)
        });

        if (response.ok) {
          message.textContent = "✅ Datos enviados correctamente.";
          message.style.color = "green";
          document.getElementById("form").reset();
        } else {
          message.textContent = "⚠️ Error al enviar los datos.";
          message.style.color = "red";
        }
      } catch (error) {
        message.textContent = "❌ Error de conexión: " + error.message;
        message.style.color = "red";
      }
    });

    fetch("https://api.allorigins.win/get?url=" + encodeURIComponent("https://webhook.site/b6f74f2b-d513-4e7c-9503-169d65dd708f"), {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    nombre: "Leonardo",
    mensaje: "Probando desde Vercel"
  })
})
  .then(res => res.json())
  .then(data => console.log("Respuesta:", data))
  .catch(err => console.error("Error:", err));


    