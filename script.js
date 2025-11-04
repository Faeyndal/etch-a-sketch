
function createGrid (gridSize = 5) {
    const grid = document.querySelector(".gridContainer");

    console.log(gridSize);

    for (let c = 0; c < gridSize; c++){
        const row = document.createElement('div');

        row.classList.add("gridRow");

        for (let i = 0; i < gridSize; i++ ){
            const tile = document.createElement('div');

            tile.classList.add("gridTile");
            tile.style.width = (800/gridSize) + 'px';
            tile.style.height = (800/gridSize) + 'px';
            tile.addEventListener("mouseover", colorTile);

            row.appendChild(tile);
        }
        grid.appendChild(row);
    }

}

createGrid();

function resetGrid() {
    let grid = document.querySelector('.gridContainer');

    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}
const resetButton = document.querySelector('.resetButton');

resetButton.addEventListener('click', () => {
    let gridSize = Number(prompt('Size of new grid? (max 100)'));
    
    if (gridSize > 100 || gridSize < 1 || isNaN(gridSize)) {
        alert("Size must be a number between 1 and 100");
        return;
    }
    resetGrid();
    createGrid(gridSize);

});

function colorTile(e) {
    e.target.style.backgroundColor = 'black';
}

