today = new Date(); // En instans av Date för att få dagens datum


function changeToMyCurrentAge(){ // Funktionen som den själv säger ändrar en del av ett element till min ålder
    todaysDate = (today.getMonth() + 1) * 100 + today.getDate();
    
    if (todaysDate >= 409) {
        document.getElementById("ar").innerText = today.getFullYear() - 2002;   
    } else {
        document.getElementById("ar").innerText = today.getFullYear() - 2002 - 1;
    }
}

function parallax(){ // Parallax metoden ger en parallax effekt för sidan (att bakgrunden går inte med samma hastighet med förgrunden)
    window.addEventListener("scroll", function(){
        let offset = window.pageYOffset;
        document.getElementsByTagName("body")[0].style.backgroundPositionY = -offset*0.2 + "px";
    })
}

function circutAnimationIdle(){ // Metoden tar hand om animationen av kretsbilden i bakgrunden
    animationPosition = 1;
    window.setInterval(() => {
        backgroundY = document.getElementsByTagName("body")[0].style;
        backgroundY.backgroundPositionX = animationPosition + "px";
        animationPosition += 0.1;
    }, 1000/60);
}

function PictureEasterEgg(){ // Metoden tar hand om en Easter Egg i "min bild" så att när man trycker på den så ändras den
    myPic = document.getElementById("mypic");
    currentPic = "./bilder/azeezimage-640px.jpg";
    myPic.addEventListener("click", function(){
        if (currentPic == "./bilder/azeezimage-640px.jpg") {
            currentPic = "./bilder/azeezimagememe-640px.jpg";
            myPic.srcset = currentPic;
        } else {
            currentPic = "./bilder/azeezimage-640px.jpg";
            myPic.srcset = currentPic;
        }
    })
}

function memeEasterEgg(){ // Metoden tar hand om en Easter Egg i första stycket (paragraph) där om man trycker på ordet memes så kommer det upp en meme i en ny flik
    memeText = document.getElementById("memeEasterEgg");
    memeText.addEventListener("click", function(){
        window.open("./bilder/azeezmemehtml-640px.jpg");
    })
}

window.onload = function(){ // All metoder körs vid (direkt efter) laddningen av sidan
    changeToMyCurrentAge();
    parallax();
    circutAnimationIdle();
    PictureEasterEgg();
    memeEasterEgg();
}

