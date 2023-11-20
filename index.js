// initialise necessary variables.

let homeScore = 0;
let awayScore = 0;
let homeTriesSum = 0;
let awayTriesSum = 0;
let homeConversionSum = 0;
let awayConversionSum = 0;
let homeBonusPoints = document.getElementById("homeBP");
let awayBonusPoints = document.getElementById("awayBP");
let intervalClock;
let intervalSB;
let homeReds = 0;
let awayReds = 0;

//function to add 5 points to the home team
function addTry(clicked_id) {
    //add 5 points to the team score
    if (clicked_id == "home-try") {
        homeScore += 5;
        homeTriesSum++;
        if (homeTriesSum >= 4) {
            homeBonusPoints.textContent = "BP Earned";
        }
        document.getElementById("home-score").textContent = homeScore;
    } else {
        awayScore += 5;
        awayTriesSum++;
        if (awayTriesSum >= 4) {
            awayBonusPoints.textContent = "BP Earned"
        }
        document.getElementById("away-score").textContent = awayScore;
    }
}

//function to add 3 points to the home team
function addDG(clicked_id) {
    if (clicked_id == "home-DG") {
        homeScore += 3;
        document.getElementById("home-score").textContent = homeScore;
    } else if (clicked_id == "away-DG") {
        awayScore += 3;
        document.getElementById("away-score").textContent = awayScore;
    }
}

function homeConversion() {
    if ((homeTriesSum > 0) && (homeConversionSum < homeTriesSum)) {
        homeScore += 2;
        document.getElementById("home-score").textContent = homeScore;
    }
    homeConversionSum++;
}

function awayConversion() {
    if ((awayTriesSum > 0) && (awayConversionSum < awayTriesSum)) {
        awayScore += 2;
        document.getElementById("away-score").textContent = awayScore;
    }
    awayConversionSum++;
}

function sinBinClock(clicked_id) {
    let tableRef = document.getElementById("sb-clocks");
    let newRow = tableRef.insertRow(-1);
    let teamCell = newRow.insertCell(0);
    let clockCell = newRow.insertCell(-1);
    if (clicked_id == "awaySB") {
        teamCell.textContent = "Guest";
    } else {
        teamCell.textContent = "Home";
    }

    let minutes = 10;
    let seconds = 0;
    intervalSB = setInterval(function() {
        if ((minutes == 0) && (seconds == 0)) {
            finishClock(intervalSB);
        } else if(seconds == 0) { 
            minutes--;
            seconds = 59; 
        } else { 
            seconds--; 
        };
        clockCell.textContent = minutes + " : " + seconds
    }, 
    1000);
}

function finishClock(intervalID) {
    return clearInterval(intervalID);
}

function kickOff() {
    let minutes = 40
    let = seconds = 0
    
    intervalClock = setInterval(function() {
        if ((minutes == 0) && (seconds == 0)) {
            finishClock(intervalClock);
        } else if (seconds == 0) {
            minutes--;
            seconds = 59;
        } else {
            seconds--;
        };
        document.getElementById("clock").textContent = minutes + ": " + seconds}, 1000)
}


function reset() {
    document.getElementById("away-score").textContent = 0;
    document.getElementById("home-score").textContent = 0;
    homeTriesSum = 0;
    awayTriesSum = 0;
    homeConversionSum = 0;
    awayConversionSum = 0;
    homeBonusPoints.textContent = "Bonus Point";
    awayBonusPoints.textContent = "Bonus Point";
    homeScore = 0;
    awayScore = 0;
    finishClock(intervalClock);
    document.getElementById("clock").textContent = 40 + ": " + 0;
    finishClock(intervalSB);
    document.getElementById("homeRC").textContent = "Red Cards: ";
    homeReds = 0;
    awayReds = 0;
    document.getElementById("awayRC").textContent = "Red Cards: ";
}

function redCard(teamName) {

    if (teamName == "homeRC") {
        homeReds++;
        document.getElementById(teamName).textContent = "Red Cards: " + homeReds;
    } else {
        awayReds++;
        document.getElementById(teamName).textContent = "Red Cards: " + awayReds;
    }
    
}
