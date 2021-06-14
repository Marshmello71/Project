rover_image="Rover 1.jpg";
background_image="ghiphy.gif";
rover_x=10;
rover_y=10;
rover_width=100;
rover_height=100;
canvas=document.getElementById("Mycanvas");
ctx=canvas.getContext("2d");
function add() { background_imgTag = new Image(); //defining a variable with a new image 
background_imgTag.onload = uploadBackground; // setting a function, onloading this variable 
background_imgTag.src = background_image; // load image 

rover_imgTag = new Image(); //defining a variable with a new image 
rover_imgTag.onload = uploadrover; // setting a function, onloading this variable 
rover_imgTag.src = rover_image; // load image 
}
function uploadBackground() 
{ 
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadrover() 
{ 
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height); 
}


window.addEventListener("keydown",my_keydown);

if(keyPressed == '38')
{
car_1_up();
console.log("up")
}
if(keyPressed == '40')
{
car_1_down();
console.log("down")
}
if(keyPressed == '37')
{
car_1_left();
console.log("left")
}
if(keyPressed == '39')
{
car_1_right();
console.log("right");
}
if(keyPressed == '38')
{
car_2_up();
console.log("up")
}
if(keyPressed == '40')
{
car_2_down();
console.log("down")
}
if(keyPressed == '37')
{
car_2_left();
console.log("left")
}
if(keyPressed == '39')
{
car_2_right();
console.log("right");
}

        function car_1_up()
        {
            if(car_1_y>=0)
            {
                player_y=player_y-block_image_height;
                console.log("When Up arrow key is pressed, X= " +player_x +" , Y = "+player_y);
                canvas.remove(player_object);
            }
        }
        function car_1_down()
        {
            if(car_1_y<=500)
            {
                player_y=player_y-block_image_height;
                console.log("When Up arrow key is pressed, X= " +player_x +" , Y = "+player_y);
                canvas.remove(player_object);
            }
        }
        function car_1_left()
        {
            if(car_1_x >=0)
            {
                player_x=player_x-block_image_width;
                console.log("When Up arrow key is pressed, X= " +player_x +" , Y = "+player_y);
                canvas.remove(player_object);
            }
        }
        function car_1_right()
        {
            if(car_1_x <=850)
            {
                player_x=player_x-block_image_width;
                console.log("When Up arrow key is pressed, X= " +player_x +" , Y = "+player_y);
                canvas.remove(player_object);
            }
        }
        function car_2_up()
        {
            if(car_2_y>=0)
            {
                player_y=player_y-block_image_height;
                console.log("When Up arrow key is pressed, X= " +player_x +" , Y = "+player_y);
                canvas.remove(player_object);
            }
        }
        function car_2_down()
        {
            if(car_2_y<=500)
            {
                player_y=player_y-block_image_height;
                console.log("When Up arrow key is pressed, X= " +player_x +" , Y = "+player_y);
                canvas.remove(player_object);            }
        }
        function car_2_left()
        {
            if(car_2_x >=0)
            {
                player_x=player_x-block_image_width;
                console.log("When Up arrow key is pressed, X= " +player_x +" , Y = "+player_y);
                canvas.remove(player_object);
            }
        }
        function car_2_right()
        {
            if(car_2_x <=850)
            {
                player_x=player_x-block_image_width;
                console.log("When Up arrow key is pressed, X= " +player_x +" , Y = "+player_y);
                canvas.remove(player_object);
            }
        }