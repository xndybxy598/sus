var mouseEvent = "";
var lastPositionOfX, lastPositionOfY; 
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "red";
width = 2;

canvas.addEventListener("mouseDown", my_mousedown);
function my_mousedown(e){

    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width").value;
    mouseEvent = "mouseDown";

}

canvas.addEventListener("mouseLeave", my_mouseleave);
function my_mouseleave(e){

mouseEvent = "mouseLeave";

}

canvas.addEventListener("mouseUp", my_mouseup);
function my_mouseup(e){

    mouseEvent = "mouseUp";
}

canvas.addEventListener("mouseMove", my_mousemove);
function my_mousemove(e){

    current_position_of_mouse_X = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_Y = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of X and Y coordinates = ");
        console.log("x = " + lastPositionOfX + " y = " + lastPositionOfY);
        ctx.moveTo(lastPositionOfX, lastPositionOfY);

        console.log("Current position of X and Y coordinates = ");
        console.log("x = " + current_position_of_mouse_X + " y = " + current_position_of_mouse_Y);
        ctx.lineTo(current_position_of_mouse_X, current_position_of_mouse_Y);
        ctx.stroke();
    
    }

    lastPositionOfX = current_position_of_mouse_X;
    lastPositionOfY = current_position_of_mouse_Y;

}

