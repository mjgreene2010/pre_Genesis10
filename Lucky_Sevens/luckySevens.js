clearErrors = () => {
  var luckyForm = document.forms['lucky-form'].elements;
  for (var i = 0; i < luckyForm.length; i++) {
    if (luckyForm[i].parentElement.className.indexOf('has-') != -1) {
      luckyForm[i].parentElement.className = 'form-group';
    }
  }
};

rollDice = () => {
  Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6);
};

function play() {
  clearErrors();
  var startingBet = document.forms['lucky-form']['initial-starting-bet'].value;

  document.getElementById('starting-bet-number').innerText =
    '$' + `${startingBet}`;
  return false;
}
