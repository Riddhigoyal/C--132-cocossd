cats_dog="";
status="";
function preload(){
    cats_dog=loadImage("dog_cat.jpg");
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector= ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}

function modelLoaded(){
    console.log ("cocossd is Initialized");
    status=true;
    objectDetector.detect(cats_dog,gotResult);
}

function gotResult(error,result){
    if(error){
        console.log (error);
    }
    else{
        console.log (result);
    }
}

function draw(){
    image(cats_dog,0,0,640,420);
    fill("#00008b");
    text("Dog",45,75);
    noFill();
    stroke("#00008b");
    rect(20,60,450,360);

    fill("#00008b");
    text("Cat",310,90);
    noFill();
    stroke("#00008b");
    rect(305,75,270,340);
}