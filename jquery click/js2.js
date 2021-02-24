var b1 = document.querySelector('#a1');
var b2 = document.querySelector('#a2');
var b3 = document.querySelector('#a3');
var b4 = document.querySelector('#a4');


b1.addEventListener('click',function (ev) {
    alert("Don't Click me");
    b1.classList.add('black');
});
b2.addEventListener('click',function (ev) {
    alert("Hey Don't click me");
    b2.classList.add('black');
});
b3.addEventListener('click',function (ev) {
    alert("Damnnnnn, why always click me");
    b3.classList.add('black');
});
b4.addEventListener('click',function (ev) {
    alert("NOOOO! Don't click me");
    b4.classList.add('black');
});