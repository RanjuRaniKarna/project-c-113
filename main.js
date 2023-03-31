function setup(){
    canvas = createCanvas(640,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
}

function take_snapshot(){
    save("student_name.png");
}

function preload(){

}

function draw(){
    image(video,40,40,560,400);
    fill("green");
    rect(60,35,520,20);
    rect(60,430,520,20);
    rect(40,35,20,415);
    rect(580,35,20,415);
    fill("red");
    circle(40,40,60);
    circle(600,40,60);
    circle(40,440,60);
    circle(600,440,60);

}
