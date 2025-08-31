let num = 30.438257846764;

// console.log(Math.round(num));
// console.log(Math.ceil(num));
// console.log(Math.floor(num));
// console.log(Math.pow(3, 2));
// console.log(Math.abs(-76));
// console.log(Math.floor(num));
// console.log(Math.floor(num));

// console.log(Math.max(1, 2, 34, 4, 6, 434, 4.7, 93.6, 32, 34, 6, 5));

// console.log(Math.PI);
// console.log(Math.sin(Math.PI / 4));

// console.log(Math.random().toFixed(1) *( 100 + 1));
// console.log(Math.floor(Math.random() * ( 100 )));

const minima = 1
const maxima = 6

 document.getElementById('roll').onclick = 
function rand(){
   let randnum =  Math.floor(Math.random() * maxima ) + 1
   document.getElementById('rres').innerHTML = randnum
   document.getElementById('lodo').src = 'img/' + randnum + '.png'
}

