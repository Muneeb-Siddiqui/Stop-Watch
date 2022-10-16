var min=00 ;
var sec = 00;
var msec = 00;
var mint = document.getElementById("min");
var secd = document.getElementById("sec");
var msecd = document.getElementById("msec");
var interval ;

function start(){
startbtn.disabled=true
pausebtn.disabled=false
resetbtn.disabled=false
interval=setInterval(timer,100)
}
function pause(){
startbtn.disabled=false
pausebtn.disabled=true
resetbtn.disabled=false
clearInterval(interval)
}
function reset(){
    min=00 ;
    sec = 00;
    msec = 00;
    msecd.innerHTML=msec;
    secd.innerHTML=sec;
    mint.innerHTML=min
    
startbtn.disabled=false
pausebtn.disabled=false
resetbtn.disabled=false
pause()
}
function timer(){
    msec++;
    msecd.innerHTML=msec;

    if(msec == 10){
        sec++;
        secd.innerHTML=sec;
        msec = 0;
        
            if(sec == 59){
                min++;
                sec = 0;
                mint.innerHTML=min
    
            }

    }
}
