
function partA_q6() {
    let num1 = parseInt(prompt(`enter first number`))
    let num2 = parseInt(prompt(`enter second number`))
    let num3 = parseInt(prompt(`enter third number`))

    if (num1 < num2 && num2 < num3)
        alert(`Good job dude!`)
    else
        alert(`try again`)
}

function partB_q4() {
    let table = `<table>`
    let n
    for (let row = 1; row <= 10; row++) {
        table += `<tr>`
        for (let col = 1; col <= 10; col++) {
            n = row * col
            if (n % 2 == 0)
                table += `<td class="even">${n}</td>`
            else
                table += `<td class="odd">${n}</td>`
        }
        table += `</tr>`
    }

    table += `</table>`
    document.write(table)
}

function partB_q5() {
    let table = `<table>`
    let n, isPrimary
    let limit = parseInt(prompt(`enter the board limit`))

    for (let row = 1; row <= limit; row++) {
        table += `<tr>`
        for (let col = 1; col <= limit; col++) {
            n = row * col
            isPrimary = true
            //לולאה שבודקת האם למספר יש מחלקים נוספים
            for (let i = 2; i <= n / 2; i++) {
                if (n % i == 0) {
                    isPrimary = false
                    break
                }
            }
            if (isPrimary == true)
                table += `<td class="primary">${n}</td>`
            else
                table += `<td>${n}</td>`
        }
        table += `</tr>`
    }

    table += `</table>`
    document.write(table)
}
