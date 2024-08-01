const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');
const mobile1 = document.querySelector('header .logo');
const mobile2 = document.querySelector('.text h2');
const mobile3 = document.querySelector('.text h4');
const mobile4 = document.querySelector('.text p');
const mobile5 = document.querySelector('.text a');
const mobile6 = document.querySelector('.text2');
const mobile7 = document.querySelector('.button');
const mobile8 = document.querySelector('.button2');
const mobile9 = document.querySelector('.button3');
const mobile10 = document.querySelector('.button4');
const mobile11 = document.querySelector('.button5');
const mobile12 = document.querySelector('.button6');
const mobile13 = document.querySelector('.button7');
const mobile14 = document.querySelector('.button8');
const mobile15 = document.querySelector('.menu');

function input () {
  window.open("aboutme.html","_self");
}

function input2 () {
  window.open("https://javahelp.netlify.app/");
}

function input3 () {
  window.open("https://safeclass.tk/");
}

function input4 () {
  window.open("https://devpost.com/software/safe-form/");
}

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
})

const isMobile = function(){
  const match = window.matchMedia('(pointer:coarse)');
  return (match && match.matches);
}
console.log(`${isMobile() ? mobile15.classList.toggle('mobile') : 'Not Mobile'}`);
console.log(`${isMobile() ? mobile1.classList.toggle('mobile') : 'Not Mobile'}`);
console.log(`${isMobile() ? mobile2.classList.toggle('mobile') : 'Not Mobile'}`);
console.log(`${isMobile() ? mobile3.classList.toggle('mobile') : 'Not Mobile'}`);
console.log(`${isMobile() ? mobile4.classList.toggle('mobile') : 'Not Mobile'}`);
console.log(`${isMobile() ? mobile5.classList.toggle('mobile') : 'Not Mobile'}`);
console.log(`${isMobile() ? mobile6.classList.toggle('mobile') : 'Not Mobile'}`);
console.log(`${isMobile() ? mobile7.classList.toggle('mobile') : 'Not Mobile'}`);
console.log(`${isMobile() ? mobile8.classList.toggle('mobile') : 'Not Mobile'}`);
console.log(`${isMobile() ? mobile9.classList.toggle('mobile') : 'Not Mobile'}`);
console.log(`${isMobile() ? mobile10.classList.toggle('mobile') : 'Not Mobile'}`);
console.log(`${isMobile() ? mobile11.classList.toggle('mobile') : 'Not Mobile'}`);
console.log(`${isMobile() ? mobile12.classList.toggle('mobile') : 'Not Mobile'}`);
console.log(`${isMobile() ? mobile13.classList.toggle('mobile') : 'Not Mobile'}`);
console.log(`${isMobile() ? mobile14.classList.toggle('mobile') : 'Not Mobile'}`);
