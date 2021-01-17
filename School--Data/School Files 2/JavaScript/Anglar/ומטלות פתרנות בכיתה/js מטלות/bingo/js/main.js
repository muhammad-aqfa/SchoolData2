drawboard1(7)
document.querySelector(`#lotterbutton`).addEventListener(`click`, printRandomnumber);
const table1= document.querySelectorAll(`.tablebuttons`)
table1.forEach(button=>{
button.addEventListener(`click`,(event)=>{tablebuttons(event.target) })
})
