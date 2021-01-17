let menu = new Array();
menu[0] = `rice`;
menu[1] = `pizza`;
menu[2] = `chicken`;
menu[3] = `cheese cake`;
menu[4] = `potatos`;

//מאחורי הקלעים של ה join
// for (let i = 0; i < menu.length; i++) {
//     document.write(`${menu[i]}`)
//     if (i + 1 < menu.length)
//         document.write(`, `)
// }

document.write(`${menu.join()}<br>`)
document.write(`${menu.join(`, `)}<br>`)
document.write(`${menu.join(` !!kookoo!! `)}<br>`)
document.write(`${menu.join(`<br>`)}<br>`)

// מיון מהקטן לגדול ואז להדפיס
document.write(`${menu.sort().join(`, `)}<br>`)

//מיון מהגדול לקטן ואז להדפיס
document.write(`${menu.sort().reverse().join(`, `)}<br>`)

//איחוד מערכים
let first = new Array("a", "b", "c")
let second = new Array(1, 2, 3, 4, 5, 6, 7)

//js before 2015
let tog = first.concat(second)
document.write(`${tog.join()}<br>`)

//js after 2015
let tog2 = [...first, ...second]
document.write(`${tog2.join()}<br>`)


