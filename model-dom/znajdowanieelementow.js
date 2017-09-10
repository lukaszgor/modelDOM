'use strict';
var parFirst =document.getElementById('parFirst');
console.log(parFirst);
var linki=document.getElementsByClassName('superlink');
console.log(linki);
var linkPoTagu =document.getElementsByTagName('a');
console.log(linkPoTagu);
var divPoID =document.querySelector('#parSecond');      //tylko jeden pobiera
console.log(divPoID);
var pierwszyLinkPoSelektorze =document.querySelector('.superlink');
console.log(pierwszyLinkPoSelektorze);
var linkPoSelektorze =document.querySelectorAll('.superlink');
console.log(linkPoSelektorze);
linkPoSelektorze.forEach(function(link,i){
    console.log(link.outerHTML);
});