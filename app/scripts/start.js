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
      zone1 = new Zone({oPlayer: 'Red', name:'zone1'});
      zone2 = new Zone({oPlayer: 'Blue', name:'zone2'});
      zone3 = new Zone({oPlayer: 'Red', name: 'zone3'});
      zone4 = new Zone({oPlayer: 'Blue', name: 'zone4'});
      

      zoneArray = [zone1,zone2,zone3,zone4];

      zoneLoop();

      
    }


