var canvas=new fabric.Canvas("myCanvas");

player_x=10;
player_y=10;

block_width=30;
block_height=30;

player_object="";
block_image_object="";

function update_player(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
    
}

function newimage(get_image){
fabric.Image.fromURL(get_image,function(Img){
    block_image_object=Img;

    block_image_object.scaleToWidth(block_width);
        block_image_object.scaleToHeight(block_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
});
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
keypressed=e.keyCode;
console.log(keypressed);

if(e.shiftKey==true && keypressed=="80"){
    console.log("p and shift pressed together.")
    
    block_height = block_height +10;
    block_width = block_width +10;
    document.getElementById("current_width").innerHTML= block_width;
    document.getElementById("current_height").innerHTML= block_height;
}

if(e.shiftKey==true && keypressed=="77"){
    console.log("m and shift pressed together.")
    
    block_height = block_height -10;
    block_width = block_width -10;
    document.getElementById(current_width).innerHTML= block_width;
    document.getElementById(current_height).innerHTML= block_height;
}

if(keypressed=="38"){
up();
console.log("up");
}

if(keypressed=="37"){
    left();
    console.log("left");
    }

if(keypressed=="39"){
     right();
     console.log("right");
        }

if(keypressed=="40"){
 down();
console.log("down");
 }

 if(keypressed=="87"){
    newimage("wall.jpg");
    console.log("w");
    }

if(keypressed=="71"){
newimage("ground.png");
console.log("g");
        }
        
if(keypressed=="76"){
newimage("light_green.png");
console.log("l");
        }

if(keypressed=="84"){
newimage("trunk.jpg");
console.log("t");
        }

if(keypressed=="82"){
newimage("roof.jpg");
console.log("r");
}

if(keypressed=="89"){
newimage("yellow_wall.png");
console.log("y");
}

if(keypressed=="68"){
newimage("dark_green.png");
console.log("d");
}

if(keypressed=="85"){
newimage("unique.png");
console.log("u");
}

if(keypressed=="67"){
newimage("cloud.jpg");
console.log("c");
}
}

function up(){
    if(player_y >= 0){
        player_y=player_y -block_height;
        console.log("block_height ="+ block_height);
        console.log("when up arrow is pressed,X="+ player_x + ",Y=" + player_y);
        canvas.remove(player_object);
    update_player();
    }
}

function down(){
    if(player_y <= 500){
        player_y=player_y +block_height;
        console.log("block_height ="+ block_height);
        console.log("when down arrow is pressed,X="+ player_x + ",Y=" + player_y);
        canvas.remove(player_object);
    update_player();
    }
}

function left(){
    if(player_x >= 0){
        player_x=player_x -block_width;
        console.log("block_width ="+ block_width);
        console.log("when left arrow is pressed,X="+ player_x + ",Y=" + player_y);
        canvas.remove(player_object);
    update_player();
    }
}

function right(){
    if(player_x <= 850){
        player_x=player_x +block_width;
        console.log("block_width ="+ block_width);
        console.log("when right arrow is pressed,X="+ player_x + ",Y=" + player_y);
        canvas.remove(player_object);
    update_player();
    }
}