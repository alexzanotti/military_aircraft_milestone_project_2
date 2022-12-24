//The location of each country that operates one or more of the aircraft within this site
var latLng = [
    {lat: -25.025285946240746, lng: 133.84521508721852},
    {lat: 47.567829087777035, lng: 14.399735986466625},
    {lat: 26.08749665079805,  lng: 50.57140372019501},
    {lat: 50.476432244074445, lng: 4.564501714022192},
    {lat: 57.8615158052608, lng: -102.63815850270119},
    {lat: -26.79225847335909, lng: -70.3803943927718},
    {lat: 55.593082532692506, lng: 10.16229790484102},
    {lat: 26.825170038228382, lng: 29.99475174518257},
    {lat: 61.97240933367339, lng: 26.18622865990701},
    {lat: 51.092248771066664, lng: 10.169058016233206},
    {lat: 39.49505035142539, lng: 22.70192816389178},
    {lat: -4.511292281819161, lng: 122.37340605414931},
    {lat: 33.010247007738535, lng: 43.08766345901308},
    {lat: 31.047457258543933, lng: 34.947983247877126},
    {lat: 43.04557733637496, lng: 12.446033915355969},
    {lat: 36.437864325313036, lng: 138.43636395789653},
    {lat: 31.72563140437665, lng: 36.893516315857084},
    {lat: 29.300632566543975, lng: 47.327196866017864},
    {lat: 3.6455862653982467, lng: 101.8476844053797},
    {lat: 31.95035115043628, lng: -6.862295407145599},
    {lat: 52.05414921210117, lng: 5.555577625081079},
    {lat: 61.88838975022205, lng: 9.291008726341303},
    {lat: 20.644473472621346, lng: 56.12475244229236},
    {lat: 29.91809423185523, lng: 69.482950866203},
    {lat: 52.96579543610315, lng: 18.18415882062778},
    {lat: 39.69003462779262, lng: -8.693027789783347},
    {lat: 25.29624419178418, lng: 51.19313262977145},
    {lat: 45.798134703281505, lng: 25.17912866328161},
    {lat: 23.579315455933454, lng: 45.71130734093003},
    {lat: 1.3982627902687195, lng: 103.53229867895259},
    {lat: 35.89691278295718, lng: 128.62725612171},
    {lat: 39.635843179903574, lng: -3.3128179837418146},
    {lat: 46.82563324893344, lng: 7.951611084400928},
    {lat: 24.22960885253315, lng: 120.6893737875868},
    {lat: 15.788517755418502, lng: 101.04885673010774},  
    {lat: 39.133312724641044, lng: 35.218230581271015},  
    {lat: 23.900296813271193, lng: 53.97326275129529},  
    {lat: 55.038252448698174, lng: -2.7673795692276397},  
    {lat: 39.83290514504635, lng: -100.92605067718154},  
    {lat: 7.207609407450767, lng: -66.3713228850271},  
];

