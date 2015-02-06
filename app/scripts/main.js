console.log('The Iron Yard Rocks');

//set variables
var bluePlayer, redPlayer;
var zone1, zone2;

//intial board setup

function InitialSetup(options)
    {
    	var initSet = options || {};


      //zones 
      zone1 = new Zone({tNumber: 25, oPlayer: 'Blue'});
      zone2 = new Zone({tNumber: 25, oPlayer: 'Red'});


      //players
      bluePlayer = new Player({name: 'Blue'});
   		redPlayer = new Player({name: 'Red'});
      
    }


   