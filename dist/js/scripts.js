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
    container.addEventListener('click', containerListener);
  };

  const showWinner = (winPlayer) => {
    for (let i = 0; i < quantityCells; i++) {
      if (stateGame[i].name === '') {
        stateGame[i].name = ' ';
      }
    }
    // eslint-disable-next-line no-alert
    alert(`Player ${winPlayer} win!!!`);
  };

  const isFull = () => stateGame.every(item => item.name !== '');

  const winCombo = () => {
    const winTemplates = ['012', '345', '678', '036', '147', '258', '048', '246'];
    let player = 'X';
    if (changePlayer === true) {
      player = 'O';
    }
    let combo = '';
    for (let i = 0; i < quantityCells; i++) {
      if (stateGame[i].name === player) {
        combo += i;
      }
    }
    let winPlayer = '';
    for (let i = 0; i < winTemplates.length; i++) {
      let count = 0;
      for (let j = 0; j < winTemplates[i].length; j++) {
        if (combo.indexOf(winTemplates[i][j]) > -1) {
          count++;
        }
        if (count === 3) {
          winPlayer = player;
          showWinner(winPlayer);
          container.removeEventListener('click', containerListener);
          break;
        }
      }
    }
    if (isFull() && winPlayer === '') {
      alert('Draw!!!');
      container.removeEventListener('click', containerListener);
    }
  };

  function containerListener(e) {
    if (e.target.classList.value === 'game__cell') {
      const targetImage = e.target.dataset.cell;
      for (let i = 0; i < quantityCells; i++) {
        if (stateGame[i].id == targetImage && stateGame[i].name === '') {
          if (changePlayer) {
            changePlayer = false;
            stateGame[i].name = 'X';
            renderCells();
            break;
          } else {
            changePlayer = true;
            stateGame[i].name = 'O';
            renderCells();
            break;
          }
        }
      }
    }
    renderCells();
    setTimeout(winCombo, 0);
  }
  container.addEventListener('click', containerListener);

  const buttonRestart = document.createElement('button');
  buttonRestart.classList.add('button__restart');
  buttonRestart.textContent = 'Restart Game';
  document.body.appendChild(buttonRestart);
  buttonRestart.addEventListener('click', () => {
    clearContainer();
  });
})();
