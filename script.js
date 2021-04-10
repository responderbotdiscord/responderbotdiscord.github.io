var subtitles = [
    "Sono Responder, il tuo nuovo amico robot!",
    "Responder, il bot Discord",
    "Salve, sono Responder, come posso aiutarti?",
    "Ciao futuro utente del rispondi-bot",
    "Salve utente che non conoscevo e ora conosco, io sono Responder, il bot di Discord"
]

console.log("test1")


document.addEventListener("DOMContentLoaded", function () {
    console.log("hi")
    var a = subtitles[Math.floor(Math.random() * subtitles.length)];
    document.getElementById("subtitle").innerHTML = '"' + a + '"';
});





