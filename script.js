

function createGrid (gridSize) {
    const grid = document.querySelector(".gridContainer");

    const gridTile = document.createElement('div');

    for (let i = 0; i < gridSize; i++ ){
        grid.appendChild(gridTile);
    }

}