window.addEventListener('scroll',function(){
const nav=document.getElementById('main-nav');
if(window.scrollY>100){
nav.classList.add('scrolled');
}else{
nav.classList.remove('scrolled');
}
updateActiveLink();
revealSections();
});

function updateActiveLink(){
const sections=document.querySelectorAll('section');
const links=document.querySelectorAll('.nav-link');
let current='';

sections.forEach(sec=>{
if(window.scrollY>=sec.offsetTop-100){
current=sec.id;
}
});

links.forEach(link=>{
link.classList.remove('active');
if(link.getAttribute('href')===`#${current}`){
link.classList.add('active');
}
});
}

function revealSections(){
document.querySelectorAll('.section').forEach(sec=>{
if(sec.getBoundingClientRect().top<window.innerHeight-100){
sec.classList.add('revealed');
}
});
}

document.querySelectorAll('.nav-link').forEach(link=>{
link.addEventListener('click',e=>{
e.preventDefault();
document.querySelector(link.getAttribute('href')).scrollIntoView({behavior:'smooth'});
document.getElementById('nav-list').classList.remove('open');
});
});

document.getElementById('hamburger').addEventListener('click',function(){
this.classList.toggle('open');
document.getElementById('nav-list').classList.toggle('open');
});
