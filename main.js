function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(400,400);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modalLoaded);
poseNet.on('pose',gotPoses);
}

function draw(){
    background('#d1a8e6');
}

function modalLoaded(){
    console.log("poseNet is initialized");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}