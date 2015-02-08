var zoneLoop = function(){

	zoneArray.forEach (function(zone){
		if(zone.oPlayer === currentPlayer){
			console.log('yeah baby!');
			$('zoneTwoShow').addClass('zoneTwoHide').removeClass('zoneTwoShow');
		}
		else{
			console.log('Oh behave');
		}
	});

};