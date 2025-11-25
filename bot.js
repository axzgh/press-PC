async function getBotResponse(message) {
    message = message.toLowerCase();

    if (message.includes("hola")) return "Hola humano extraño.";
    if (message.includes("ayuda")) return "¿Ayuda en qué exactamente?";
    if (message.includes("bye")) return "Adiós, no me extrañes mucho.";

    // Respuesta por defecto
    return "No entendí eso, repítelo mejor.";
}
