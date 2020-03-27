function addToField(str) {
    if (document.getElementById("result").value.length < 25) {
        document.getElementById("result").value += str;
    }
    
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

function evallessCalculate() {
    document.getElementsByTagName("section")[0].innerHTML = " ";
    var result = String(document.getElementById("result").value);
    document.getElementById("result").value = reCalc(result);
}

function reCalc(toBeCalculated) {
    document.getElementsByTagName("section")[0].innerHTML += "<p>" + toBeCalculated + "</p>";
    let expressionlist = [];
    for (let index = 0; index < toBeCalculated.length; index++) {
        let currentPart = "";
        const element = toBeCalculated[index];
        if (element == "(") {
            let paranthesis = 1;
            for (index++; index < toBeCalculated.length; index++) {
                const element = toBeCalculated[index];
                currentPart += element;
                if (element == "(") {
                    paranthesis++;
                }
                else if (element == ")" && paranthesis > 1) {
                    paranthesis--;
                }
                else if(element == ")" && paranthesis == 1){
                    break;
                }
            }
            expressionlist.push(reCalc(currentPart));
            paranthesis = 0;
        }
        
        else if (!isNaN(element)) {
            for (; index < toBeCalculated.length; index++) {
                const element = toBeCalculated[index];
                if (isNaN(element) && element != ".") {
                    index--;
                    break;
                }
                currentPart += element;
            }
            
            expressionlist.push(parseFloat(currentPart));
        }
        else{
            expressionlist.push(element);
        }
        
    }
    document.getElementsByTagName("section")[0].innerHTML += "<p>" + expressionlist + "</p>";
    
    let counter = 0;
    while (expressionlist.length > 1) {
        for (let index = 0; index < expressionlist.length; index++) {
            const element = expressionlist[index];
            if (element == "^") {
                expressionlist[index - 1] = expressionlist[index - 1] ** expressionlist[index + 1];
                expressionlist.splice(index, 2);
                document.getElementsByTagName("section")[0].innerHTML += "<p>" + expressionlist + "</p>";
            }
        }
    
        for (let index = 0; index < expressionlist.length; index++) {
            const element = expressionlist[index];
            if (element == "*" || element == "/") {
                if (element == "*") {
                    expressionlist[index - 1] = expressionlist[index - 1] * expressionlist[index + 1];
                }
                else{
                    expressionlist[index - 1] = expressionlist[index - 1] / expressionlist[index + 1];
                }
                
                expressionlist.splice(index, 2);
                document.getElementsByTagName("section")[0].innerHTML += "<p>" + expressionlist + "</p>";
            }
        }
        for (let index = 0; index < expressionlist.length; index++) {
            const element = expressionlist[index];
            if (element == "+" || element == "-") {
                if (element == "+") {
                    expressionlist[index - 1] = expressionlist[index - 1] + expressionlist[index + 1];
                }
                else{
                    expressionlist[index - 1] = expressionlist[index - 1] - expressionlist[index + 1];
                }
                
                expressionlist.splice(index, 2);
                document.getElementsByTagName("section")[0].innerHTML += "<p>" + expressionlist + "</p>";
            }
        }
        if (counter++ > 1000) {
            break;
        }
    }
    return expressionlist[0];
}