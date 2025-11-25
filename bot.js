// Simulación de tiempo de respuesta
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Base de respuestas del bot
const BOT_RESPUESTAS = [
    { 
        claves: ["hola", "buenas", "hey"], 
        respuesta: () => "Holaa, ¿qué tal? 👀" 
    },
    { 
        claves: ["ayuda", "como hago", "no entiendo"], 
        respuesta: () => "Dime qué necesitas y vemos si no explota nada." 
    },
    { 
        claves: ["quien eres", "que eres"], 
        respuesta: () => "Soy un bot sencillo pero con actitud, ¿contento?" 
    },
    { 
        claves: ["adios", "bye", "nos vemos"], 
        respuesta: () => "Chaooo, no desaparezcas tres meses esta vez 👋" 
    }
];

// Función principal del bot
async function getBotResponse(message) {
    const texto = message.toLowerCase().trim();

    // Simulación de que "piensa"
    await delay(300 + Math.random() * 400);

    // Buscar coincidencias
    for (const regla of BOT_RESPUESTAS) {
        if (regla.claves.some(pal => texto.includes(pal))) {
            return regla.respuesta();
        }
    }

    // Respuesta por defecto
    return "Mmm… no entendí esa vaina 😐 inténtalo diferente.";
}
