const a = document.querySelectorAll(".label");
const q = document.querySelectorAll(".answ")
const button = document.getElementById("but");
button.addEventListener('click',result);
function result(){
    for(let i = 0; i < a.length - 1; i++){
        if(!q[i].classList.contains("corr") && q[i].checked)
            a[i + 1].classList.add("err");
        if(a[i].classList.contains("corr"))
            a[i].classList.add("style") 
    }
    button.remove();
    calculate();
    

}
function calculate(){
    var response = document.createElement("h1");
    if(correct() && selected()){
        response.innerHTML = "Hai risposto a tutto bene";
    }else{
        response.innerHTML = "Hai sbagliato e/o mancato qualche cosa";
    }
    document.body.append(response);
}

function correct(){
    a.forEach(element=>{
        if(element.classList.contains("err")) return false;
    })
    return true;

}

function selected(){
    var doc = document.getElementsByClassName("label corr")
    Array.from(doc).forEach((element, index)=>{
        if(!q[i - 1].checked) return false;
    })
    return true;

}