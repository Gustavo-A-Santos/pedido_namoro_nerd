function respostaSim() {
    document.querySelector(".question-box2").style.display = "block";
    document.querySelector(".question-box").style.display = "none";
}

const noBtn = document.getElementById('btn-nao');
const questionBox = document.querySelector('.question-box');

noBtn.addEventListener('mousemove', moveNoBtn);

function moveNoBtn() {
    const x = Math.floor(Math.random() * questionBox.clientWidth);
    const y = Math.floor(Math.random() * questionBox.clientHeight);
    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
    document.querySelector(".negar").style.display = "block";
    document.getElementById("btn-sim").style.padding = "20px 30px";
    document.getElementById("btn-sim").style.fontSize = "30px";
    
}


