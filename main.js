function preload(){
}
function setup(){
canvas=createCanvas(400,400);
canvas.center();
video=createCapture(VIDEO);
video.size(400,400);
video.hide();
posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotPoses);
}
function modelLoaded(){
console.log('poseNet is loaded');
}
function draw(){
image(video,0,0,400,400);
}
function take_snapshot(){
save("clown nose image.jpg");
}
function gotPoses(results){
if(results.length>0){
console.log(results);
console.log('Nose x='+results[0].pose.nose.x);
console.log('Nose y='+results[0].pose.nose.y);
}
}