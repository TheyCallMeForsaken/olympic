const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');
const mobile1 = document.querySelector('header .logo');
const mobile3 = document.querySelector('.text h4');
const mobile15 = document.querySelector('.menu');
const mobile16 = document.querySelector('form');
const mobile17 = document.querySelector('.input-group');
const mobile18 = document.querySelector('input');
const mobile19 = document.querySelector('textarea');
const mobile20 = document.querySelector('label');
const mobile21 = document.querySelector('button');
const mobile22 = document.querySelector('.input-group2');
const mobile23 = document.querySelector('.input-group3');
const mobile24 = document.querySelector('.input-group2 input');
const mobile25 = document.querySelector('.input-group2 label');
const mobile26 = document.querySelector('.input-group3 label');
const mobile27 = document.querySelector('.input-group input');

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
console.log(`${isMobile() ? mobile3.classList.toggle('mobile') : 'Not Mobile'}`);
console.log(`${isMobile() ? mobile22.classList.toggle('mobile') : 'Not Mobile'}`);
console.log(`${isMobile() ? mobile23.classList.toggle('mobile') : 'Not Mobile'}`);
console.log(`${isMobile() ? mobile24.classList.toggle('mobile') : 'Not Mobile'}`);
console.log(`${isMobile() ? mobile25.classList.toggle('mobile') : 'Not Mobile'}`);
console.log(`${isMobile() ? mobile26.classList.toggle('mobile') : 'Not Mobile'}`);
console.log(`${isMobile() ? mobile27.classList.toggle('mobile') : 'Not Mobile'}`);
console.log(`${isMobile() ? mobile21.classList.toggle('mobile') : 'Not Mobile'}`);
console.log(`${isMobile() ? mobile20.classList.toggle('mobile') : 'Not Mobile'}`);
console.log(`${isMobile() ? mobile18.classList.toggle('mobile') : 'Not Mobile'}`);
console.log(`${isMobile() ? mobile19.classList.toggle('mobile') : 'Not Mobile'}`);
console.log(`${isMobile() ? mobile17.classList.toggle('mobile') : 'Not Mobile'}`);
console.log(`${isMobile() ? mobile16.classList.toggle('mobile') : 'Not Mobile'}`);
