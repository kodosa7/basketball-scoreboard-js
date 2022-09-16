let home = 0
let guest = 0

let homeEl = document.getElementById("digit-home")
let guestEl = document.getElementById("digit-guest")

function incHomeBy1 () {
    home += 1
    homeEl.textContent = home
}

function incHomeBy2 () {
    home += 2
    homeEl.textContent = home
}

function incHomeBy3 () {
    home += 3
    homeEl.textContent = home
}

function incGuestBy1 () {
    guest += 1
    guestEl.textContent = guest
}

function incGuestBy2 () {
    guest += 2
    guestEl.textContent = guest
}

function incGuestBy3 () {
    guest += 3
    guestEl.textContent = guest
}

function resetHome() {
    home = 0
    homeEl.textContent = home
}

function resetGuest() {
    guest = 0
    guestEl.textContent = guest
}