const text="Happy Birthday Yashika ❤️";
const typing=document.getElementById("typing");
let i=0;

function type(){
if(i<text.length){
typing.innerHTML+=text.charAt(i);
i++;
setTimeout(type,100);
}
}

window.onload=()=>{
setTimeout(type,700);
}

const startBtn=document.getElementById("startBtn");
const letter=document.getElementById("letterSection");

startBtn.onclick=()=>{
letter.classList.add("show");
}

document.getElementById("nextBtn").onclick = () => {
    window.location.href = "page2.html";
}
