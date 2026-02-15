const cells=document.querySelectorAll(".cell");
const status=document.getElementById("status");

let current="X";
let running=true;

const wins=[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
];

cells.forEach(cell=>{
cell.addEventListener("click",()=>{
if(cell.innerHTML=="" && running){
cell.innerHTML=current;
checkWin();
current=current==="X"?"O":"X";
status.innerText=`Player ${current} Turn`;
}
});
});

function checkWin(){
wins.forEach(w=>{
let a=cells[w[0]].innerHTML;
let b=cells[w[1]].innerHTML;
let c=cells[w[2]].innerHTML;

if(a!="" && a===b && b===c){
status.innerText=`Player ${a} Wins!`;
running=false;
}
});

let draw=true;
cells.forEach(cell=>{
if(cell.innerHTML=="") draw=false;
});

if(draw && running){
status.innerText="Draw!";
running=false;
}
}

function resetGame(){
cells.forEach(cell=>cell.innerHTML="");
current="X";
running=true;
status.innerText="Player X Turn";
}
