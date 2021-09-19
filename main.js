var canvas = new fabric.Canvas("myCanvas");
block_width = 30;
block_height = 30;
playerx = 50;
playery = 50;
playerobject = "";
blockimg = "";
function player_update() {
    fabric.Image.fromURL("player.png", function(Img){
        playerobject = Img;
        playerobject.scaleToWidth(150);
        playerobject.scaleToHeight(150);
        playerobject.set({
            top: playery,
            left: playerx
        });
        canvas.add(playerobject);
    });
}
function new_image(get_image) {
    fabric.Image.fromURL(get_image, function(Img){
        blockimg = Img;
        blockimg.scaleToWidth(block_width);
        blockimg.scaleToHeight(block_height);
        blockimg.set({
            top: playery,
            left: playerx
        });
        canvas.add(blockimg);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == '80'){
        console.log("shift+p");
        block_width = block_width + 10;
        block_height = block_height + 10;
        document.getElementById("width").innerHTML = block_width;
        document.getElementById("height").innerHTML = block_height;
    }
    if (e.shiftKey == true && keyPressed == '77'){
        console.log("shift+m");
        block_width = block_width - 10;
        block_height = block_height - 10;
        document.getElementById("width").innerHTML = block_width;
        document.getElementById("height").innerHTML = block_height;
    }
    if (keyPressed == '38'){
        up();
        console.log(keyPressed);
    }
    if (keyPressed == '40'){
        down();
        console.log("down");
    }
    if (keyPressed == '37'){
        left();
        console.log("left");
    }
    if (keyPressed == '39'){
        right();
        console.log("right");
    }
    //blocks
    if (keyPressed == '67'){
        new_image("cloud.jpg");
        console.log("cloud");
    }
    if (keyPressed == '68'){
        new_image("dark_green.png");
        console.log("dark_green");
    }
    if (keyPressed == '71'){
        new_image("ground.png");
        console.log("ground");
    }
    if (keyPressed == '76'){
        new_image("light_green.png");
        console.log("light_green");
    }
    if (keyPressed == '78'){
        new_image("roof.jpg");
        console.log("netherrack");
    }
    if (keyPressed == '87'){
        new_image("trunk.jpg");
        console.log("wood");
    }
    if (keyPressed == '56'){
        new_image("unique.png");
        console.log("cloud");
    }
    if (keyPressed == '66'){
        new_image("wall.jpg");
        console.log("brick");
    }
    if (keyPressed == '89'){
        new_image("yellow_wall.png");
        console.log("PLANKED!");
    }
}
function up() {
    if (playery >= 0) {
        playery = playery - block_width;
        console.log("The block height is " + block_width);
        console.log("Up: x = " + playerx + ", and y = " + playery + ".");
        canvas.remove(playerobject);
        player_update();
    }
}
function down() {
    if (playery <= 800) {
        playery = playery + block_width;
        console.log("The block height is " + block_width);
        console.log("Down: x = " + playerx + ", and y = " + playery + ".");
        canvas.remove(playerobject);
        player_update();
    }
}
function left() {
    if (playerx >= 0) {
        playerx = playerx - block_width;
        console.log("The block height is " + block_width);
        console.log("Left: x = " + playerx + ", and y = " + playery + ".");
        canvas.remove(playerobject);
        player_update();
    }
}
function right() {
    if (playerx <= 1400) {
        playerx = playerx + block_width;
        console.log("The block height is " + block_width);
        console.log("Right: x = " + playerx + ", and y = " + playery + ".");
        canvas.remove(playerobject);
        player_update();
    }
}