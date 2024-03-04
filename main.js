function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);
    
    canvas = createCanvas(550,500);
    canvas.position(560,150);
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    }
    
    function modelLoaded(){
        console.log('poseNet Is Initialized')
    }
    
    function draw(){
        background('#969A97');
        fill('#F90093');
        stroke('#F90093');
        text(noseX, noseY, Sohan);
    }
    
    function gotPoses(results){
        noseX=0;
    noseY=0;
        if(results.length > 0)
        {
            console.log(results);
            noseX = results[0].pose.nose.x;
            noseY = results[0].pose.nose.y;
            console.log("noseX =" + noseX +"noseY =" + noseY);
            rightWristX = results[0].pose.rightWrist.x;
            leftWristX = results[0].pose.leftWrist.x;
            diffrence = floor( leftWristX - rightWristX);
            console.log("leftWristX =" + leftWristX +"rightWristX =" + rightWristX + "diffrence =" +diffrence);
        }
    }
    
    
    