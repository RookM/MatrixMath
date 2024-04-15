const setupMatrixInputTables = (matrixOneRows, matrixOneCols, matrixTwoRows, matrixTwoCols) => {
    const matrixTableOne = document.getElementById("matrix-one-input");
    const matrixTableTwo = document.getElementById("matrix-two-input");

    for (let rowIndex = 0; rowIndex < matrixOneRows; rowIndex++) {
        let currentRow = document.createElement("tr");
        for (let colIndex = 0; colIndex < matrixOneCols; colIndex++) {
            let currentCol = document.createElement("td");
            let currentInput = document.createElement("input");
            let currentIndex = colIndex + "x" + rowIndex;
            currentInput.type = "number";
            currentInput.id = currentIndex;
            currentInput.name = currentIndex;
            currentInput.placeholder = "#";
            currentInput.required = true;
            currentCol.appendChild(currentInput);
            currentRow.appendChild(currentCol);
        }
        matrixTableOne.appendChild(currentRow);
    }

    for (let rowIndex = 0; rowIndex < matrixTwoRows; rowIndex++) {
        let currentRow = document.createElement("tr");
        for (let colIndex = 0; colIndex < matrixTwoCols; colIndex++) {
            let currentCol = document.createElement("td");
            let currentInput = document.createElement("input");
            let currentIndex = colIndex + "x" + rowIndex;
            currentInput.type = "number";
            currentInput.id = currentIndex;
            currentInput.name = currentIndex;
            currentInput.placeholder = "#";
            currentInput.required = true;
            currentCol.appendChild(currentInput);
            currentRow.appendChild(currentCol);
        }
        matrixTableTwo.appendChild(currentRow);
    }
};