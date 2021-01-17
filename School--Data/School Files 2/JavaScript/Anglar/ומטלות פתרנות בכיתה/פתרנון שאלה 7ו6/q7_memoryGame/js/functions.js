
function flipCard(card) {
    moves++
    card.style.opacity = 1
    openCards.push(card)
    if (openCards.length == 2) {
        checkCards()
    }
}

function checkCards() {
    if (openCards[0].src == openCards[1].src) {
        matches = [...matches, ...openCards]
    }
    else {
        openCards.forEach(item => {
            item.style.opacity = 0
        })
    }
    openCards = new Array()

    if (matches.length == TOTAL_MATCHES * 2) {
        document.write(`<h1>Winner with ${moves} moves</h1>`)
    }
}