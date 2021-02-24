function change(){
    let mode = document.querySelector('.white');
    const h1 = document.querySelector('h1');
    const span = document.querySelector('span');
    const h2 = document.querySelector('h2');
    nightmode=!nightmode;
    if(nightmode){
        mode.classList.remove('gray');
        h1.textContent="Good mornning";
        h2.textContent="This is day time!";
        span.style.color="red";
    }
    else{
        mode.classList.add('gray');
        h1.textContent="Good night";
        h2.textContent="This is night time!";
        span.style.color="blue";
    }
}


let nightmode = true;
let ch = document.querySelector('button');
ch.addEventListener('click',change);
