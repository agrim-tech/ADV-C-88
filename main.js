var canvas = new fabric.Canvas('c');
block_image_width=50;
block_image_height=50;
player_x=10;
player_y=150;
var player_object="";
var keyPressed;

function player_update(){
    fabric.Image.fromURL("stevefullnetherite.png", function(Img)
    {
player_object=Img;
player_object.scaleToWidth(250);
player_object.scaleToHeight(300);
player_object.set({
    top:player_y, left: player_x
});
canvas.add(player_object);

    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img)
    {
block_image_object=Img;
block_image_object.scaleToWidth(block_image_width);
block_image_object.scaleToHeight(block_image_height);
block_image_object.set({
    top:Math.round(player_y / block_image_height) * block_image_height,

    left:Math.round(player_x / block_image_width) * block_image_width
});
canvas.add(block_image_object);

    });
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if(keyPressed == 79){
	new_image('obsidian.png');
	console.log("obsidian");
}
if(keyPressed == 68){
	new_image('diamondblock.jpg');
	console.log("diamond block");
}
if(keyPressed == 66){
	new_image('stonebrick.jpg');
	console.log("stone brick");
}
if(keyPressed == 83){
	new_image('spruceplank.jpg');
	console.log("spruce plank");
}
if(e.shiftKey == true && keyPressed == 80){
	block_image_height =block_image_height +10;
    block_image_width =Number(block_image_width) +Number(10);
    document.getElementById("width").innerHTML =block_image_width;
    document.getElementById("height").innerHTML =block_image_height;
}
if(e.shiftKey == true && keyPressed == 77){
	block_image_height =block_image_height -10;
    block_image_width =Number(block_image_width) -Number(10);
    document.getElementById("width").innerHTML =block_image_width;
    document.getElementById("height").innerHTML =block_image_height;
}
if(keyPressed == '38'){
    console.log("up");
    canvas.remove(player_object);
    player_y =Number(player_y) -Number(10);
    player_update();
}
if(keyPressed == '40'){
    console.log("down");
    canvas.remove(player_object);
    player_y =Number(player_y) +Number(10);
    player_update();
}
if(keyPressed == '39'){
    console.log("right");
    canvas.remove(player_object);
    player_x =Number(player_x) +Number(10);
    player_update();
}
if(keyPressed == '37'){
    console.log("left");
    canvas.remove(player_object);
    player_x =Number(player_x) -Number(10);
    player_update();
}
}

player_update();