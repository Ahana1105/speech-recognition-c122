x = 0;
y = 0;
draw_circle = "";
draw_rectangle = "";

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {

    document.getElementById("status").innerHTML = "System is listening, please Speak.";
    recognition.start();
}

recognition.onresult = function(event) {

    console.log(event);

    var content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognised as: " + content;

    if (content == "circle") {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing CIRCLE";
        draw_circle = "set";
        console.log("circle if condition");
    }

    if (content == "rectangle") {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing RECTANGLE";
        draw_rectangle = "set";
        console.log("rectangle if condition");
    }
}


function setup() {

    canvas = createCanvas(900,600)
}

function draw() {
    
    if (draw_circle == "set") {
        radius= Math.floor(Math.random() * 100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML = "The CIRCLE is drawn!"
        draw_circle = "";
        console.log("circle draw");
    }

    if (draw_rectangle == "set") {
    
        rect(x,y,70,50);
        document.getElementById("status").innerHTML = "The RECTANGLE is drawn!"
        draw_rectangle = "";
        console.log("rectangle draw");
    }
}
