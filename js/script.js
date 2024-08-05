////////////////////////////////////////

document.addEventListener('DOMContentLoaded', () => {
  const circularProgresses = document.querySelectorAll('.circular-progress');

  circularProgresses.forEach(circularProgress => {
    const progressValue = circularProgress.getAttribute('data-progress');
    const outerRing = circularProgress.querySelector('.outer-ring');
    outerRing.style.background = `conic-gradient(#2F668C 0% ${progressValue}%, #f5f4f4 ${progressValue}% 100%)`;
  });
});

document.getElementById('navigate-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor link behavior
  
    // Reveal the section
    var targetSection = document.getElementById('graduate');
    targetSection.classList.remove('hidden-section');
    targetSection.classList.add('visible-section');
  
    var hideSection = document.getElementById('index');
    hideSection.classList.remove('visible-section');
    hideSection.classList.add('hidden-section');
  
    // Scroll to the section
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });

document.getElementById('navigate-link1').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default anchor link behavior

  // Reveal the section
  var targetSection = document.getElementById('parttime');
  targetSection.classList.remove('hidden-section');
  targetSection.classList.add('visible-section');

  var hideSection = document.getElementById('graduate');
  hideSection.classList.remove('visible-section');
  hideSection.classList.add('hidden-section');

  // Scroll to the section
  targetSection.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('parttime-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor link behavior
  
   // Reveal the section
   var targetSection = document.getElementById('parttime1');
   targetSection.classList.remove('hidden-section');
   targetSection.classList.add('visible-section');
  
   var hideSection = document.getElementById('parttime');
   hideSection.classList.remove('visible-section');
   hideSection.classList.add('hidden-section');
  
    // Scroll to the section
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('narrative-parttime1').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor link behavior
  
   // Reveal the section
   var targetSection = document.getElementById('parttime-narative');
   targetSection.classList.remove('hidden-section');
   targetSection.classList.add('visible-section');
  
   var hideSection = document.getElementById('parttime1');
   hideSection.classList.remove('visible-section');
   hideSection.classList.add('hidden-section');
  
    // Scroll to the section
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('narrative-parttime2').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor link behavior
  
   // Reveal the section
   var targetSection = document.getElementById('parttime-narative');
   targetSection.classList.remove('hidden-section');
   targetSection.classList.add('visible-section');
  
   var hideSection = document.getElementById('parttime1');
   hideSection.classList.remove('visible-section');
   hideSection.classList.add('hidden-section');
  
    // Scroll to the section
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('narrative-parttime3').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor link behavior
  
   // Reveal the section
   var targetSection = document.getElementById('parttime-narative');
   targetSection.classList.remove('hidden-section');
   targetSection.classList.add('visible-section');
  
   var hideSection = document.getElementById('parttime1');
   hideSection.classList.remove('visible-section');
   hideSection.classList.add('hidden-section');
  
    // Scroll to the section
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('narrative-parttime4').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor link behavior
  
   // Reveal the section
   var targetSection = document.getElementById('parttime-narative');
   targetSection.classList.remove('hidden-section');
   targetSection.classList.add('visible-section');
  
   var hideSection = document.getElementById('parttime1');
   hideSection.classList.remove('visible-section');
   hideSection.classList.add('hidden-section');
  
    // Scroll to the section
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('notify-link1').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor link behavior
  
   // Reveal the section
   var targetSection = document.getElementById('parttime-narative1');
   targetSection.classList.remove('hidden-section');
   targetSection.classList.add('visible-section');
  
   var hideSection = document.getElementById('parttime-narative');
   hideSection.classList.remove('visible-section');
   hideSection.classList.add('hidden-section');
  
    // Scroll to the section
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });

