document.addEventListener('DOMContentLoaded', () => {
    const words = ["INTEREST", "BILLING", "BALANCE", "PENALTY", "ANNUAL"];
    const gridSize = 10; // 10x10 grid
    let grid = [];
    let selectedCells = [];
    let foundWords = new Set();

    function generatePuzzle() {
        const wordList = document.getElementById('word-list');
        const wordSearch = document.getElementById('word-search');
        
        if (!wordList || !wordSearch) {
            console.error('Element not found');
            return;
        }

        grid = Array.from({ length: gridSize }, () => Array(gridSize).fill(''));

        // Clear previous puzzle and word list
        wordList.innerHTML = '';
        wordSearch.innerHTML = '';

        // Place words in grid
        words.forEach(word => placeWord(grid, word));

        // Fill remaining empty cells with random letters
        for (let i = 0; i < gridSize; i++) {
            for (let j = 0; j < gridSize; j++) {
                if (grid[i][j] === '') {
                    grid[i][j] = String.fromCharCode(65 + Math.floor(Math.random() * 26));
                }
            }
        }

        // Render grid
        grid.forEach((row, i) => {
            row.forEach((cell, j) => {
                const div = document.createElement('div');
                div.classList.add('cell');
                div.textContent = cell;
                div.dataset.row = i;
                div.dataset.col = j;
                div.addEventListener('click', () => selectCell(i, j));
                wordSearch.appendChild(div);
            });
        });

        // Render word list
        words.forEach(word => {
            const li = document.createElement('li');
            li.textContent = word;
            li.classList.add('word');
            li.dataset.word = word;
            wordList.appendChild(li);
        });

        selectedCells = [];
        foundWords.clear();
    }

    function placeWord(grid, word) {
        const directions = [
            { x: 1, y: 0 }, // right
            { x: 0, y: 1 }, // down
            { x: 1, y: 1 }, // diagonal down-right
            { x: -1, y: 0 }, // left
            { x: 0, y: -1 }, // up
            { x: -1, y: -1 } // diagonal up-left
        ];

        function canPlaceWord(x, y, dx, dy) {
            for (let i = 0; i < word.length; i++) {
                const newX = x + i * dx;
                const newY = y + i * dy;
                if (newX < 0 || newX >= gridSize || newY < 0 || newY >= gridSize || (grid[newX][newY] !== '' && grid[newX][newY] !== word[i])) {
                    return false;
                }
            }
            return true;
        }

        function placeWordInGrid(x, y, dx, dy) {
            for (let i = 0; i < word.length; i++) {
                grid[x + i * dx][y + i * dy] = word[i];
            }
        }

        for (let i = 0; i < 100; i++) {
            const x = Math.floor(Math.random() * gridSize);
            const y = Math.floor(Math.random() * gridSize);
            const direction = directions[Math.floor(Math.random() * directions.length)];
            
            if (canPlaceWord(x, y, direction.x, direction.y)) {
                placeWordInGrid(x, y, direction.x, direction.y);
                return;
            }
        }
    }

    function selectCell(row, col) {
        const cell = document.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`);
        if (!cell) return;

        if (cell.classList.contains('selected')) {
            cell.classList.remove('selected');
            selectedCells = selectedCells.filter(c => c.row !== row || c.col !== col);
        } else {
            cell.classList.add('selected');
            selectedCells.push({ row, col });
            checkForWord();
        }
    }

    function checkForWord() {
        const selectedLetters = selectedCells.map(({ row, col }) => grid[row][col]).join('');
        
        if (words.includes(selectedLetters)) {
            foundWords.add(selectedLetters);
            updateWordList(selectedLetters);
            selectedCells.forEach(({ row, col }) => {
                const cell = document.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`);
                if (cell) {
                    cell.classList.remove('selected');
                    cell.classList.add('completed');
                }
            });
            selectedCells = [];
            checkIfPuzzleSolved();
        }
    }

    function checkIfPuzzleSolved() {
        if (foundWords.size === words.length) {
            showModal();
        }
    }

    function updateWordList(word) {
        const wordItems = document.querySelectorAll('.word');
        wordItems.forEach(item => {
            if (item.dataset.word === word) {
                item.classList.add('crossed-out');
            }
        });
    }

    function showModal() {
        const modal = document.getElementById('modal');
        if (modal) {
            modal.style.display = 'block';
        }
    }

    // Close the modal
    function closeModal() {
        const modal = document.getElementById('modal');
        if (modal) {
            modal.style.display = 'none';
        }
    }

    // Set up the close button for the modal
    document.querySelector('.modal .close')?.addEventListener('click', closeModal);
    window.addEventListener('click', (event) => {
        const modal = document.getElementById('modal');
        if (modal && event.target === modal) {
            closeModal();
        }
    });

    // Initial puzzle generation
    generatePuzzle();
});
