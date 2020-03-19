function addToField(str) {
    document.getElementById("result").value += str;
}

function clearField() {
    document.getElementById("result").value = "";
}
function deleteLast() {
    var result = String(document.getElementById("result").value);
    result = result.substring(0, result.length - 1);
    document.getElementById("result").value = result;
}

function calculate() {
    var result = String(document.getElementById("result").value);
    result = result.replace(/e\^/g, "Math.exp");
    result = result.replace(/ln/g, "Math.log");
    result = result.replace(/pi/g, "Math.PI");
    result = result.replace(/√/g, "Math.sqrt");
    result = result.replace(/\^/g, "**");
    console.log(result);
    document.getElementById("result").value = eval(result);
}