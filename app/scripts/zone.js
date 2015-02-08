
//roughing out zone properties

// variables
var attack, aValue;

function Zone(options)
    {
    	var zoneInfo = options;
      //which player controls the zone
      this.oPlayer = zoneInfo.oPlayer;

      //zonethis.zNumber = zoneInfo.zNumber;

      //location on map

      //number of troops
      this.tNumber = zoneInfo.tNumber  || 25;

      //function send troops to adjacent zone

      //function defend zone

      //value of zone

      //function to add troops
      

      	
    }


document.getElementById("zoneOneAttack").onclick = function attack(attackingZone,defendingZone)
      {
      	//which zone is being attacked
      	// zone1 = zoneAlpha;
      	// zone2 = zoneBravo;
      
      	//which zone is attacking
      	aValue = Math.floor((Math.random() * 5) + 1);

      	var zoneOne = attackingZone;
      	var zoneTwo = defendingZone;

      	if(zone2.tNumber > 4 && zone1.tNumber > 0){
      	zone1.tNumber -= aValue; 
      	zone2.tNumber = zone2.tNumber + aValue -5;
      	}
      	
      	if(zone1.tNumber < 1){
      		zoneOne = document.getElementById("zoneOneMessage");
  				zoneOneMessage.value = "Victory!";
  				zone1.oPlayer = 'Blue';
  				$(".zone1").addClass("blue");
  				var tempTroop = window.prompt("Number of Troops to move?");
  				zone1.tNumber = tempTroop;
  				zone2.tNumber -= tempTroop;
      	}

      	if(zone2.tNumber < 5){
      		zoneTwo = document.getElementById("zoneTwoMessage");
      		zoneTwoMessage.value = "You don't have enough troops to attack.";
      	}
      
      	zoneOne = document.getElementById("zoneOne");
  			zoneOne.value = ""+zone1.tNumber;
  			zoneTwo = document.getElementById("zoneTwo");
  			zoneTwo.value = ""+zone2.tNumber;
  			
    //   	$('.zone1').append('<span>' + zone1.tNumber + '</span>');
				// $('.zone2').append('<span>' + zone2.tNumber + '</span>');
      	//tNumber in defending zone = tNumber in defending zone - random number 0-5.
      	//tNumber in attacking zone = tNumber in attacking zone - (5 - random number above).
      };

      document.getElementById("zoneTwoAttack").onclick = function attack(attackingZone,defendingZone)
      {
      	//which zone is being attacked
      	// zone1 = zoneAlpha;
      	// zone2 = zoneBravo;
      
      	//which zone is attacking
      	aValue = Math.floor((Math.random() * 5) + 1);

      	var zoneTwo = attackingZone;
      	var zoneOne = defendingZone;

      	if(zone1.tNumber > 4 && zone2.tNumber > 0){
      	zone2.tNumber -= aValue; 
      	zone1.tNumber = zone1.tNumber + aValue -5;
      	}
      	
      	if(zone2.tNumber < 1){
      		zoneOn2 = document.getElementById("zoneTwoMessage");
  				zoneTwoMessage.value = "Victory!";
  				zone2.oPlayer = "Red";
  				$(".zone2").addClass("red");
  				var tempTroop = window.prompt("Number of Troops to move?");
  				zone2.tNumber = tempTroop;
  				zone1.tNumber -= tempTroop;
      	}

      	if(zone1.tNumber < 5){
      		zoneOne = document.getElementById("zoneOneMessage");
      		zoneOneMessage.value = "You don't have enough troops to attack.";
      	}
      
      	zoneTwo = document.getElementById("zoneTwo");
  			zoneTwo.value = ""+zone2.tNumber;
  			zoneOne = document.getElementById("zoneOne");
  			zoneOne.value = ""+zone1.tNumber;
  			
    //   	$('.zone1').append('<span>' + zone1.tNumber + '</span>');
				// $('.zone2').append('<span>' + zone2.tNumber + '</span>');
      	//tNumber in defending zone = tNumber in defending zone - random number 0-5.
      	//tNumber in attacking zone = tNumber in attacking zone - (5 - random number above).
      };