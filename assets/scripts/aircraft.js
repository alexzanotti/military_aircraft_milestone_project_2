/*jshint esversion: 6 */
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

// F15 Eagle object, containing the aircraft name, description, speed, altitude, range, stealth capability, wingspan and length
const f15Eagle = {
    name: "F15 Eagle",
    description: "The McDonnell Douglas F-15 Eagle is an American twin-engine, all-weather tactical fighter aircraft designed by McDonnell Douglas (now part of Boeing). Following reviews of proposals, the United States Air Force selected McDonnell Douglas's design in 1969 to meet the service's need for a dedicated air superiority fighter. The Eagle first flew in July 1972, and entered service in 1976. It is among the most successful modern fighters, with over 100 victories and no losses in aerial combat, with the majority of the kills by the Israeli Air Force.",
    speed: "Mach 2.5",
    altitude: "65,000 Feet",
    range: "5,600 KM",
    stealth: 'No',
    wingspan: '42 Feet',
    length: '63 Feet',
};

// this section pulls the data held within the f15Eagle object and displays it in the appropriate html elements when selected
document.getElementById("f15name").innerHTML = f15Eagle.name;
document.getElementById("f15description").innerHTML = f15Eagle.description;
document.getElementById("f15speed").innerHTML = 'Max Speed: ' + f15Eagle.speed;
document.getElementById("f15altitude").innerHTML = 'Max Altitude: ' + f15Eagle.altitude;
document.getElementById("f15range").innerHTML = 'Range: ' + f15Eagle.range;
document.getElementById("f15stealth").innerHTML = 'Stealth: ' + f15Eagle.stealth;
document.getElementById("f15wingspan").innerHTML = 'Wingspan: ' + f15Eagle.wingspan;
document.getElementById("f15length").innerHTML = 'Length: ' + f15Eagle.length;

// F16 Falcon object, containing the aircraft name, description, speed, altitude, range, stealth capability, wingspan and length
const f16Falcon = {
    name: "F16 Falcon",
    description: "The General Dynamics F-16 Fighting Falcon is a single-engine multirole fighter aircraft originally developed by General Dynamics for the United States Air Force (USAF). Designed as an air superiority day fighter, it evolved into a successful all-weather multirole aircraft. Over 4,600 aircraft have been built since production was approved in 1976. Although no longer being purchased by the U.S. Air Force, improved versions are being built for export customers. In 1993, General Dynamics sold its aircraft manufacturing business to the Lockheed Corporation, which in turn became part of Lockheed Martin after a 1995 merger with Martin Marietta.",
    speed: "Mach 2.05",
    altitude: "58,000 Feet",
    range: "4,217 KM",
    stealth: 'No',
    wingspan: '32 Feet',
    length: '49 Feet',
};

// this section pulls the data held within the f16Falcon object and displays it in the appropriate html elements when selected
document.getElementById("f16name").innerHTML = f16Falcon.name;
document.getElementById("f16description").innerHTML = f16Falcon.description;
document.getElementById("f16speed").innerHTML = 'Max Speed: ' + f16Falcon.speed;
document.getElementById("f16altitude").innerHTML = 'Max Altitude: ' + f16Falcon.altitude;
document.getElementById("f16range").innerHTML = 'Range: ' + f16Falcon.range;
document.getElementById("f16stealth").innerHTML = 'Stealth: ' + f16Falcon.stealth;
document.getElementById("f16wingspan").innerHTML = 'Wingspan: ' + f16Falcon.wingspan;
document.getElementById("f16length").innerHTML = 'Length: ' + f16Falcon.length;

// Eurofighter Typhoon object, containing the aircraft name, description, speed, altitude, range, stealth capability, wingspan and length
const eurofighterTyphoon = {
    name: "Eurofighter Typhoon",
    description: "The Eurofighter Typhoon is a European multinational twin-engine, canard delta wing, multirole fighter. The Typhoon was designed originally as an air-superiority fighter and is manufactured by a consortium of Airbus, BAE Systems and Leonardo that conducts the majority of the project through a joint holding company, Eurofighter Jagdflugzeug GmbH. The NATO Eurofighter and Tornado Management Agency, representing the UK, Germany, Italy and Spain, manages the project and is the prime customer.",
    speed: "Mach 2.0",
    altitude: "65,000 Feet",
    range: "3,790 KM",
    stealth: 'No',
    wingspan: '35 Feet',
    length: '52 Feet',
};

// this section pulls the data held within the eurofighterTyphoon object and displays it in the appropriate html elements when selected
document.getElementById("eurofighterTyphoonName").innerHTML = eurofighterTyphoon.name;
document.getElementById("eurofighterTyphoonDescription").innerHTML = eurofighterTyphoon.description;
document.getElementById("eurofighterTyphoonSpeed").innerHTML = 'Max Speed: ' + eurofighterTyphoon.speed;
document.getElementById("eurofighterTyphoonAltitude").innerHTML = 'Max Altitude: ' + eurofighterTyphoon.altitude;
document.getElementById("eurofighterTyphoonRange").innerHTML = 'Range: ' + eurofighterTyphoon.range;
document.getElementById("eurofighterTyphoonStealth").innerHTML = 'Stealth: ' + eurofighterTyphoon.stealth;
document.getElementById("eurofighterTyphoonWingspan").innerHTML = 'Wingspan: ' + eurofighterTyphoon.wingspan;
document.getElementById("eurofighterTyphoonLength").innerHTML = 'Length: ' + eurofighterTyphoon.length;

// F18 Hornet object, containing the aircraft name, description, speed, altitude, range, stealth capability, wingspan and length
const fa18Hornet = {
    name: "F/A-18 Hornet",
    description: "The McDonnell Douglas F/A-18 Hornet is an all-weather, twin-engine, supersonic, carrier-capable, multirole combat aircraft, designed as both a fighter and attack aircraft (hence the F/A designation). Designed by McDonnell Douglas (now part of Boeing) and Northrop (now part of Northrop Grumman), the F/A-18 was derived from the latter's YF-17 in the 1970s for use by the United States Navy and Marine Corps. The Hornet is also used by the air forces of several other nations, and formerly by the U.S. Navy's Flight Demonstration Squadron, the Blue Angels.",
    speed: "Mach 1.8",
    altitude: "50,000 Feet",
    range: "3,300 KM",
    stealth: 'No',
    wingspan: '40 Feet',
    length: '56 Feet',
};

// this section pulls the data held within the fa18Hornet object and displays it in the appropriate html elements when selected
document.getElementById("fa18Name").innerHTML = fa18Hornet.name;
document.getElementById("fa18Description").innerHTML = fa18Hornet.description;
document.getElementById("fa18Speed").innerHTML = 'Max Speed: ' + fa18Hornet.speed;
document.getElementById("fa18Altitude").innerHTML = 'Max Altitude: ' + fa18Hornet.altitude;
document.getElementById("fa18Range").innerHTML = 'Range: ' + fa18Hornet.range;
document.getElementById("fa18Stealth").innerHTML = 'Stealth: ' + fa18Hornet.stealth;
document.getElementById("fa18Wingspan").innerHTML = 'Wingspan: ' + fa18Hornet.wingspan;
document.getElementById("fa18Length").innerHTML = 'Length: ' + fa18Hornet.length;