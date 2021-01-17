
const TOTAL_MATCHES = 6

var moves = 0, matches = new Array(), openCards = new Array()

const cards = document.querySelectorAll(`.card`)

cards.forEach(card => {
    card.addEventListener(`click`, (event) => { flipCard(event.target) }) //event.target => התמונה שעליה לחצתי עכשיו
})

////לולאת for => עושה בדיוק את אותו דבר כמו הלולאה למעלה
// for (let i = 0; i < cards.length; i++) {
//     cards[i].addEventListener(`click`, (event) => { flipCard(event.target) })
// }


//setInterval => פונקציה של המערכת שמבצעת את הפעולות שבה כל פרק זמן מסויים
//setTimeout => פונקציה של המערכת שמבצעת את הפעולה רק פעם אחת ולאחר פרק זמן מסויים

//מציג הודעה אחרי 3 שניות
// setTimeout(()=>{
//     alert('Hi')
// }, 1000 * 3)


//מציג הודעה כל 5 שניות
// setInterval(()=>{
//     alert('Hi')
// }, 1000 *5)