//JavaScript

"use strict";

//6.1
document.getElementsByTagName("div")[0].setAttribute("class", "active");

//6.2
var karen = document.getElementsByTagName("div")[2];
karen.parentNode.removeChild(karen);

//6.3
document.getElementsByTagName("div")[1].setAttribute("id", "replacetext");
var gunJak = document.getElementById("replacetext");
var text = gunJak.firstChild.nodeValue;
text = text.replace('Gunnar', 'Jakob');
gunJak.firstChild.nodeValue = text;

//6.5
/* innerHTML skilar öllu í einum streng frá JavaScript yfir í Html skjalið á meðan DOM manipulation getur skilað miklu meira, 
þæginlega þá þegar þú ert með stærri kóða, DOM manipulation notar líka þrjú skref til að skila kóða. Þau eru createElement(), createTextNode() og appendChild() */


//6.6
var newEl = document.createElement('main');
var div1 = document.createElement('div');
div1.className = "pizza";
newEl.appendChild(div1);

var div2 = document.createElement('div');
div2.className = "pizzaName";
var div2Text = document.createTextNode('Pizza with tons of pepperoni');
div2.appendChild(div2Text);
div1.appendChild(div2);

var div3 = document.createElement('div');
div3.className = "size";
var div3Text = document.createTextNode('L');
div3.appendChild(div3Text);
div1.appendChild(div3);

var div4 = document.createElement('div');
div4.className = "price";
var div4Text = document.createTextNode('2000');
div4.appendChild(div4Text);
div1.appendChild(div4);

var div5 = document.createElement('div');
div5.className = "toppingContainer";
div1.appendChild(div4);

var span1 = document.createElement('SPAN');
span1.className = "topping";
var span1Text = document.createTextNode("pepperoni &");
span1.appendChild(span1Text);
div5.appendChild(span1);

var span2 = document.createElement('SPAN');
span2.className = "topping";
var span2Text = document.createTextNode("pepperoni &");
span2.appendChild(span2Text);
div5.appendChild(span2);

var span3 = document.createElement('SPAN');
span3.className = "topping";
var span3Text = document.createTextNode("Cheddar");
span3.appendChild(span3Text);
div5.appendChild(span3);

document.body.appendChild(newEl);

//6.7
/* Það er þegar einhver setur vírus á jacascript vefsíðu og ræðst á notanda