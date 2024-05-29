const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
    
    const path1 = new Path2D();    
    path1.moveTo(20, 100);
    path1.lineTo(140, 10);
    path1.lineTo(260, 100);
    path1.closePath();    
    context.strokeStyle = "blue";
    context.stroke(path1);

canvas.onclick = function() {
    context.fillStyle = "blue";
    context.fill(path1)
};

const path2 = new Path2D();     
path2.moveTo(20, 110);
path2.lineTo(140, 200);
path2.lineTo(260, 110);
path2.closePath();   
context.strokeStyle = "red";
context.stroke(path2);
