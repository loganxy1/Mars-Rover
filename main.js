var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var r_height=100;
var r_width=70;
var r_x_pos=10;
var r_y_pos=10;
var r_image="rover.png";
var b_image="mars.jpg";
function add(){
    bg=new Image();
    bg.onload=uploadBackground;
    bg.src=b_image;
    
    rover=new Image();
    rover.onload=uploadRover;
    rover.src=r_image;
}
function uploadBackground(){
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
}

function uploadRover(){
    ctx.drawImage(rover, r_x_pos, r_y_pos, r_width, r_height);
}