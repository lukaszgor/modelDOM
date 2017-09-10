'use strict';
function pobierzImie(event){
 

    event.preventDefault();
}
var elements = document.querySelectorAll('input[type=text]');
console.log(elements);

elements.forEach( function (name, i) {
        console.log(name.value);
});