
function TheOneRing() {
    
}

function KillerQueen() {
    var click = new Audio("../bilder/bokudan.mp3");
    click.play();
    
    setTimeout(() => {
        document.body.style = "opacity: 0; transition: 100ms ease-in-out; background: url('https://cdn.pixabay.com/photo/2013/07/12/14/27/burst-148240_960_720.png') no-repeat center;";
        var explosion = new Audio("../bilder/killerqueenexplosion.mp3");
        explosion.play();
    }, 300);
    
    setTimeout(() => {
        var dora = new Audio("../bilder/greato.mp3");
        dora.volume = 0.5;
        dora.play();
        document.body.style = "opacity: 1; transition: 500ms ease-in-out;";
    }, 4000);
}