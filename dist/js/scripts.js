(() => {
  const container = document.getElementById('app');
  container.classList.add('container');

  const stateGame = [];
  const quantityCells = 9;
  let changePlayer = true;

  const createCells = () => {
    for (let i = 0; i < quantityCells; i++) {
      const newCell = {
        id: i,
        name: '',
      };
      stateGame.push(newCell);
    }
  };

  const renderCells = () => {
    container.innerHTML = '';
    for (let i = 0; i < quantityCells; i++) {
      const gameCell = document.createElement('div');
      gameCell.classList.add('game__cell');
      container.appendChild(gameCell);
      gameCell.textContent = stateGame[i].name;
      gameCell.dataset.cell = i;
    }
  };
  createCells();
  renderCells();

  const clearContainer = () => {
    for (let i = 0; i < quantityCells; i++) {
      stateGame[i].name = '';
    }
    renderCells();
  };

  const showWinner = (winPlayer) => {
    // eslint-disable-next-line no-alert
    alert(`Player ${winPlayer} win!!!`);
    for (let i = 0; i < quantityCells; i++) {
      if (stateGame[i].name === '') {
        stateGame[i].name = ' ';
      }
    }
  };

  const winCombo = () => {
    const winTemplates = ['012', '345', '678', '036', '147', '258', '048', '246'];
    let winPlayer = '';
    let comboX = '';
    let comboO = '';
    for (let i = 0; i < quantityCells; i++) {
      if (stateGame[i].name === 'X') {
        comboX += i;
      }
      if (stateGame[i].name === 'O') {
        comboO += i;
      }
    }

    for (let i = 0; i < winTemplates.length; i++) {
      if (comboX.indexOf(winTemplates[i]) > -1) {
        winPlayer = 'X';
        break;
      }
      if (comboO.indexOf(winTemplates[i]) > -1) {
        winPlayer = 'O';
        break;
      }
    }
    if (winPlayer !== '') {
      showWinner(winPlayer);
    }
  };

  container.addEventListener('click', (e) => {
    if (e.target.classList.value === 'game__cell') {
      const targetImage = e.target.dataset.cell;
      for (let i = 0; i < quantityCells; i++) {
        if (stateGame[i].id == targetImage && stateGame[i].name === '') {
          if (changePlayer) {
            changePlayer = false;
            stateGame[i].name = 'X';
          } else {
            changePlayer = true;
            stateGame[i].name = 'O';
          }
          setTimeout(winCombo, 0);
        }
      }
    }
    renderCells();
  });

  const buttonRestart = document.createElement('button');
  buttonRestart.classList.add('button__restart');
  buttonRestart.textContent = 'Restart Game';
  document.body.appendChild(buttonRestart);
  buttonRestart.addEventListener('click', () => {
    clearContainer();
  });
})();
