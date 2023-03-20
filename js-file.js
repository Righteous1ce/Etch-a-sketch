let gridSize = 16;
let cellSize = Math.floor(600 / gridSize); 
// the default cell sizing is wrong compared to the rest

const grid = document.getElementById("grid");

grid.style.gridTemplateColumns = `repeat(${gridSize}, ${cellSize}px)`;
grid.style.gridTemplateRows = `repeat(${gridSize}, ${cellSize}px)`;

for (let i = 0; i < gridSize * gridSize; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.style.width = `${cellSize}px`;
  cell.style.height = `${cellSize}px`;
  cell.style.border = "1px solid black";
  grid.appendChild(cell);
}


jQuery(".cell").hover(function() {
  jQuery(this).css("background-color", "#3882F6");
});


function updateGridSize() {
  const width = parseInt(document.querySelector('input[name="width"]').value);
  const height = parseInt(document.querySelector('input[name="height"]').value);
  if (!width || !height) return;
  gridSize = Math.min(width, height);
  cellSize = Math.floor(600 / gridSize);
  grid.style.gridTemplateColumns = `repeat(${gridSize}, ${cellSize}px)`;
  grid.style.gridTemplateRows = `repeat(${gridSize}, ${cellSize}px)`;
  grid.innerHTML = "";
  for (let i = 0; i < gridSize * gridSize; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.width = `${cellSize}px`;
    cell.style.height = `${cellSize}px`;
    cell.style.border = "1px solid black";
    grid.appendChild(cell);
  }
  jQuery(".cell").hover(function() {
    jQuery(this).css("background-color", "#3882F6");
  });
}


function openPopup() {
  document.getElementById("myPopup").classList.add("popup-open");
}


function closePopup() {
  document.getElementById("myPopup").classList.remove("popup-open");
}


document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  updateGridSize();
  closePopup();
});




 


 //input will change grid size 
 //but not the px size of the grid

 // the grid size and cell size might need
 // changing as 

//document.getElementById("click me").onclick = function click(){

//}










