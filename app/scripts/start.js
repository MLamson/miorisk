//set variables
var bluePlayer, redPlayer;
var zone1, zone2, zone3, zone4;
var isTurnBlue,isTurnRed;
var currentPlayer;
var zoneArray;

//intial board setup

function InitialSetup(options)
    {
    	var initSet = options || {};


      currentPlayer = 'Blue';

      var textOutput = document.getElementById("currentPlayer");
      textOutput.value = currentPlayer;
  
      //zones 
      zone1 = new Zone({oPlayer: 'Red'});
      zone2 = new Zone({oPlayer: 'Blue'});
      zone3 = new Zone({oPlayer: 'Red'});
      zone4 = new Zone({oPlayer: 'Blue'});
      

      zoneArray = [zone1,zone2,zone3,zone4];

      zoneLoop();

      
    }


