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
}

input.addEventListener('focus',(e)=>{
e.target.style.backgroundColor="pink";
});

const text_content1=document.querySelectorAll('.text-content')[0];
console.log(text_content1);

const text_content2=document.querySelectorAll('.text-content')[1];
console.log(text_content2);

text_content1.addEventListener("wheel", (e)=>{
    e.target.style.fontSize="7.5px";
});

let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
  // Do something with the scroll position
  //alert("scroll pos");
  
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});

//select
text_content2.addEventListener('select',(e)=>{
    const selection = e.target.value.substring(e.target.selectionStart, e.target.selectionEnd);
   // e.target.alert(`you have selected:${selection}`);
   // e.target.style.fontSize="2rem";
   console.log("text2 selct");
   e.target.style.backgroundColor="red";
});


text_content2.addEventListener('dblclick',(e)=>{

    e.target.alert("double cloc");

});





