console.log('The Iron Yard Rocks');

InitialSetup({});

// $('.zone1').append('<span>' + zone1.tNumber + '</span>');
// $('.zone2').append('<span>' + zone2.tNumber + '</span>');


var txtOutput = document.getElementById("zoneOne");
txtOutput.value = ""+zone1.tNumber;

var txtOutput = document.getElementById("zoneTwo");
  txtOutput.value = ""+zone2.tNumber;

var txtOutput = document.getElementById("zoneThree");
txtOutput.value = ""+zone3.tNumber;

var txtOutput = document.getElementById("zoneFour");
  txtOutput.value = ""+zone4.tNumber;



	


// _.each(repoAPI, function (p) {
//         console.log(p);
//         // $('.innerMain').append('<a href="' + p.html_url + '">name</a><br/>');
//         // $('.innerMain').append('<span>' + p.description + '</span><br/>');

//         var repoLinks =  '<a href="' + p.html_url + '">'+ p.name +'</a><br/>';
//         //var repoDescription = 
//         var repoDescript = p.description;

//         var lastUpdate = p.updated_at;

//     // Grab the template string.
//     var templateString = $('#repoTemplate').text();

//     // Turn it into a template function.
//     var renderTemplate = _.template(templateString);

//     // Pass in an object. Return value is a string
//     // with the bee stings replaced with object's properties
//     var freshHTML = renderTemplate({repoLink: repoLinks, descript: repoDescript, lastUpdated: lastUpdate});

//     // Inject the fresh html into the page.
//     $('.innerMain').append(freshHTML);
 
// });

   