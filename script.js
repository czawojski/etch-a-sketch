let divContainer = document.querySelector(".container");

// let num = 16;

function makeDivGrid () {
    let num = prompt("How many pixels on each row?", "16");
    if (num > 100) {
        num = 100;
    }
    for (let i = 0; i < num; i++) {
        // here I want to make one row, do that 16 times -- add class "row"
        let newRow = document.createElement("div");
        newRow.classList.add("row");
        newRow.setAttribute("id", "target");;
        divContainer.appendChild(newRow);
        for (let j = 0; j < num; j++) {
        // here I want to make 16 columns within the row above, do that for each of 16 rows -- add class "column"
        let newColumn = document.createElement("div");
        newColumn.classList.add("column");
        newColumn.addEventListener('mouseover', 
            e => e.target.classList.add('color-class')
        )
        newColumn.setAttribute("id", "target");;
        newRow.appendChild(newColumn);
        }
    }
}



// makeDivGrid();


// don't need 256 boxes -- but 16 rows with 16 column divs within them -- one row, 16 columns -- do that 16 times down the page