document.getElementById('navigate-link2').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default anchor link behavior

  // Reveal the section
  var targetSection = document.getElementById('family');
  targetSection.classList.remove('hidden-section');
  targetSection.classList.add('visible-section');

  var hideSection = document.getElementById('graduate');
  hideSection.classList.remove('visible-section');
  hideSection.classList.add('hidden-section');

  // Scroll to the section
  targetSection.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('family-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor link behavior
  
   // Reveal the section
   var targetSection = document.getElementById('family1');
   targetSection.classList.remove('hidden-section');
   targetSection.classList.add('visible-section');
  
   var hideSection = document.getElementById('family');
   hideSection.classList.remove('visible-section');
   hideSection.classList.add('hidden-section');
  
    // Scroll to the section
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('narrative-fam').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor link behavior
  
   // Reveal the section
   var targetSection = document.getElementById('family-narative');
   targetSection.classList.remove('hidden-section');
   targetSection.classList.add('visible-section');
  
   var hideSection = document.getElementById('family1');
   hideSection.classList.remove('visible-section');
   hideSection.classList.add('hidden-section');
  
    // Scroll to the section
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });


  document.getElementById('notify-link2').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor link behavior
  
   // Reveal the section
   var targetSection = document.getElementById('family-narrative1');
   targetSection.classList.remove('hidden-section');
   targetSection.classList.add('visible-section');
  
   var hideSection = document.getElementById('saving');
   hideSection.classList.remove('visible-section');
   hideSection.classList.add('hidden-section');
  
    // Scroll to the section
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });


  document.getElementById('notify-link3').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor link behavior
  
   // Reveal the section
   var targetSection = document.getElementById('family-narrative1');
   targetSection.classList.remove('hidden-section');
   targetSection.classList.add('visible-section');
  
   var hideSection = document.getElementById('hold');
   hideSection.classList.remove('visible-section');
   hideSection.classList.add('hidden-section');
  
    // Scroll to the section
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });


  document.getElementById('notify-link4').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor link behavior
  
   // Reveal the section
   var targetSection = document.getElementById('family-narrative1');
   targetSection.classList.remove('hidden-section');
   targetSection.classList.add('visible-section');
  
   var hideSection = document.getElementById('family-narative');
   hideSection.classList.remove('visible-section');
   hideSection.classList.add('hidden-section');
  
    // Scroll to the section
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });


document.getElementById('navigate-link3').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default anchor link behavior

 // Reveal the section
 var targetSection = document.getElementById('own');
 targetSection.classList.remove('hidden-section');
 targetSection.classList.add('visible-section');

 var hideSection = document.getElementById('graduate');
 hideSection.classList.remove('visible-section');
 hideSection.classList.add('hidden-section');

  // Scroll to the section
  targetSection.scrollIntoView({ behavior: 'smooth' });
});


document.getElementById('ownbusiness').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default anchor link behavior

 // Reveal the section
 var targetSection = document.getElementById('own-business');
 targetSection.classList.remove('hidden-section');
 targetSection.classList.add('visible-section');

 var hideSection = document.getElementById('own');
 hideSection.classList.remove('visible-section');
 hideSection.classList.add('hidden-section');

  // Scroll to the section
  targetSection.scrollIntoView({ behavior: 'smooth' });
});


document.getElementById('own-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor link behavior
  
   // Reveal the section
   var targetSection = document.getElementById('own1');
   targetSection.classList.remove('hidden-section');
   targetSection.classList.add('visible-section');
  
   var hideSection = document.getElementById('own-business');
   hideSection.classList.remove('visible-section');
   hideSection.classList.add('hidden-section');
  
    // Scroll to the section
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('narrative-own1').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor link behavior
  
   // Reveal the section
   var targetSection = document.getElementById('own-narative1');
   targetSection.classList.remove('hidden-section');
   targetSection.classList.add('visible-section');
  
   var hideSection = document.getElementById('own1');
   hideSection.classList.remove('visible-section');
   hideSection.classList.add('hidden-section');
  
    // Scroll to the section
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('narrative-own2').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor link behavior
  
   // Reveal the section
   var targetSection = document.getElementById('own-narative2');
   targetSection.classList.remove('hidden-section');
   targetSection.classList.add('visible-section');
  
   var hideSection = document.getElementById('own1');
   hideSection.classList.remove('visible-section');
   hideSection.classList.add('hidden-section');
  
    // Scroll to the section
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('narrative-own3').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor link behavior
  
   // Reveal the section
   var targetSection = document.getElementById('own-narative3');
   targetSection.classList.remove('hidden-section');
   targetSection.classList.add('visible-section');
  
   var hideSection = document.getElementById('own1');
   hideSection.classList.remove('visible-section');
   hideSection.classList.add('hidden-section');
  
    // Scroll to the section
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });


  document.getElementById('game-baked').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor link behavior
  
   // Reveal the section
   var targetSection = document.getElementById('game1');
   targetSection.classList.remove('hidden-section');
   targetSection.classList.add('visible-section');
  
   var hideSection = document.getElementById('own-narative1');
   hideSection.classList.remove('visible-section');
   hideSection.classList.add('hidden-section');
  
    // Scroll to the section
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });


  document.getElementById('game-link1').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor link behavior
  
   // Reveal the section
   var targetSection = document.getElementById('aftergame');
   targetSection.classList.remove('hidden-section');
   targetSection.classList.add('visible-section');
  
   var hideSection = document.getElementById('game1');
   hideSection.classList.remove('visible-section');
   hideSection.classList.add('hidden-section');
  
    // Scroll to the section
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });


  document.getElementById('game-art').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor link behavior
  
   // Reveal the section
   var targetSection = document.getElementById('game2');
   targetSection.classList.remove('hidden-section');
   targetSection.classList.add('visible-section');
  
   var hideSection = document.getElementById('own-narative2');
   hideSection.classList.remove('visible-section');
   hideSection.classList.add('hidden-section');
  
    // Scroll to the section
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });


  document.getElementById('game-link2').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor link behavior
  
   // Reveal the section
   var targetSection = document.getElementById('aftergame');
   targetSection.classList.remove('hidden-section');
   targetSection.classList.add('visible-section');
  
   var hideSection = document.getElementById('game2');
   hideSection.classList.remove('visible-section');
   hideSection.classList.add('hidden-section');
  
    // Scroll to the section
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });



  document.getElementById('game-digital').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor link behavior
  
   // Reveal the section
   var targetSection = document.getElementById('game3');
   targetSection.classList.remove('hidden-section');
   targetSection.classList.add('visible-section');
  
   var hideSection = document.getElementById('own-narative3');
   hideSection.classList.remove('visible-section');
   hideSection.classList.add('hidden-section');
  
    // Scroll to the section
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });


  document.getElementById('game-link3').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor link behavior
  
   // Reveal the section
   var targetSection = document.getElementById('aftergame');
   targetSection.classList.remove('hidden-section');
   targetSection.classList.add('visible-section');
  
   var hideSection = document.getElementById('game3');
   hideSection.classList.remove('visible-section');
   hideSection.classList.add('hidden-section');
  
    // Scroll to the section
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });


