
const buttons = document.querySelectorAll(`.btn`)

buttons.forEach((btn) => {
    btn.addEventListener(`click`, (event) => {
        document.querySelector(`body`).style.backgroundColor = event.target.id
    })
});