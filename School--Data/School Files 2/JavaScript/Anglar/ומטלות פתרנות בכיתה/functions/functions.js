
function CreateNewNumber(num) {
    let newNum = 0,  //המספר החדש
        k = 1, //מיקום הספרה במספר הישן
        digit; //הספרה הנוכחית

    //לולאה לפירוק המספר    
    while (num > 0) {
        digit = num % 10
        if (digit <= 4)
            newNum += (digit * 2) * k
        else
            newNum += (digit - 1) * k

        k *= 10
        num = parseInt(num/10)
    }

    return newNum
}

