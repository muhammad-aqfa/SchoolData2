
/*
    דוגמה ראשונה לקליטה והדפסה
*/

// let firstName = prompt(`מה שמך הפרטי?`)
// let year = parseInt(prompt(`שנת לידה`))
// let grade = parseFloat(prompt(`ציון ממוצע`))

// document.write(`
//     <div class="info">
//         <p class="first-name">שם פרטי: <span>${firstName}</span></p>
//         <p class="year">שנת לידה: <span>${year}</span></p>
//         <p class="grade">ציון ממוצע: <span>${grade}</span></p>
//     </div>
// `);

/*
    דוגמה 2 - פתרון שאלת סיכום 1
*/
let number = parseInt(prompt(`הזן מספר`))
let newNum = CreateNewNumber(number)

document.write(`${number} --> ${newNum}`)

