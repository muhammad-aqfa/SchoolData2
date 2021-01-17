
const TOTAL_MATCHES = 6

var moves = 0, matches = new Array(), openCards = new Array()

const cards = document.querySelectorAll(`.card`)

cards.forEach(card => {
    card.addEventListener(`click`, (event) => { flipCard(event.target) })
})