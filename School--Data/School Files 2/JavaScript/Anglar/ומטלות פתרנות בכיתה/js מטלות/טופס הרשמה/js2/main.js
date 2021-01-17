import user2 from "./us.js";
let users = JSON.parse(localStorage.getItem(`UsersKEY`))
document.querySelector(`#button`).addEventListener(`click`, page2);
function page2()
{
let field1=document.querySelector(`#field1`).value;
let field2=document.querySelector(`#field2`).value;
const s10=new user2(field1);
let users2 = JSON.parse(localStorage.getItem(`Users2`)) || [];
if(users2.length==0){
    users2.push(s10);
}
else{
    users2[0]=s10;
}
for(var i=0;i<users.length;i++){
      if(users[i].Email==field1)
      {
          if(users[i].password==field2){
            localStorage.setItem(`Users2`, JSON.stringify(users2))
            location.href=`../js3/page3.html`
              break;
          }
          else{
              alert(`password is wrong`)
             return  false;
          }
      }
      else if(i==users.length-1 && users[i].Email!=field1)
      {
        alert(`Email is wrong`);
        return false;
      }
}
}


