
//תרגיל 6
function Q6(lettersArray) {
    for (let i = 0; i < lettersArray.length; i++) {
        if (!(lettersArray[i] >= 'a' && lettersArray[i] <= 'z') && !(lettersArray[i] >= 'A' && lettersArray[i] <= 'Z')) {
            document.write(`<h1>not a valid array</h1>`)
            return
        }
    }

    let newArray = lettersArray.map((item) => {
        if ((item >= 'a' && item <= 'z'))
            return item.toUpperCase()
        else
            return item.toLowerCase()
    })

    return newArray
}

