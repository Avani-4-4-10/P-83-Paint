var mouseEvent=""
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

    var new_width=screen.width-70;
    var new_height=screen.height-300;

    if(screen.width < 992){
        canvas.width=new_width;
        canvas.height=new_height;
        document.body.style.overflow="hidden";
    }
    canvas.addEventListener("touchstart",my_touch_start)
    function my_touch_start(e){
        console.log(e)
        last_position_of_x= e.touches[0].clientX-canvas.offsetLeft;
        last_position_of_y= e.touches[0].clientY-canvas.offsetTop;
        color=document.getElementById("input_color").value;
    }

    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {

         current_position_of_touch_x = e.touches[0].clientX- canvas.offsetLeft;
         current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

      
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();
      

        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;
    }
    function clear_canvas(){
        ctx.clearRect(0,0,canvas.width,canvas.height)
    }
    canvas.addEventListener("mousedown",my_mousedown)
    function my_mousedown(){
        mouseEvent="mousedown"
    }
    canvas.addEventListener("mouseup",my_mouseup)
    function my_mouseup(){
        mouseEvent="mouseup"
    }
    canvas.addEventListener("mouseleave",my_mouseleave)
    function my_mouseleave(){
        mouseEvent="mouseleave"
    }
    canvas.addEventListener("mousemove",my_mousemove)
    function my_mousemove(e){
        current_Position_of_X=e.clientX-canvas.offsetLeft
        current_Position_of_Y=e.clientY-canvas.offsetTop
        if(mouseEvent=="mousedown"){
            color=document.getElementById("input_color").value;
            ctx.beginPath()
            ctx.lineWidth=width_of_line;
            ctx.strokeStyle=color;
            ctx.moveTo(last_position_of_X,last_position_of_Y)
            ctx.lineTo(current_Position_of_X,current_Position_of_Y)
            ctx.stroke()
        }
        last_position_of_X=current_Position_of_X
        last_position_of_Y=current_Position_of_Y
    }
