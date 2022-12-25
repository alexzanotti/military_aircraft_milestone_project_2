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
