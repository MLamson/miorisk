console.log('The Iron Yard Rocks');

//intial board setup

function InitialSetup(options)
    {
    	var initSet = options || {};


      //zones should be an array of zones
      this.player1Zones = initSet.player1Zones || [1];
      this.player2Zones = initSet.player2Zones || [2]; 
    }