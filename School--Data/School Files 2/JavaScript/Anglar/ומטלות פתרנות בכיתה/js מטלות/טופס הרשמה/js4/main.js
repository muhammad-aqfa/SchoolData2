let username=document.querySelector(`#username`);
let fullname=document.querySelector(`#name`);
let birthday=document.querySelector(`#birthday`);
let city=document.querySelector(`#city`);
let email=document.querySelector(`#Email`);
let users = JSON.parse(localStorage.getItem(`UsersKEY`));
let users2 = JSON.parse(localStorage.getItem(`Users2`));
document.querySelector(`#delete`).addEventListener(`click`, delete1);
document.querySelector(`#update`).addEventListener(`click`, update1);
js4func();
function js4func()
{
    for(i=0;i<users.length;i++){
        if(users2[0].field1==users[i].Email){
            username.innerHTML=`${users[i].UserName}`;
            fullname.innerHTML=`${users[i].Name}`+" " + `${users[i].LastName}` ;
            birthday.innerHTML=`${users[i].Date}`;
            city.innerHTML=`${users[i].city}`;
            email.innerHTML=`${users[i].Email}`;
           return true;
        }
    }
}
function delete1()
{
    for(i=0;i<users.length;i++){
        if(users2[0].field1==users[i].Email){
            username.innerHTML=null;
            fullname.innerHTML=null ;
            birthday.innerHTML=null;
            city.innerHTML=null;
            email.innerHTML=null;
           return true;
        }
    }
}
function update1(){
  // window.open('page1.html');
  location.href=`../js1/page1.html`
}
