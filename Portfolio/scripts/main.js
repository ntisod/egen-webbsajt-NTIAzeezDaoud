window.onload=()=>{
    document.getElementsByTagName("body")[0].classList.add("darkCon");
    document.getElementsByTagName("header")[0].classList.add("lightCon");
    document.getElementById("menu").classList.add("lightCon");
    hackTextEffect();
    addElements();
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
    var elements = document.querySelectorAll("p,h1");
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
    }, 700/oldText.length);
}

function switchMode() {
    var elementsToChange = document.querySelectorAll(".darkCon, .lightCon");
    var menuIconSrc = document.getElementById("menuIcon").src.split('/')
    
    if (menuIconSrc[menuIconSrc.length - 1] == "black.svg") {
        document.getElementById("menuIcon").src = "./images/blue.svg";
    }
    else{
        document.getElementById("menuIcon").src = "./images/black.svg";
    }

    if (document.getElementById("menuIcon").src.split('/')[-1] == "") {
        
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

function openNewTab(url) {
    window.open(url, "_blank");
}

function addElements() {
    var elementsToAdd = [
        {
            "name": "Om Mig",
            "description": "Sidan där jag skriver om mig själv och min interesse.",
            "path": "../index.html",
        },
        {
            "name": "Om Mig",
            "description": "Sidan där jag skriver om mig själv och min interesse.",
            "path": "./index.html",
        },
        {
            "name": "Om Mig",
            "description": "Sidan där jag skriver om mig själv och min interesse.",
            "path": "./index.html",
        },
        {
            "name": "Om Mig",
            "description": "Sidan där jag skriver om mig själv och min interesse.",
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
        newDiv.setAttribute("onclick", "window.open('" + element["path"] + "')");
        newDiv.appendChild(newHeader);
        newDiv.appendChild(newPara);
        document.getElementsByClassName("grid-container")[0].appendChild(newDiv);
    }
}