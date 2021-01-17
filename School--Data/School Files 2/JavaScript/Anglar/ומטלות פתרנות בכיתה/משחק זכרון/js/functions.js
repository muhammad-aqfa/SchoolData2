
function flipCard(card) {
    moves++
    document.querySelector(`#header span`).innerText = moves
    card.src = card.dataset.img
    openCards.push(card)

    if (openCards.length == 2) {
        cards.forEach(card => {
            card.style.pointerEvents = 'none' //מניעת לחיצה על הקלפים
        })
        setTimeout(() => {
            checkCards()
        }, 1000 * 1.5)
    }
}

function checkCards() {
    if (openCards[0].dataset.name == openCards[1].dataset.name) {
        matches = [...matches, ...openCards]
        //matches = matches.concat(openCards)
    }
    else {
        openCards.forEach(card => {
            card.src = `assets/card-back.png`
        })
    }
    openCards = new Array()

    if (matches.length == TOTAL_MATCHES * 2) {
        document.querySelector(`#header`).innerHTML = `<img src="assets/v.png"/> סיימת את המשחק ב ${moves} מהלכים`
    }
    else{
        cards.forEach(card => {
            card.style.pointerEvents = 'auto' //מחזיר את האפשרות ללחיצה
        })
    }
}

//setInterval => פונקציה של המערכת שמבצעת את הפעולות שבה כל פרק זמן מסויים
//setTimeout => פונקציה של המערכת שמבצעת את הפעולה רק פעם אחת ולאחר פרק זמן מסויים