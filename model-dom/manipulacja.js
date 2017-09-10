'use strict';
var mainHeader =document.getElementById('main-header');
mainHeader.innerHTML="tresc naglowka";
var link =document.getElementsByClassName('link')[0];
link.href="http://akademia108.pl";
link.target="_blank";
link.className ="nowa klasa";
mainHeader.style.color="red";