window.onload=()=>{
    document.getElementsByTagName("body")[0].classList.add("darkCon");
    document.getElementsByTagName("header")[0].classList.add("lightCon");
    document.getElementById("menu").classList.add("lightCon");
    hackTextEffect();
    if (document.querySelectorAll(".grid-container").length > 0) {
        addElements();
    }
    
    parallax();
    circutAnimationIdle();
}

function menuClick() {
    var elem = document.getElementById("menu");
    if (elem.style.display == "block") {
        elem.style.display = "none";
    } else {
        elem.style.display = "block";
    }
}

function randomString(length) {
    var newText = [];
    characters = 'abcdefghijklmnopqrstuvwxyz@$%!£ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890-=+.'.split('');
    for (let id = 0; id < length; id++) {
        char = Math.floor(Math.random() * characters.length);  
        newText.push(characters[char]);
    }
    return newText.join('');
}

function hackTextEffect() {
    var elements = document.querySelectorAll("h1,h2,h3,h4,h5,h6");
    for (const element of elements) {
        hack(element);
    }
}

function hack(element) {
    var oldText = element.innerHTML.split('');
    var newText = randomString(oldText.length).split('');
    var count = 0;
    var hackInterval = setInterval(() => {
        newText[count] = oldText[count];
        element.innerHTML = newText.join('');
        if (count++ > oldText.length) {
            clearInterval(hackInterval);
        }
    }, 500/oldText.length);
}

function switchMode() {
    var elementsToChange = document.querySelectorAll(".darkCon, .lightCon");
    var menuIconSrc = document.getElementById("menu-icon").src.split('/')
    
    if (menuIconSrc[menuIconSrc.length - 1] == "black.svg") {
        document.getElementById("menu-icon").src = "../bilder/blue.svg";
        if (document.getElementById("github-icon") != null) {
            document.getElementById("github-icon").src = "../bilder/GitHub-Mark-64px.png";
            document.getElementById("home-icon").src = "../bilder/home-icon-light.svg";
        }
        document.getElementById("modeSwitch").innerHTML = "Switch to Dark";
    }
    else{
        document.getElementById("menu-icon").src = "../bilder/black.svg";
        if (document.getElementById("github-icon") != null) {
            document.getElementById("github-icon").src = "../bilder/GitHub-Mark-Light-64px.png";
            document.getElementById("home-icon").src = "../bilder/home-icon.svg";
        }
        document.getElementById("modeSwitch").innerHTML = "Switch to Light";
    }

    if (document.getElementById("menu-icon").src.split('/')[-1] == "") {
        
    }

    for (const elem of elementsToChange) {
        if (elem.classList.contains("darkCon")) {
            elem.classList.remove("darkCon");
            elem.classList.add("lightCon");
            console.log("Light");
        }
        else{
            elem.classList.remove("lightCon");
            elem.classList.add("darkCon");
            console.log("Dark");
        }  
    }
}

function parallax(){ // Parallax metoden ger en parallax effekt för sidan (att bakgrunden går inte med samma hastighet med förgrunden)
    window.addEventListener("scroll", function(){
        let offset = window.pageYOffset;
        document.getElementById("overlay").style.backgroundPositionY = -offset*0.2 + "px";
    })
}

function circutAnimationIdle(){ // Metoden tar hand om animationen av kretsbilden i bakgrunden
    animationPosition = 1;
    window.setInterval(() => {
        backgroundX = document.getElementById("overlay").style;
        backgroundX.backgroundPositionX = animationPosition + "px";
        animationPosition += 0.1;
    }, 1000/60);
}

function addElements() {
    var elementsToAdd = [
        {
            "name": "Om Mig",
            "description": "Sidan där jag skriver om mig själv och min interesse.",
            "path": "./om-mig",
        },
        {
            "name": "Kalkylator 1",
            "description": "Miniräknare skriven i JavaScript som är baserad på eval() funktionen.",
            "path": "./miniraknare-med-eval",
        },
        {
            "name": "Kalkylator 2",
            "description": "Miniräknare skriven i JavaScript som är baserad på en egen funktion som beräknar en sträng.",
            "path": "./miniraknare-utan-eval",
        },
        {
            "name": "Trouble in Town",
            "description": "Ett LAN rollspel skriven i C# som är baserad på spelen Werewolf och Mafia.",
            "path": "./trouble-in-town",
        },
        {
            "name": "Portfolio",
            "description": "Den här sidan... Portfolio.",
            "path": "./index.html",
        }
    ];
    console.log(elementsToAdd);
    
    for (let index = 0; index < elementsToAdd.length; index++) {
        const element = elementsToAdd[index];
        var newHeader = document.createElement("h1");
        newHeader.innerHTML = element["name"];
        var newPara = document.createElement("P");
        newPara.innerHTML = element["description"];
        var newDiv = document.createElement("div");
        newDiv.classList.add("lightCon");
        newDiv.setAttribute("onclick", "window.open('" + element["path"] + "', '_self')");
        newDiv.appendChild(newHeader);
        newDiv.appendChild(newPara);
        document.getElementsByClassName("grid-container")[0].appendChild(newDiv);
    }
}
function collapseText() {
    let gridContainer = document.getElementsByClassName("grid-container");
    if (gridContainer.length > 0) {
        document.getElementsByClassName("grid-container")[0].classList.add("grid-container-collapsed");
        document.getElementsByClassName("grid-container")[0].classList.remove("grid-container");
    }
    else{
        document.getElementsByClassName("grid-container-collapsed")[0].classList.add("grid-container");
        document.getElementsByClassName("grid-container-collapsed")[0].classList.remove("grid-container-collapsed");
    }
}