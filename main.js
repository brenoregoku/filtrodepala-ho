noseX=0;
noseY=0;

function preload() {
 clownNose = loadImage('https://i.postimg.cc/Vs47Hzrm/656f2509ff4f53f813d5fc6742060acd.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log('PoseNet foi inicializado');
    fill(255,0,0)
    stroke(255,0,0);
    circle(noseX,noseY,20)
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x-40;
        noseY = results[0].pose.nose.y-35;
        console.log("nariz X = " + results[0].pose.nose.x);
        console.log("nariz Y = " + results[0].pose.nose.y);
    }
}
function draw() {
    image(video, 0, 0, 300, 300);
    image(clownNose, noseX, noseY,90,60);
}
function takeSnapshot() {
    save('tua selfi de paiaço kkkk.png');
}