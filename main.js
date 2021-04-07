var SpeechRecognition = window.webkitSpeechRecognition
var recognition = new SpeechRecognition();
function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start()
}

recognition.onresult = function run(outcome) {
    console.log(outcome);
var output = outcome.results[0][0].transcript
document.getElementById("textbox").innerHTML = output
speak()
}

function speak() {
    var speechapi = window.speechSynthesis

    var speakdata = document.getElementById("textbox").value
    var saythis = new SpeechSynthesisUtterance(speakdata)
    speechapi.speak(saythis)
    Webcam.attach("#camera")

}

Webcam.set({
    width : 360,
    height : 250,
    image_format : "jpeg",
    jpeg_quality : 90  
})