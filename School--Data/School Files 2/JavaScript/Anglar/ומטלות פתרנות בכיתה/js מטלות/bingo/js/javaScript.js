var array1 = new Array()
var array2 = new Array()
var array3 = new Array()
var k = 0
function drawboard1(n) 
{
    const drawboard = document.querySelector(`#drawboard`)
    let table = `<table>`
    for (var i = 0; i <100; i++) {
        array3.push(i);
    }
    var len = array3.length;
    while(len--){
        var num = Math.floor(Math.random() * (len +1))
        array1.push(array3[num]);
        array3.splice(num,1);
    }
   //array1.sort();
     for (var i = 0; i <n; i++) {
         table += `<tr>`
         for (var j = 0; j < n; j++) {
            table += `<td> <button class="tablebuttons">${array1[k]}</button> </td>`
            k++;
         }
         table += `</tr>`
     }
drawboard.innerHTML = table;
table += `</table>`
}
function printRandomnumber() {
    var randomNumber = Math.floor(Math.random() * (100 - 1))
    document.querySelector(`#ThenumberUnderButton`).innerHTML = `${randomNumber}`;
    array2.push(randomNumber)
    numberUnderTable=document.querySelector(`#numberUnderTable`).innerHTML =array2.join()
 }
 let count=0;
 let counter=0;
 var threetimes=0;
 var c=0;
 var k=0;
 function tablebuttons(button)
 {
    const lost=document.querySelector(`#lost`)
    winner=document.querySelector(`#win`);
     num1=parseInt(button.innerHTML);
     for(i=0;i<array2.length;i++){
         if(num1!=array2[i]){
             count++;
             if(count==array2.length){
                 threetimes++;
                 if(threetimes==3){
                    lost.style.opacity=1;
                    document.getElementById(`lotterbutton`).disabled=true;
                    break;                 
             }
         }
       }
         else
         {    c++;
              button.style.color=`red`
                    if(c==49){
                        document.getElementById(`lotterbutton`).disabled=true;
                        winner.style.opacity=1;
                    }
                }
         }
        count=0;
 }