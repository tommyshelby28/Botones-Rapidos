
document.getElementById("fifteenButton").addEventListener("click", function() {
    sumarPorcentaje(15);
});

document.getElementById("twentyButton").addEventListener("click", function() {
    sumarPorcentaje(20);
});

document.getElementById("thirtyButton").addEventListener("click", function() {
    sumarPorcentaje(30);
});

function sumarPorcentaje(porcentaje) {
    const numberInput = document.getElementById("numberInput");
    const resultElement = document.getElementById("result");

    const numero = parseFloat(numberInput.value);

    if (!isNaN(numero)) {
        const porcentajeCalculado = numero * (porcentaje / 100);
        resultElement.textContent = numero + " + " + porcentajeCalculado.toFixed(2);
    } else {
        resultElement.textContent = "Por favor ingrese un número válido.";
    }
}

function obtenerMensajeAleatorio(mensajes) {
    return mensajes[Math.floor(Math.random() * mensajes.length)];
}

const mensajesBienvenida = 
["Hola! Qué tal? Me dices tu nombre para la creacion de tu usuario? 💟", 
"Buenas! Como estas? Podrías decirme tu nombre para crearte un usuario?", 
"Hola! Que tal todo? Me dirias tu nombre asi creamos tu usuario? ❤️", 
"Hola, como estás? Como es tu nombre para poder crearte un usuario?", 
"Hola, que tal? Serias tan amable de indicarme tu nombre para crearte un usuario? 💟", 
"Hola, como estas? Serias tan amable de indicarme tu nombre para la creacion de tu usuario? ❤️", 
"Hola, como estas? Serias tan amable de decirme tu nombre para crear tu usuario?❣️",
"Hola buenas, ¿podrías decirme tu nombre para crearte un usuario?",
"¿Hola buenas, me indicas tu nombre para proceder con la creación de tu usuario? 🩷❤️",
"Hola buenas, ¿me podrías proporcionar tu nombre para registrar tu usuario? ❤️",
"Buenas, ¿me indicas tu nombre para crear tu usuario? 🩷",
"Hola, ¿podrías compartirme tu nombre para completar tu registro como usuario?",
"Buenas que tal? Me podrías decir tu nombre para proceder con la creación de tu usuario?",
"Hola, ¿podrías proporcionarme tu nombre para crear tu usuario? 💟",
"Hola buenas, ¿me indicas tu nombre para completar el proceso de registro como usuario? 💕",
"Buen como estas? Podrías decirme tu nombre para proceder con la creación de tu cuenta de usuario?",
"Hola, ¿podrías facilitarme tu nombre para iniciar el proceso de creación de tu usuario?"];

const mensajesPDF = 
["No puedo descargar el comprobante, ¿podrías reenviármelo por favor a través de una captura de pantalla?", 
"¿Podrías enviarme una captura de pantalla del comprobante? No puedo descargarlo.",
"No puedo descargar el comprobante. ¿Sería posible que me lo enviaras por captura de pantalla, por favor?",
"¿Sería posible que me enviaras el comprobante por captura de pantalla? No puedo descargarlo."];

const mensajesPorcentaje = ["El bono es un extra que te damos al cargar, por ejemplo si tenes un bono del 20% y cargas 1000$, te cargamos 1200$ 💟"];

const mensajesCargadas = ["Me indicas tu usuario para cargarte las fichas?", "Me decis tu usuario para poder cargarte las fichas?", "Para cargarte las fichas, me indicas tu usuario?",  ];

const mensajeSaludo = ["Hola, como estas? En que puedo ayudarte? 💟", "Hola, que tal? En que puedo ayudarte? ❤️", "Buenas, como estas? En que puedo ayudarte? 🩷", "Buenas, que tal? En que puedo ayudarte? 💕"  ];

document.getElementById("bienvenidaBoton").addEventListener("click", function() {
    copiarMensaje(obtenerMensajeAleatorio(mensajesBienvenida));
});

document.getElementById("pdfBoton").addEventListener("click", function() {
    copiarMensaje(obtenerMensajeAleatorio(mensajesPDF));
});

document.getElementById("porcentajeBoton").addEventListener("click", function() {
    copiarMensaje(obtenerMensajeAleatorio(mensajesPorcentaje));
});

document.getElementById("cargadasBoton").addEventListener("click", function() {
    copiarMensaje(obtenerMensajeAleatorio(mensajesCargadas));
});

document.getElementById("saludoBoton").addEventListener("click", function() {
    copiarMensaje(obtenerMensajeAleatorio(mensajeSaludo));
});

function copiarMensaje(mensaje) {
    var tempInput = document.createElement("input");
    tempInput.value = mensaje;
    document.body.appendChild(tempInput);
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); 
    document.execCommand("copy");
    document.body.removeChild(tempInput);
}