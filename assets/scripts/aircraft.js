// Function to display information for the various aircraft depending on what button the user selects 
function aircraft(evt, aircraftSpec) {
    var i, aircraftFacts, aircraftFactsSelect;
    aircraftFacts = document.getElementsByClassName("aircraftFacts");
    for (i = 0; i < aircraftFacts.length; i++) {
        aircraftFacts[i].style.display = "none";
    }
    aircraftFactsSelect = document.getElementsByClassName("aircraftFactsSelect");
    for (i = 0; i < aircraftFactsSelect.length; i++) {
        aircraftFactsSelect[i].className = aircraftFactsSelect[i].className.replace(" activate", "");
    }
    document.getElementById(aircraftSpec).style.display = "block";
    evt.currentTarget.className += " activate";
}

// F22 Raptor object, containing the aircraft name, description, speed, altitude, range, stealth capability, wingspan and length
const f22Raptor = {
    name: "F22 Raptor",
    description: "The Lockheed Martin F-22 Raptor is an American single-seat, twin-engine, all-weather stealth tactical fighter aircraft developed for the United States Air Force (USAF). As the result of the USAF's Advanced Tactical Fighter (ATF) program, the aircraft was designed as an air superiority fighter, but also has ground attack, electronic warfare, and signals intelligence capabilities. The prime contractor, Lockheed Martin, built most of the F-22's airframe and weapons systems and conducted final assembly, while Boeing provided the wings, aft fuselage, avionics integration, and training systems.",
    speed: "Mach 2.25",
    altitude: "65,000 Feet",
    range: "3,000 KM",
    stealth: 'Yes',
    wingspan: '44 Feet',
    length: '62 Feet',
};

// this section pulls the data held within the f22Raptor object and displays it in the appropriate html elements when selected
document.getElementById("f22name").innerHTML = f22Raptor.name;
document.getElementById("f22description").innerHTML = f22Raptor.description;
document.getElementById("f22speed").innerHTML = 'Max Speed: ' + f22Raptor.speed;
document.getElementById("f22altitude").innerHTML = 'Max Altitude: ' + f22Raptor.altitude;
document.getElementById("f22range").innerHTML = 'Range: ' + f22Raptor.range;
document.getElementById("f22stealth").innerHTML = 'Stealth: ' + f22Raptor.stealth;
document.getElementById("f22wingspan").innerHTML = 'Wingspan: ' + f22Raptor.wingspan;
document.getElementById("f22length").innerHTML = 'Length: ' + f22Raptor.length;

// F35 Lightning object, containing the aircraft name, description, speed, altitude, range, stealth capability, wingspan and length
const f35Lightning = {
    name: "F35 Lightning",
    description: "The Lockheed Martin F-35 Lightning II is an American family of single-seat, single-engine, all-weather stealth multirole combat aircraft that is intended to perform both air superiority and strike missions. It is also able to provide electronic warfare and intelligence, surveillance, and reconnaissance capabilities. Lockheed Martin is the prime F-35 contractor, with principal partners Northrop Grumman and BAE Systems. The aircraft has three main variants: the conventional takeoff and landing (CTOL) F-35A, the short take-off and vertical-landing (STOVL) F-35B, and the carrier-based (CV/CATOBAR) F-35C.",
    speed: "Mach 1.6",
    altitude: "50,000 Feet",
    range: "2,800 KM",
    stealth: 'Yes',
    wingspan: '35 Feet',
    length: '51 Feet',
};

// this section pulls the data held within the f35Lightning object and displays it in the appropriate html elements when selected
document.getElementById("f35name").innerHTML = f35Lightning.name;
document.getElementById("f35description").innerHTML = f35Lightning.description;
document.getElementById("f35speed").innerHTML = 'Max Speed: ' + f35Lightning.speed;
document.getElementById("f35altitude").innerHTML = 'Max Altitude: ' + f35Lightning.altitude;
document.getElementById("f35range").innerHTML = 'Range: ' + f35Lightning.range;
document.getElementById("f35stealth").innerHTML = 'Stealth: ' + f35Lightning.stealth;
document.getElementById("f35wingspan").innerHTML = 'Wingspan: ' + f35Lightning.wingspan;
document.getElementById("f35length").innerHTML = 'Length: ' + f35Lightning.length;
