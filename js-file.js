

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






