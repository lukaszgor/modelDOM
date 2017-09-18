'use strict';
function pobierzImie(event){
 

    event.preventDefault();
}
var elements = document.querySelectorAll('input[type=text]');
console.log(elements);

elements.forEach( function (name, i) {
        console.log(name.value);
});

var chcecbox2=document.querySelectorAll("input[type=checkbox]");
function checkboxState(){
   if( document.getElementByClass(".nie").checked ==false ||
        document.getElementById("#no").checked == true;){
       
   }
    
}
