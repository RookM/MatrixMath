function setupPageWidth() {
    const root = document.querySelector(":root");
    const innerWidth = window.innerWidth;
    const scrollbarWidth = innerWidth - root.clientWidth;
    root.style.setProperty("--page-width", innerWidth + "px");
    root.style.setProperty("--scrollbar-width", scrollbarWidth + "px");
}
window.addEventListener("resize", () => {
    setupPageWidth();
});

// Matrix "Class"
var Matrix = function(rows, cols, nums) {
    const rowCount = rows;
    const colCount = cols;
    const fullMatrix = [];
    for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
        let currentRow = [];
        currentRow.length = 0;
        for (let colIndex = 0; colIndex < colCount; colIndex++) {
            let currentIndex = (rowIndex * colCount) + colIndex;
            currentRow[colIndex] = nums[currentIndex];
        }
        fullMatrix[rowIndex] = currentRow;
    }

    const getRowCount = function() {
        return rowCount;
    };
    const getColCount = function() {
        return colCount;
    };
    const getFullMatrix = function() {
        return fullMatrix;
    };

    return { getRowCount, getColCount, getFullMatrix };
};

const setupMatrixInputTables = (matrixOneRows, matrixOneCols, matrixTwoRows, matrixTwoCols) => {
    const matrixTableOne = document.getElementById("matrix-one-input");
    const matrixTableTwo = document.getElementById("matrix-two-input");

    for (let rowIndex = 0; rowIndex < matrixOneRows; rowIndex++) {
        let currentRow = document.createElement("tr");
        for (let colIndex = 0; colIndex < matrixOneCols; colIndex++) {
            let currentCol = document.createElement("td");
            let currentInput = document.createElement("input");
            let currentIndex = "FM" + colIndex + "x" + rowIndex;
            currentInput.type = "number";
            currentInput.className = "fm-value";
            currentInput.id = currentIndex;
            currentInput.name = currentIndex;
            currentInput.placeholder = "";
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
            let currentIndex = "SM" + colIndex + "x" + rowIndex;
            currentInput.type = "number";
            currentInput.className = "sm-value";
            currentInput.id = currentIndex;
            currentInput.name = currentIndex;
            currentInput.placeholder = "";
            currentInput.required = true;
            currentCol.appendChild(currentInput);
            currentRow.appendChild(currentCol);
        }
        matrixTableTwo.appendChild(currentRow);
    }
};

let matrixOneRows = 0;
let matrixOneCols = 0;
let matrixTwoRows = 0;
let matrixTwoCols = 0;
const matrixOneValues = [];
const matrixTwoValues = [];
let matrixOneIndex = 0;
let matrixTwoIndex = 0;
const setupForm = document.getElementById("setup-form");
setupForm.addEventListener("submit", (event) => {
    event.preventDefault();

    matrixOneRows = document.getElementById("matrix-one-rows").value;
    matrixOneCols = document.getElementById("matrix-one-cols").value;
    matrixTwoRows = document.getElementById("matrix-two-rows").value;
    matrixTwoCols = document.getElementById("matrix-two-cols").value;
    setupMatrixInputTables(matrixOneRows, matrixOneCols, matrixTwoRows, matrixTwoCols);
});

const matrixForm = document.getElementById("matrix-form");
matrixForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const allFMs = document.querySelectorAll(".fm-value");
    allFMs.forEach((input) => {
        matrixOneValues[matrixOneIndex] = input.value;
        matrixOneIndex++
    });
    const allSMs = document.querySelectorAll(".sm-value");
    allSMs.forEach((input) => {
        matrixTwoValues[matrixTwoIndex] = input.value;
        matrixTwoIndex++
    });
});