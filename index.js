
let homeScore = 0;
let guestScore = 0;

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
    guestScore += 1;
    this.setGuestScore();
}

function addTwoGuest() {
    guestScore += 2;
    this.setGuestScore();
}

function addThreeGuest() {
    guestScore += 3;
    this.setGuestScore();
}

function clearBtn() {
    document.getElementById("homeScore").textContent = 0;
    document.getElementById("guestScore").textContent = 0;
    homeScore = 0;
    guestScore = 0;
    document.getElementById("homeScore").style.border = "none";
    document.getElementById("guestScore").style.border = "none";
}

function setHomeScore() {
    document.getElementById("homeScore").textContent = homeScore;
    checkWholead();
}

function setGuestScore() {
    document.getElementById("guestScore").textContent = guestScore;
    checkWholead();
}

function checkWholead() {
    if (guestScore > homeScore) {
        document.getElementById("guestScore").style.border = "5px solid red";
        document.getElementById("homeScore").style.border = "none";
    } else if (homeScore > guestScore) {
        document.getElementById("homeScore").style.border = "5px solid red";
        document.getElementById("guestScore").style.border = "none";
    } else {
        document.getElementById("homeScore").style.border = "none";
        document.getElementById("guestScore").style.border = "none";
    }
}