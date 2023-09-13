const hourse1=document.getElementById("hours")
const minutese1=document.getElementById("minutes")
const seconde1=document.getElementById("second")
const ame1=document.getElementById("am")

function updateclock(){
    let h=new Date().getHours()
    let m=new Date().getMinutes()
    let s=new Date().getSeconds()
    let ampm="am";
    if(h>12){
        h=h-12
        ampm="pm"
    }

    hourse1.innerText=h
    minutese1.innerText=m
    seconde1.innerText=s
    ame1.innerText=ampm
    setTimeout(()=>{
        updateclock()
    },1000)
}
updateclock()
