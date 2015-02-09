var zoneLoop = function(){

	zoneArray.forEach (function(zone){
		if(zone.oPlayer === currentPlayer){
			console.log('your zone!');

			if(zone.name === 'zone1')
			{
				var tempZone1 = document.getElementById('zoneOneAttack').text;
				tempZone1.text = 'Zone 2 is yours';
				console.log('in second if');
			}
			else if(zone.name === 'zone2')
			{
				var tempZone2 = document.getElementById('zoneOneAttack').text;
				console.log('in third if');
			}
			// var zoneMudd = zone.name;
			// var testZone = document.getElementsByName(zoneMudd).text;
			// console.log(zoneMudd);
			// $('')

			// var zoneTesting = zone.name;
			// console.log(zoneTesting);
			// var zoneStatement = 'Your Zone';
			// $('zoneTesting').append(zoneStatement);


			// $('zoneTwoShow').addClass('zoneTwoHide').removeClass('zoneTwoShow');
			// var test = document.getElementById("zoneTwoAttack").html;
			// console.log(test);
			// test.html = 'Controlled by you.';
			//$('zoneOneShow').addClass('zoneOneHide');
		}
		else{
			console.log('attackable');
			var zoneStatement = "Attack This Zone?";
			$('zoneShowOne').append(zoneStatement);
		}
	});

};

// zoneOne = document.getElementById("zoneOne");
//   			zoneOne.value = ""+zone1.tNumber;