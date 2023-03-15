/*const container = document.getElementById("container")

function createGrid(x){
    for (var rows = 0; rows < x; rows++ ) {
        for (var cols = 0; cols < x; cols ++) {
            $("#container").append("<div class ='grid'></div/");
        }
    }
    $(".grid").width(960/x);
    $(".grid").height(960/x);

}*/

const gridSize = 16;
const cellSize = 50;

const grid = document.getElementById("grid");
 for (let i = 0; i < gridSize * gridSize; i++){
    

    
    const cell = document.createElement("div");
    cell.style.width = `${cellSize}px`;
    cell.style.height = `${cellSize}px`;
    cell.style.border = "1px solid black";
    

    grid.appendChild(cell);
    
 }

 grid.style.display = 'grid';
 grid.style.gridTemplateColumns = `repeat(${gridSize}, ${cellSize})`;
 grid.style.gridTemplateRows = `repeat(${gridSize}, ${cellSize})`;


//var grid = document.getElementById("grid");
//var cell = document.getElementById("div");
//cell.innerHTML ="TEXT";
//grid.appendChild("cell");