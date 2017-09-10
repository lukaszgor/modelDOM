'use strict';
var istiejacyWezel =document.getElementById('parFirst').children[3];
console.log(document.getElementById('parFirst').children);
console.log(istiejacyWezel);
var newElement =document.createElement('p');
//console.log(newElement);

var newElementContent =document.createTextNode('to jest nowy paragraf');
//console.log(newElementContent);
newElement.appendChild(newElementContent);
console.log(newElement);
istiejacyWezel.appendChild(newElement);
istiejacyWezel.removeChild(newElement);

var parFirstDiv =document.getElementById('parFirst');
//console.log(parFirstDiv);
parFirstDiv.replaceChild(newElement, istiejacyWezel); //link to paragraf

var alllink =document.querySelectorAll('a');
console.log(alllink);
for (var i=0 ; i<alllink.length;i++){
    console.log(alllink[i]);

var br=document.createElement('br');
alllink[i].parentNode.insertBefore(br,alllink[i].nextSibling);
alllink[i].removeAttribute('class');
    }