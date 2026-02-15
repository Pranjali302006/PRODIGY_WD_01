let timer;
let seconds=0;
let running=false;

function format(t){
let h=Math.floor(t/3600);
let m=Math.floor((t%3600)/60);
let s=t%60;
return `${pad(h)}:${pad(m)}:${pad(s)}`;
}

function pad(n){
return n<10?"0"+n:n;
}

function start(){
if(!running){
running=true;
timer=setInterval(()=>{
seconds++;
document.getElementById("display").innerText=format(seconds);
},1000);
}
}

function pause(){
running=false;
clearInterval(timer);
}

function reset(){
pause();
seconds=0;
document.getElementById("display").innerText="00:00:00";
document.getElementById("laps").innerHTML="";
}

function lap(){
if(seconds>0){
let li=document.createElement("li");
li.innerText=format(seconds);
document.getElementById("laps").appendChild(li);
}
}
