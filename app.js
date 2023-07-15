const board = document.querySelector('.board');
const blackButton = document.getElementById('black');
const whiteButton = document.getElementById('white');
const randomButton = document.getElementById('random');
const resetButton = document.getElementById('reset');
const setSizeButton = document.querySelector('.buttons button');
const sizeInput = document.querySelector('input[type="text"]');

function makeBoard(size){
    board.innerHTML = "";

    board.style.gridTemplateColumns = `repeat(${size},1fr)`
    board.style.gridTemplateRows = `repeat(${size},1fr)`

    for(let i = 0;i < size * size;i++){
        const square = document.createElement("div");
        square.addEventListener("mouseover",cellMouseover);
        board.append(square);
    }
}
