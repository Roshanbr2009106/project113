function preload(){

}

function setup(){
    canvas = createCanvas(650,500);
    canvas.position(150,150)
    video = createCapture(VIDEO);
    video.hide();

}

function draw(){
    image(video,200,150,220,200)
    fill(255,0,0);
    stroke(100,255,0);
    circle(50,50,80);
    circle(600,50,80);
    circle(50,450,80);
    circle(600,450,80);
    
    fill(0,255,0);
    stroke(0,0,255);
    rect(90,40,470,20);
    rect(90,420,460,20);
    rect(40,90,20,300);
    rect(580,90,20,300);


}

function takeSnapshot(){
    save('hi.png')
}