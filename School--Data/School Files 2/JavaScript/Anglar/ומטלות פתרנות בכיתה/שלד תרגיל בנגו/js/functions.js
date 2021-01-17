
//הגרלת מספר באופן רנדומלי בין טווח מסוים
//Math.floor(Math.random()*(max_limit - min_limit) + min_limit)

/*
רמז לטיפול בכפילות המספרים: מערכים
*/

//פונקציה ליצירת לוח המשחק
function drawBoard() {
    const board = document.querySelector(`#board`)
    let table = `<table>`

    for (let rows = 1; rows <= 7; rows++) {
        table += `<tr>`

        for (let cols = 1; cols <= 7; cols++) {
            let n = Math.floor(Math.random()*(100 - 1) + 1) //הגרלת מספר רנדומלי
            /*
                בדיקה שאין כפילות
                אם כן להגריל מספר חדש
            */
            table += `<td>${n}</td>`
        }

        table += `</tr>`
    }

    table += `</table>`

    board.innerHTML = table

}

