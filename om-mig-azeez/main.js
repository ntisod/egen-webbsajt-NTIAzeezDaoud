today = new Date();

function changeToMyCurrentAge(){
    if (today.getMonth() >= 3) {
        document.getElementById("ar").innerText = today.getFullYear() - 2002;   
    } else {
        document.getElementById("ar").innerText = today.getFullYear() - 2002 - 1;
    }
}

function parallax(){
    window.addEventListener("scroll", function(){
        let offset = window.pageYOffset;
        document.getElementsByTagName("body")[0].style.backgroundPositionY = -offset*0.2 + "px";
    })
}

function circutAnimationIdle(){
    animationPosition = 1;
    window.setInterval(() => {
        backgroundY = document.getElementsByTagName("body")[0].style;
        backgroundY.backgroundPositionX = animationPosition + "px";
        animationPosition += 0.1;
    }, 1000/60);
}

function PictureEasterEgg(){
    myPic = document.getElementById("mypic");
    currentPic = "./bilder/azeezimage.jpg";
    myPic.addEventListener("click", function(){
        if (currentPic == "./bilder/azeezimage.jpg") {
            currentPic = "./bilder/azeezimagememe-640px.jpg";
            myPic.srcset = currentPic;
        } else {
            currentPic = "./bilder/azeezimage.jpg";
            myPic.srcset = currentPic;
        }
    })
}

function memeEasterEgg(){
    memeText = document.getElementById("memeEasterEgg");
    memeText.addEventListener("click", function(){
        window.open("./bilder/azeezmemehtml.jpg");
    })
}

window.onload = function(){
    changeToMyCurrentAge();
    parallax();
    circutAnimationIdle();
    PictureEasterEgg();
    memeEasterEgg();
}

