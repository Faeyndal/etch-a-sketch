let gridSize = 4;

function createGrid () {
    const grid = document.querySelector(".gridContainer");

    for (let c = 0; c < gridSize; c++){
        const row = document.createElement('div');
        row.classList.add("gridRow");
        for (let i = 0; i < gridSize; i++ ){
            const tile = document.createElement('div');
            tile.classList.add("gridTile");
            
            row.appendChild(tile);
        }
        grid.appendChild(row);
    }

}


createGrid(gridSize);