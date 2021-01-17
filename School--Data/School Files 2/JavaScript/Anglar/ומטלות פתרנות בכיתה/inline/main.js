
function changeImage() {
    const img = document.querySelector(`#myPic`); //יצירת אובייקט
    img.src = `images/${imgSrc}`;
}

function changeImage2() {
    debugger
    const img = document.querySelector(`#myPic2`); //יצירת אובייקט
    if (img.src == `http://127.0.0.1:5500/inline/images/lion.jpg`)
        img.src = `http://127.0.0.1:5500/inline/images/cat.jpg`;
    else    
        img.src = `http://127.0.0.1:5500/inline/images/lion.jpg`;
}