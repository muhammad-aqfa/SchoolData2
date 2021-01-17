import user1 from "./User.js";
israelCities();
document.querySelector(`#savebtn`).addEventListener(`click`, CheckFirstPageDetails)
function CheckFirstPageDetails()
{  
 event.preventDefault()
let UserName=document.getElementById(`UserName`).value;
let  password=document.getElementById(`password`).value;
let  Repassword=document.getElementById(`Resetpassword`).value;
let image=document.getElementById(`image`).value;
let Name=document.getElementById(`Name`).value;
let LastName=document.getElementById(`LastName`).value;
let Email=document.getElementById(`email`).value;
let date=document.getElementById(`date`).value;
let city=document.getElementById(`city`).value;
let street=document.getElementById(`street`).value;
let streetNumber=document.getElementById(`streetnumber`).value;
if(UserName==''){
    alert(`please put your Username`);
    return false;
}
if(UserName.length>=60){
    alert(`UserName Should be less than 60 letters`)
     return false;
 }
var letters=/^[a-zA-Z]*$/;
var bool=letters.test(UserName);
if(bool==false){
    alert(`UserName Should be with letters `);
    return false;
}
if(password==''){
    alert(`please put your Password`);
    return false;
}
let Passwordletters=/[A-Z]|[0-9]/;
var bool=Passwordletters.test(password);
if(bool==false)
{
alert(`password should be at least with one Big letter Or with Number`);
return false;
}
if(Repassword==''){
    alert(`please put your Repassword`);
    return false;
}
if(password!=Repassword){
    alert(`passwords are not Simlar`)
    return false;
}
 if(!(password.length>=7 && password.length<=12)){
    alert(`Password Should be less than  between 7 and 12 letters`)
    return false;
 }
if(date==''){
    alert(`please put your Date`);
    return false;
}
if(Name==''){
    alert(`please put your Name`);
    return false;
}
var hebrewLetters=/[א-ת]+\s*/
var bool=hebrewLetters.test(Name);
if(bool==false){
    alert(` Name hebrew letters only`);
    return false;
}
if(LastName==''){
    alert(`please put your LastName`);
    return false;
}
var hebrewLetters=/[א-ת]+\s*/
var bool=hebrewLetters.test(LastName);
if(bool==false){
    alert(` Last Name hebrew letters only`);
    return false;
}
if(image==''){
    alert(`please put your Image`);
    return false;
}
var imagelet=/^(.jpeg)|(.jpg)$/
var bool=imagelet.test(image);
if(bool==false){
    alert(`Image should be jpg or jpeg `);
    return false;
}
if(Email==''){
    alert(`please Enter your Email `);
    return false;
}
var shtrodelcount=0;
for( var i=0;i<Email.length;i++){
    if(Email[i]=='@'){
        shtrodelcount++;
    }
}
if(shtrodelcount!=1){
    alert(`Email should be with  one '@'`)
    return false;
}
if(city==''){
    alert(`please put your City`);
    return false;
}
if(street==''){
    alert(`please put your Street`);
    return false;
}
var hebrewLetters=/[א-ת]+\s*[א-ת]+/
var bool=hebrewLetters.test(street);
if(bool==false){
    alert(`street is hebrew letters only`);
    return false;
}
if(streetNumber==''){
    alert(`please put your StreetNumber`);
    return false;
}
 if(parseInt(streetNumber)<0){
    alert(`StreetNumber shouldn't be Negative  Number`);
    return false;
 }
 const s1= new user1(UserName,password,Repassword,image,Name,LastName,Email,date,city,street,streetNumber) 
     let users = JSON.parse(localStorage.getItem(`UsersKEY`)) || []
       if(users.length==0){
     users.push(s1);
     }
     else{
         for(var i=0;i<users.length;i++){
             if(users[i].Email==Email){
                 alert(`Email has been Exist `)
                 return false;
             }
             else{
                 if (i==users.length-1 && users[i].Email!=Email ){
                    users.push(s1);  
                    break;
                 }
             }
         }
     }
    localStorage.setItem(`UsersKEY`, JSON.stringify(users))
    location.href=`../js2/page2.html`
}



