const currentOut = document.getElementById("curr");
const prevOut = document.getElementById("prev");
isResult = false;
var firstValue;
var secondValue;
var operand;
function insert(number_){
    if(isResult){
        currentOut.innerHTML = number_;
        prevOut.innerHTML = '';
        isResult = false;
    }
    else
        currentOut.innerHTML += number_;
    if(number_ !== '.')
    currentOut.innerHTML =Number.parseFloat(currentOut.innerHTML);
}

function cls(){
    currentOut.innerHTML = 0;
}

function sign(){
    if(currentOut.innerHTML[0] === '-')
        currentOut.innerHTML[0].replace(0, '');
    
    else
        currentOut.innerHTML = '-' + currentOut.innerHTML;
}

function canc(){
    if(currentOut.innerHTML != '' && currentOut.innerHTML != '0')
    {
        currentOut.innerHTML = currentOut.innerHTML.substring(0, currentOut.innerHTML.length-1);
    }
}

function clsAll(){
    currentOut.innerHTML = 0;
    prevOut.innerHTML = '';
    secondValue = undefined;
    firstValue = undefined;
    operand = undefined;
}
function Compute(op){
    switch(op){
        case '+':
            secondValue = parseFloat(currentOut.innerHTML);
            firstValue = parseFloat(prevOut.innerHTML);
            currentOut.innerHTML = firstValue + secondValue;
            prevOut.innerHTML = firstValue + secondValue;
            break;
        
        case '-':
            secondValue = parseFloat(currentOut.innerHTML);
            firstValue = parseFloat(prevOut.innerHTML);
            currentOut.innerHTML = firstValue - secondValue;
            prevOut.innerHTML = firstValue - secondValue;
            break;
        
        case '*':
            secondValue = parseFloat(currentOut.innerHTML);
            firstValue = parseFloat(prevOut.innerHTML);
            currentOut.innerHTML = firstValue * secondValue;
            prevOut.innerHTML = firstValue * secondValue;
            break;
    

        case '=':
            secondValue = parseFloat(currentOut.innerHTML);
            firstValue = parseFloat(prevOut.innerHTML);
            switch (operand){
                case '+':
                    currentOut.innerHTML = firstValue + secondValue;
                    break;
                case '-':
                    currentOut.innerHTML = firstValue - secondValue;
                    break;
                case '*':
                    currentOut.innerHTML = firstValue * secondValue;
                    break;
                case '/':
                    currentOut.innerHTML = firstValue / secondValue;
                    break;
            }
            
            prevOut.innerHTML = firstValue.toString() + operand + secondValue.toString();
            isResult = true;
            break;
    }

    isResult = true;
}

function subctract(){
    if(prevOut.innerHTML === ''){
        prevOut.innerHTML = currentOut.innerHTML;
        currentOut.innerHTML = 0;
        operand = '-';
       
    }
    else if(!isNaN(prevOut.innerHTML)){
        
        Compute(operand);
        cls();
        operand = '-';
        isResult = false;
        
    }

       
    }


function add(){
    if(prevOut.innerHTML === ''){
        prevOut.innerHTML = currentOut.innerHTML;
        currentOut.innerHTML = 0;
        operand = '+';
        
    }
    else if(!isNaN(prevOut.innerHTML)){
        
        Compute(operand);
        cls();
        operand = '+';
        isResult = false;
        
    }


}

function div_(){
    if(prevOut.innerHTML === ''){
        prevOut.innerHTML = currentOut.innerHTML;
        currentOut.innerHTML = 0;
        operand = '/';
        
    }
    else if(!isNaN(prevOut.innerHTML)){
        
        Compute(operand);
        cls();
        operand = '/';
        isResult = false;
        
    }


}


function egual(){
    Compute('=');
}


function mol(){
    if(prevOut.innerHTML === ''){
        prevOut.innerHTML = currentOut.innerHTML;
        currentOut.innerHTML = 0;
        operand = '*';
        
    }
    else if(!isNaN(prevOut.innerHTML)){
        
        Compute(operand);
        cls();
        operand = '*';
        isResult = false;
        
    }


}


function rec(){
    var value = parseFloat(currentOut.innerHTML);
    currentOut.innerHTML = 1 / value;
    prevOut.innerHTML = value +"<sup>-1</sub>";
    isResult = true;
    

}


function square(){
    var value = parseFloat(currentOut.innerHTML);
    currentOut.innerHTML = value **2;
    prevOut.innerHTML = value +"<sup>2</sub>";
    isResult = true;
    

}

function sqrt(){
    var value = parseFloat(currentOut.innerHTML);
    currentOut.innerHTML = Math.sqrt(value);
    prevOut.innerHTML = `&radic; (${value})`;
    isResult = true;
    

}