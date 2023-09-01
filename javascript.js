let color = 'black'
let click = true

function boardDivision(size) {
    const board = document.querySelector('.board');
    const squares = board.querySelectorAll('div');
    squares.forEach(div => div.remove())
    board.style.gridTemplateColumns =  `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;

    for (let i = 0; i < amount; i++) {
        const square = document.createElement('div');
        square.addEventListener('mouseover', colorSquare)
        square.style.backgroundColor = 'white';
        board.insertAdjacentElement('beforeend',square);
}
}

boardDivision(16);

function colorSquare() {
    if (click) {
    if (color == 'random') {
        this.style.backgroundColor = 'hsla(' + (Math.random() * 360) + ', 100%, 50%, 1)';
        } else {
    this.style.backgroundColor = color;
   }
}
}

function changeColor (choice){
    color = choice;
}
function changeSize(input){
    if (input >= 2 && input < 100) {
        boardDivision(input);
    }
 else {
    console.log('Insert a number between 2 and 100')
 }
}
 
function resetBoard() {
    const board = document.querySelector('.board');
    const squares = board.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = 'white');
}

document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.tagName != "BUTTON") {
        click = !click 
    if (click) {
         document.querySelector('.mode').textContent = "Mode: Coloring";
        } else document.querySelector('.mode').textContent = "Mode: Not coloring"
    }})
