const Button = document.getElementById("Button");
const Menu = document.getElementById("Menu");
const NavList = document.querySelectorAll(".menuUl li")
Button.addEventListener("click", ()=>{
    Menu.classList.toggle("nav-active");
    Button.classList.toggle("toggle");
    NavList.forEach((element, index)=>{
       if(element.style.animation){
           element.style.animation = "";
       }else{
           element.style.animation = `buttonAnim 0.5s ease forwards ${index / 7 + 0.1}s`; 
       }
    })

});