//////////////////////////////////////////////////////////////////////////

  

  document.getElementById('saving-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor link behavior
  
    // Reveal the section
    var targetSection = document.getElementById('saving');
    targetSection.classList.remove('hidden-section');
    targetSection.classList.add('visible-section');
  
    var hideSection = document.getElementById('family1');
    hideSection.classList.remove('visible-section');
    hideSection.classList.add('hidden-section');
  
    // Scroll to the section
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });


  document.getElementById('hold-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor link behavior
  
    // Reveal the section
    var targetSection = document.getElementById('hold');
    targetSection.classList.remove('hidden-section');
    targetSection.classList.add('visible-section');
  
    var hideSection = document.getElementById('family1');
    hideSection.classList.remove('visible-section');
    hideSection.classList.add('hidden-section');
  
    // Scroll to the section
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });

///////////////////////////////////////////////////////////////////////////

  // Function to update progress circle
  function updateCircularProgress(element, newValue) {
        element.setAttribute('data-progress', newValue);
        element.querySelector('.inner-circle .percentage').innerHTML = `${newValue}%<br><small style="font-size: x-small;">${element.querySelector('.inner-circle .percentage small').textContent}</small>`;
        element.querySelector('.outer-ring').style.background = `conic-gradient(#2F668C 0% ${newValue}%, #f5f4f4 ${newValue}% 100%)`;
    }

    // Update function for wallet
    function updateWallet(newWalletValue) {
        document.getElementById('wallet-amount').textContent = newWalletValue;
    }

    // Add event listeners to choice cards
    document.querySelectorAll('.choice-card').forEach(card => {
        card.addEventListener('click', function(event) {
            event.preventDefault();
            const happiness = this.getAttribute('data-happiness');
            const focus = this.getAttribute('data-focus');
            const connection = this.getAttribute('data-connection');
            const wallet = this.getAttribute('data-wallet');

            updateCircularProgress(document.querySelector('.circular-progress:nth-child(1)'), happiness);
            updateCircularProgress(document.querySelector('.circular-progress:nth-child(2)'), focus);
            updateCircularProgress(document.querySelector('.circular-progress:nth-child(3)'), connection);
            updateWallet(wallet);

            // Navigate to the target section
            const targetSection = document.querySelector(this.getAttribute('href'));
            targetSection.classList.remove('hidden-section');
            targetSection.classList.add('visible-section');

            const currentSection = document.querySelector('.visible-section:not(#' + targetSection.id + ')');
            currentSection.classList.remove('visible-section');
            currentSection.classList.add('hidden-section');

            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });



////////////////////////////////////////


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
