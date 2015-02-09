var finish = function(){

	var totalRed = "", totalBlue = "";
	
	if(zone1.oPlayer === "Red"){
		console.log("inside");
		totalRed = totalRed + "" + "Zone 1 ";
	}
	else{
		totalBlue = totalBlue + "" + "Zone 1 ";
	}

	if(zone2.oPlayer === "Red"){
		console.log("inside2");

		totalRed = totalRed + "" + "Zone 2 ";
	}
	else{
		totalBlue = totalBlue + "" + "Zone 2 ";
	}

	if(zone3.oPlayer === "Red"){
		console.log("inside3");

		totalRed = totalRed + "" + "Zone 3 ";
	}
	else{
		totalBlue = totalBlue + "" + "Zone 3 ";
	}

	if(zone4.oPlayer === "Red"){
		console.log("inside4");

		totalRed = totalRed + "" + "Zone 4 ";
	}
	else{
		totalBlue = totalBlue + "" + "Zone 4 ";
	}

	var redCon = document.getElementById('zonesControlledRed');
	redCon.value = totalRed;
	var blueCon = document.getElementById('zonesControlledBlue');
	blueCon.value = totalBlue;

	nextTurn();

};


// zoneOne = document.getElementById("zoneOneMessage");
//   				zoneOneMessage.value = "Victory!";