//The country name and aircraft within the country to be added to each InfoWindow
var mapContentData = [
    '<h1>Australia</h1><p>Aircraft that are active in this country:</p><ul><li>F-35 Lightning</li><li>F/A-18 Hornet</li></ul>',
    '<h1>Austria</h1><p>Aircraft that are active in this country:</p><ul><li>Eurofighter Typhoon</li></ul>',
    '<h1>Bahrain</h1><p>Aircraft that are active in this country:</p><ul><li>F-16 Fighting Falcon</li></ul>',
    '<h1>Belgium</h1><p>Aircraft that are active in this country:</p><ul><li>F-16 Fighting Falcon</li><li>F-35 Lightning</li></ul>',
    '<h1>Canada</h1><p>Aircraft that are active in this country:</p><ul><li>F/A-18 Hornet</li></ul>',
    '<h1>Chile</h1><p>Aircraft that are active in this country:</p><ul><li>F-16 Fighting Falcon</li></ul>',
    '<h1>Denmark</h1><p>Aircraft that are active in this country:</p><ul><li>F-16 Fighting Falcon</li><li>F-35 Lightning</li></ul>',
    '<h1>Egypt</h1><p>Aircraft that are active in this country:</p><ul><li>F-16 Fighting Falcon</li></ul>',
    '<h1>Finland</h1><p>Aircraft that are active in this country:</p><ul><li>F-35 Lightning</li><li>F/A-18 Hornet</li></ul>',
    '<h1>Germany</h1><p>Aircraft that are active in this country:</p><ul><li>F-35 Lightning</li><li>Eurofighter Typhoon/li></ul>',
    '<h1>Greece</h1><p>Aircraft that are active in this country:</p><ul><li>F-16 Fighting Falcon</li></ul>',
    '<h1>Indonesia</h1><p>Aircraft that are active in this country:</p><ul><li>F-16 Fighting Falcon</li></ul>',
    '<h1>Iraq</h1><p>Aircraft that are active in this country:</p><ul><li>F-16 Fighting Falcon</li></ul>',
    '<h1>Israel</h1><p>Aircraft that are active in this country:</p><ul><li>F-16 Fighting Falcon</li><li>F-35 Lightning</li><li>F-15 Eagle</li></ul>',
    '<h1>Italy</h1><p>Aircraft that are active in this country:</p><ul><li>F-35 Lightning</li><li>Eurofighter Typhoon</li></ul>',
    '<h1>Japan</h1><p>Aircraft that are active in this country:</p><ul><li>F-35 Lightning</li><li>F-15 Eagle</li></ul>',
    '<h1>Jordan</h1><p>Aircraft that are active in this country:</p><ul><li>F-16 Fighting Falcon</li></ul>',
    '<h1>Kuwait</h1><p>Aircraft that are active in this country:</p><ul><li>Eurofighter Typhoon</li><li>F/A-18 Hornet</li></ul>',
    '<h1>Malaysia</h1><p>Aircraft that are active in this country:</p><ul><li>F/A-18 Hornet</li></ul>',
    '<h1>Morocco</h1><p>Aircraft that are active in this country:</p><ul><li>F-16 Fighting Falcon</li></ul>',
    '<h1>Netherlands</h1><p>Aircraft that are active in this country:</p><ul><li>F-16 Fighting Falcon</li><li>F-35 Lightning</li></ul>',
    '<h1>Norway</h1><p>Aircraft that are active in this country:</p><ul><li>F-35 Lightning</li></ul>',
    '<h1>Oman</h1><p>Aircraft that are active in this country:</p><ul><li>F-16 Fighting Falcon</li><li>Eurofighter Typhoon</li></ul>',
    '<h1>Pakistan</h1><p>Aircraft that are active in this country:</p><ul><li>F-16 Fighting Falcon</li></ul>',
    '<h1>Poland</h1><p>Aircraft that are active in this country:</p><ul><li>F-16 Fighting Falcon</li><li>F-35 Lightning/li></ul>',
    '<h1>Portugal</h1><p>Aircraft that are active in this country:</p><ul><li>F-16 Fighting Falcon</li></ul>',
    '<h1>Qatar</h1><p>Aircraft that are active in this country:</p><ul><li>F-15 Eagle</li><li>Eurofighter Typhoon</li></ul>',
    '<h1>Romania</h1><p>Aircraft that are active in this country:</p><ul><li>F-16 Fighting Falcon</li></ul>',
    '<h1>Saudi Arabia</h1><p>Aircraft that are active in this country:</p><ul><li>F-15 Eagle</li><li>Eurofighter Typhoon</li></ul>',
    '<h1>Singapore</h1><p>Aircraft that are active in this country:</p><ul><li>F-16 Fighting Falcon</li><li>F-35 Lightning</li><li>F-15 Eagle</li></ul>',
    '<h1>South Korea</h1><p>Aircraft that are active in this country:</p><ul><li>F-16 Fighting Falcon</li><li>F-35 Lightning</li><li>F-15 Eagle</li></ul>',
    '<h1>Spain</h1><p>Aircraft that are active in this country:</p><ul><li>Eurofighter Typhoon</li><li>F/A-18 Hornet</li></ul>',
    '<h1>Switzerland</h1><p>Aircraft that are active in this country:</p><ul><li>F-35 Lightning</li><li>F/A-18 Hornet</li></ul>',
    '<h1>Taiwan</h1><p>Aircraft that are active in this country:</p><ul><li>F-16 Fighting Falcon</li></ul>',
    '<h1>Thailand</h1><p>Aircraft that are active in this country:</p><ul><li>F-16 Fighting Falcon</li></ul>',
    '<h1>Turkey</h1><p>Aircraft that are active in this country:</p><ul><li>F-16 Fighting Falcon</li></ul>',
    '<h1>United Arab Emirates</h1><p>Aircraft that are active in this country:</p><ul><li>F-16 Fighting Falcon</li></ul>',
    '<h1>United Kingdom</h1><p>Aircraft that are active in this country:</p><ul><li>F-35 Lightning</li><li>Eurofighter Typhoon</li></ul>',
    '<h1>USA</h1><p>Aircraft that are active in this country:</p><ul><li>F-16 Fighting Falcon</li><li>F-35 Lightning</li><li>F-22 Raptor</li><li>F-15 Eagle</li><li>F/A-18 Hornet</li></ul>',
    '<h1>Venezuela</h1><p>Aircraft that are active in this country:</p><ul><li>F-16 Fighting Falcon</li></ul>'
];

var map;
var mapContent;

// functions to create the map in index.html, set positioning and add the markers
function aircraftMap() {

    var startingPosition = latLng[7];
    var centerPosition = {
        center: startingPosition,
        zoom: 2
    };
    
    map = new google.maps.Map(document.getElementById('map'), centerPosition);
    mapContent = new google.maps.InfoWindow();
    for (var i = 0; i < latLng.length; i++) {
        createMarker(latLng[i], mapContentData[i]);
    }
}

function createMarker(latLngAircraft, mapContentDataAircraft) {
    //Creates marker based on the latLng of each country
    var marker = new google.maps.Marker({
        position: latLngAircraft,
        map: map
    });
    //Opens InfoWindow when clicked
    marker.addListener('click', function() {
       mapContent.setContent(mapContentDataAircraft);
       mapContent.open(map, this);
    });
}