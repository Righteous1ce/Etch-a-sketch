const gridSize = 16;
const cellSize = 20;

const grid = document.getElementById("grid");
 for (let i = 0; i < gridSize * gridSize; i++){
    
    

    
    const cell = document.createElement("div");
    cell.style.width = `${cellSize}px`;
    cell.style.height = `${cellSize}px`;
    cell.style.border = "1px solid black";
    

    grid.appendChild(cell);
    
    
 }

 jQuery("div").hover(function(){
    jQuery(this).css("background-color", "yellow");
 }, function(){
    jQuery(this).css("background-color", "pink");

 });

 // onMouseHover ---> onMouseOut though maybe not onMouseOut
 //because we want to leave a trail like a pen 







