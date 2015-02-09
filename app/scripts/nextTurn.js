var nextTurn = function(){


	if(currentPlayer === 'Blue'){
		currentPlayer = 'Red';
	}
	else{
		currentPlayer = 'Blue';
	}

	var textOutput = document.getElementById("currentPlayer");
  textOutput.value = currentPlayer;
  
  zoneLoop();
};