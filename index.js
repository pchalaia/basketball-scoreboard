let homeCounter = 0
let guestCounter = 0
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

function updateHome(points) {
    homeCounter += points
    homeScore.textContent = homeCounter
}

function updateGuest(points) {
    guestCounter += points
    guestScore.textContent = guestCounter
}
    
function reset() {
    homeCounter = 0
    guestCounter = 0
    homeScore.textContent = 0
    guestScore.textContent = 0
}

