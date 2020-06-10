// Your code goes here
let html=document.querySelector("html");
//html.style.backgroundColor="blue";

let intro=document.querySelector(".intro");
intro.addEventListener('mouseover',event =>{
    intro.style.color="pink";

});

const input = document.querySelector('input');
const log = document.getElementById('log');

//keydown
input.addEventListener('keydown', logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
  e.stopPropagation();
}

input.addEventListener('focus',(e)=>{
e.target.style.backgroundColor="pink";
});

const text_content1=document.querySelectorAll('.text-content')[0];
console.log(text_content1);

const text_content2=document.querySelectorAll('.text-content')[1];
console.log(text_content2);
//wheel
text_content1.addEventListener("wheel", (e)=>{
    e.target.style.fontSize="7.5px";
});

//scroll
let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
  // Do something with the scroll position
  alert("scroll to end");
  stopPropagation();

  
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;
  e.stopPropagation();

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});
let input1=document.querySelector('.select');
input1.style.color="black";
input1.style.backgroundColor="purple";
//select
input1.addEventListener('select',(e)=>{
    const selection = e.target.value.substring(e.target.selectionStart, e.target.selectionEnd);
   // e.target.alert(`you have selected:${selection}`);
   // e.target.style.fontSize="2rem";
   console.log("text2 selct");
   e.target.style.backgroundColor="red";
   alert(selection);
   
});

//dbclick
text_content2.addEventListener('dblclick',(e)=>{

   alert("double click");

});

//load
window.addEventListener('load', (event) => {
  console.log('page is fully loaded');
});

//resize
window.addEventListener('resize',(e)=>{
  text_content2.textContent=window.innerWidth;
  text_content2.fontSize="7rem";
});


//preventdefault
let nav=document.querySelectorAll('a');
nav.forEach(Element=>{
  Element.addEventListener('click',(e)=>{
    e.preventDefault();
    alert("link click stopped");
    });
})

//drag/drop
var dragged;

/* events fired on the draggable target */
document.addEventListener("drag", function(event) {

}, false);

document.addEventListener("dragstart", function(event) {
  // store a ref. on the dragged elem
  dragged = event.target;
  // make it half transparent
  event.target.style.opacity = .5;
}, false);

document.addEventListener("dragend", function(event) {
  // reset the transparency
  event.target.style.opacity = "";
}, false);

/* events fired on the drop targets */
document.addEventListener("dragover", function(event) {
  // prevent default to allow drop
  event.preventDefault();
}, false);

document.addEventListener("dragenter", function(event) {
  // highlight potential drop target when the draggable element enters it
  if (event.target.className == "dropzone") {
    event.target.style.background = "purple";
  }

}, false);

document.addEventListener("dragleave", function(event) {
  // reset background of potential drop target when the draggable element leaves it
  if (event.target.className == "dropzone") {
    event.target.style.background = "";
  }

}, false);

document.addEventListener("drop", function(event) {
  // prevent default action (open as link for some elements)
  event.preventDefault();
  // move dragged elem to the selected drop target
  if (event.target.className == "dropzone") {
    event.target.style.background = "";
    dragged.parentNode.removeChild( dragged );
    event.target.appendChild( dragged );
  }
}, false);








