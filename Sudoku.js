class Sudoku {
    constructor() {
        // Constructor: No specific initialization needed for this class
    }


    solve(problem) {
        /**
         * Solves a given Sudoku problem using a backtracking algorithm.
         * @param {Array} problem - A 9x9 grid representing the Sudoku puzzle.
         */
        for (let y = 0; y < 9; y++) {
            for (let x = 0; x < 9; x++) {
                // Check for empty cells (denoted by 0)
                if (problem[y][x] === 0) {
                    // Try placing numbers 1 through 9
                    for (let n = 1; n <= 9; n++) {
                        if (this.possible(problem, y, x, n)) {
                            problem[y][x] = n;
                            this.solve(problem);  // Recursive call to solve the rest of the grid
                            problem[y][x] = 0;  // Backtrack if the solution fails
                        }
                    }
                    return;  // Exit if no solution is found
                }
            }
        }
        

        // Print the solved Sudoku grid
        console.log("[ " + "=".repeat(23) + " ]");
        /*
        problem.forEach(row => {
            console.log(row);
        }); */
        console.log(problem);
        console.log("[ " + "=".repeat(23) + " ]\n");
       
    }




    possible(grid, y, x, n) {
        /**
         * Checks if a number can be placed in a specific cell of the grid.
         * @param {Array} grid - The 9x9 Sudoku grid.
         * @param {number} y - Row index.
         * @param {number} x - Column index.
         * @param {number} n - Number to check.
         * @returns {boolean} True if the number can be placed, false otherwise.
         */
        // Check if the number is already in the row
        for (let i = 0; i < 9; i++) {
            if (grid[y][i] === n) {
                return false;
            }
        }

        // Check if the number is already in the column
        for (let i = 0; i < 9; i++) {
            if (grid[i][x] === n) {
                return false;
            }
        }

        // Check if the number is in the 3x3 subgrid
        const x0 = Math.floor(x / 3) * 3;  // Top-left corner of the subgrid (x-axis)
        const y0 = Math.floor(y / 3) * 3;  // Top-left corner of the subgrid (y-axis)
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (grid[y0 + i][x0 + j] === n) {
                    return false;
                }
            }
        }

        // If all checks pass, the number can be placed
        return true;
    }
}







// Example usage
const sudoku = new Sudoku();


const grid9x9 = [[5,3,0,0,7,0,0,0,0], 
                [6,0,0,1,9,5,0,0,0],
                [0,9,8,0,0,0,0,6,0],
                [8,0,0,0,6,0,0,0,3],
                [4,0,0,8,0,3,0,0,1],
                [7,0,0,0,2,0,0,0,6], 
                [0,6,0,0,0,0,2,8,0],
                [0,0,0,4,1,9,0,0,5],
                [0,0,0,0,8,0,0,7,9]];

sudoku.solve(grid9x9);

/*
  ~ DevelopedByJMS™
  ~ José Sixpenze
  ~ 13/01/2025

*/