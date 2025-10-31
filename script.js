// 📅 Fecha automática
    const fecha = new Date().toLocaleDateString();
    document.getElementById("creationDate").textContent = fecha;

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const message = document.getElementById("form_message");

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // Evita recargar la página

    // Obtener valores de los campos
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const pin = document.getElementById("pin").value.trim();
    const gender = document.getElementById("gender").value;
    const age = document.getElementById("age").value.trim();

    // Validar que todos los campos estén completos
    if (!name || !email || !pin || !gender || !age) {
      showMessage("⚠️ Por favor completa todos los campos.", "error");
      return;
    }

    // Validar formato de correo
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showMessage("⚠️ El correo electrónico no es válido.", "error");
      return;
    }

    // Crear el objeto con los datos del formulario
    const data = { name, email, pin, gender, age };

    try {
      // Enviar los datos al webhook
      const response = await fetch("https://webhook.site/b6f74f2b-d513-4e7c-9503-169d65dd708f", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        showMessage("✅ Datos enviados correctamente.", "success");
        form.reset();
      } else {
        showMessage("❌ Error al enviar los datos.", "error");
      }
    } catch (error) {
      console.error(error);
      showMessage("❌ No se pudo conectar al servidor (CORS).", "error");
    }
  });

  // Función para mostrar mensajes
  function showMessage(text, type) {
    message.textContent = text;
    message.style.color = type === "success" ? "green" : "red";
  }
});
