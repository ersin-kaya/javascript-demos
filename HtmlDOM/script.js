// getElementById
// console.log("Reading with getElementById");
// var firstParagraph = document.getElementById("intro1");
// var message = document.getElementById("message");
// message.innerHTML = "Message : " + firstParagraph.innerHTML;
// -----------

// getElementsByTagName
// var allUnorderedLists = document.getElementsByTagName("ul");
// var unorderedList = allUnorderedLists[0];

// var allListItems = unorderedList.getElementsByTagName("li");

// for (var i = 0; i < allListItems.length; i++) {
//   console.log(allListItems[i].firstChild.data);
// }
// -----------

// getElementsByClassName
// var allItemsWithClassName = document.getElementsByClassName("intro1");
// console.log(allItemsWithClassName[0].innerHTML);
// -----------

// querySelectorAll
// var allItemsWithSelector = document.querySelectorAll("p.intro2");
// var thirdParagraph = document.querySelector("p.intro3").innerHTML;
// console.log(allItemsWithSelector[0].innerHTML);
// console.log(thirdParagraph);
// -----------

// getElementsByName
// var names = document.getElementsByName("customerName");
// console.log(names[0].value);
// -----------

// addEventListener & removeEventListener
// document.getElementById("tryIt").addEventListener("click", changeColor);

// function changeColor() {
//   document.getElementById("intro1").style.backgroundColor = "blue";
// }

// document.getElementById("tryIt").removeEventListener("click", changeColor);
// -----------

// WorkingWithNodes
// var nodeText = document.getElementById("nodes").childNodes[0].nodeValue;
// console.log(nodeText);

var heading = document.createElement("h2");
var node = document.createTextNode("Hello JavaScript");
heading.appendChild(node);

var div1 = document.getElementById("div1");
var p2 = document.getElementById("p2");
div1.insertBefore(heading, p2);

console.log("Removing p2");
div1.removeChild(p2);

console.log("Replacing");
var heading2 = document.createElement("h1");
var node2 = document.createTextNode("This is a replacement");
heading2.appendChild(node2);

var p1 = document.getElementById("p1");
div1.replaceChild(heading2, p1);
// -----------
