let users = JSON.parse(localStorage.getItem(`UsersKEY`))
let users2 = JSON.parse(localStorage.getItem(`Users2`));
let img=document.getElementById("img");
let email1=document.querySelector(`#email`);
let city1=document.querySelector(`#city`);
let birthday1=document.querySelector(`#birthday`);
let name=document.querySelector(`#name`);
document.querySelector(`#logout`).addEventListener(`click`, logout)
document.querySelector(`#changeDeatils`).addEventListener(`click`, changeDeatils)
document.querySelector(`#game`).addEventListener(`click`, game)
js3func();
function changeDeatils() {
   //location.href=`../js4/page4.html`
   window.open(`../js4/page4.html`);
}
function js3func()
{
    for(i=0;i<users.length;i++){
        if(users2[0].field1==users[i].Email){
            email1.innerHTML=`${users[i].Email}`;
            city1.innerHTML=`${users[i].city}`;
            birthday1.innerHTML=`${users[i].Date}`;
            name.innerHTML=`${users[i].Name}` +" " + `${users[i].LastName}`;
           return true;
        }
    }
}
function logout() {
    //location.href=`../js1/page1.html`
    window.open(`../js1/page1.html`);
}
function game() {
    window.open(`http://flappybird.io/`);
}
function changeimg(input) {
    var reader=new FileReader();
    reader.onload=function (e) {   
    img.setAttribute("src",e.target.result);
    };
   reader.readAsDataURL(input.files[0]);
}
