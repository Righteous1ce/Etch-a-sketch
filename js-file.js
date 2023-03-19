const gridSize = 16;
const cellSize = 20;

const grid = document.getElementById("grid");
 for (let i = 0; i < gridSize * gridSize; i++){
    
    

    
    const cell = document.createElement("div");
    cell.classList.add("cell"); // Targets the individual cell
    cell.style.width = `${cellSize}px`;
    cell.style.height = `${cellSize}px`;
    cell.style.border = "1px solid black";
    

    grid.appendChild(cell);
    
    
 }

 jQuery(".cell").hover(function(){ // calls the cell
    jQuery(this).css("background-color", "#154360");
 });

 function openPopup() {
   document.getElementById("myPopup").classList.add("popup-open");
   popup.style.display = "block";
   
 }
 
 function closePopup() {
   document.getElementById("myPopup").classList.remove("popup-open");
   popup.style.display = "none";
 }


//document.getElementById("click me").onclick = function click(){

//}















