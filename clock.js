

const secDiv = document.querySelector('#ss')
const minDiv = document.querySelector('#mm')
const hourDiv = document.querySelector('#hh')

const tarix = document.querySelector('#tarix');

const digitalSaniyye = document.querySelector('#dSan');
const digitalDeqiqe = document.querySelector('#dDeq');
const digitalSaat = document.querySelector('#dSaat');


setInterval( () => {
    let date = new Date()

    // let sec = date.getSeconds() / 60;
    // let min = date.getMinutes() / 60;
    // let hour = date.getHours() / 12;

    // secDiv.style.transform = "rotate("+ (sec * 360) +"deg)"
    // minDiv.style.transform = "rotate("+ (min * 360) +"deg)"
    // hourDiv.style.transform = "rotate(" + (hour * 360) +"deg)"


    let hour = date.getHours() * 30;
    let min = date.getMinutes() * 6;
    let sec = date.getSeconds() * 6;
    
    hourDiv.style.transform = `rotate(${hour + (min/12)}deg)`;
    minDiv.style.transform = `rotate(${min}deg)`
    secDiv.style.transform = `rotate(${sec}deg)`


    tarix.innerHTML = new Date().getDate();
    digitalSaat.innerHTML = new Date().getHours();
    digitalDeqiqe.innerHTML = new Date().getMinutes();
    digitalSaniyye.innerHTML = new Date().getSeconds();
})