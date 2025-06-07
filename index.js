
let homeScore = 0;
let guestscore = 0;

function addOneHome() {
    homeScore += 1;
    setHomeScore();
}

function addTwoHome() {
    homeScore += 2;
    setHomeScore();
}

function addThreeHome() {
    homeScore += 3;
    setHomeScore();
}

function addOneGuest() {
    guestscore += 1;
    this.setGuestScore();
}

function addTwoGuest() {
    guestscore += 2;
    this.setGuestScore();
}

function addThreeGuest() {
    guestscore += 3;
    this.setGuestScore();
}

function clearBtn() {
    document.getElementById("homeScore").textContent = 0;
    document.getElementById("guestScore").textContent = 0;
    homeScore = 0;
    guestscore = 0;
}

function setHomeScore() {
    document.getElementById("homeScore").textContent = homeScore;
}

function setGuestScore() {
    document.getElementById("guestScore").textContent = guestscore;
}