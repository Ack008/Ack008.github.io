const menu = document.getElementById("menu");
const But = document.getElementById("but");
var show_ = false;
var lenght = menu.style["width"];
menu.style.marginLeft = '0px';
But.style.marginLeft = '200px';
show_ = true;

function show(){
    if (show_){
        menu.style.marginLeft = '-200px';
        menu.style["width"] = '0px';
        But.style.marginLeft = '0px';
        show_ = false;
    }
    else{
        menu.style.marginLeft = '0px';
        menu.style["width"] = lenght;
        But.style.marginLeft = '200px';
        show_ = true;
    }
}