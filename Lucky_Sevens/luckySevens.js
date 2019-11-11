clearErrors = () => {
  var luckyForm = document.forms['lucky-form'].elements;
  for (var i = 0; i < luckyForm.length; i++) {
    if (luckyForm[i].parentElement.className.indexOf('has-') != -1) {
      luckyForm[i].parentElement.className = 'form-group';
    }
  }
};

rolling = gameMoney => {
  totalRolls = 0;

  highest = gameMoney;
  highCount = 0;

  diceTotal = () => {
    return (
      Math.floor(Math.random() * 6 + 1) + Math.floor(Math.random() * 6 + 1)
    );
  };

  while (gameMoney > 0) {
    totalRolls++;
    if (diceTotal() == 7) {
      gameMoney += 4;
      if (gameMoney > highest) {
        highest = gameMoney;
        highCount = totalRolls;
      }
    } else {
      gameMoney -= 1;
    }
  }
  document.getElementById('results').style.display = 'table-row';
  document.getElementById('results-header').style.display = '';
  document.getElementById('total-rolls-number').innerText = totalRolls;
  document.getElementById('highest-amount-won-number').innerText =
    '$' + highest;
  document.getElementById(
    'roll-count-at-highest-amount-won-number'
  ).innerText = highCount;

  if (gameMoney === 0) {
    document.getElementById('game-over').innerText = 'GAME OVER!!!';
  }
};

validateBet = () => {
  clearErrors();
  var startingBet = document.forms['lucky-form']['initial-starting-bet'].value;
  let gameMoney = Number(startingBet);

  if (isNaN(startingBet) || startingBet <= 0) {
    alert('Enter a number greater than 0');
    document.forms['lucky-form'][
      'initial-starting-bet'
    ].parentElement.className = 'form-group has-error';
    document.forms['lucky-form']['initial-starting-bet'].focus();
    return false;
  }

  document.getElementById('starting-bet-number').innerText =
    '$' + `${startingBet}`;

  rolling(gameMoney);

  return false;
};
