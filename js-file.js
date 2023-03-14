const container = document.getElementById("container")

function createGrid(x){
    for (var rows = 0; rows < x; rows++ ) {
        for (var cols = 0; cols < x; cols ++) {
            $("#container").append("<div class ='grid'></div/");
        }
    }
    $(".grid").width(960/x);
    $(".grid").height(960/x);

}