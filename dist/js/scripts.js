(() => {
  const container = document.getElementById('app');
  container.classList.add('container');

  const stateGame =[];
  const quantityCells = 9;
  let changePlayer = true; 

  const createCells = () => {
    for(let i = 0; i < quantityCells; i++) {
      const newCell = {
        id: i,
      };
      stateGame.push(newCell);
    }
  };

  const renderCells = () => {
    container.innerHTML = '';
    for(let i = 0; i < quantityCells; i++) {
      const gameCell = document.createElement('div');
      const imgCell = document.createElement('a');

      gameCell.classList.add('game__cell');
      container.appendChild(gameCell);
      gameCell.textContent = stateGame[i].name;

      imgCell.classList.add('img__cell');
      imgCell.dataset.cell = i;
      gameCell.appendChild(imgCell);
  
    }
  };
  createCells();
  renderCells();

  const clearContainer = () => {
    for(let i = 0; i < quantityCells; i++){
      stateGame[i].name = '';
    }
    renderCells();
  };

  const winCombo = () => {
    let winPlayer = 'X';
    if(changePlayer){
      winPlayer = 'O';
    }
    if ((winPlayer === stateGame[0].name && winPlayer === stateGame[1].name && winPlayer === stateGame[2].name) ||
      (winPlayer === stateGame[3].name && winPlayer === stateGame[4].name && winPlayer === stateGame[5].name) ||
      (winPlayer === stateGame[6].name && winPlayer === stateGame[7].name && winPlayer === stateGame[8].name) ||
      (winPlayer === stateGame[0].name && winPlayer === stateGame[3].name && winPlayer === stateGame[6].name) ||
      (winPlayer === stateGame[1].name && winPlayer === stateGame[4].name && winPlayer === stateGame[7].name) ||
      (winPlayer === stateGame[2].name && winPlayer === stateGame[5].name && winPlayer === stateGame[8].name) ||
      (winPlayer === stateGame[0].name && winPlayer === stateGame[4].name && winPlayer === stateGame[8].name) ||
      (winPlayer === stateGame[2].name && winPlayer === stateGame[4].name && winPlayer === stateGame[6].name)) {
        alert ('Player ' + winPlayer + ' win!!!');
        clearContainer();
    }    
  };

  container.addEventListener('click', (e) => {
    if(e.target.classList.value === 'game__cell') {
      const targetImage = e.target.childNodes[0].dataset.cell;
      for(let i = 0; i < quantityCells; i++){
        if(stateGame[i].id == targetImage){
          if(changePlayer){ 
            changePlayer = false;
            stateGame[i].name = 'X';
            setTimeout(winCombo, 0);
          } else {
            changePlayer = true;
            stateGame[i].name = 'O';
            setTimeout(winCombo, 0);
          }
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
