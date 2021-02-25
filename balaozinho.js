const balaoEl = document.querySelector("#balaozinho");
const arrMaksEl = document.querySelectorAll(".marcacao");
const botaoEl = document.querySelector("#definir-marcacao");
botaoEl.addEventListener("click", defMark);

balaoEl.style.display = "none";

for (markEl of arrMaksEl) {
    markEl.addEventListener("mouseover", inMark);
    markEl.addEventListener("mouseout", outMark);
    markEl.addEventListener("mousemove", segueMouse);
}

function segueMouse(e) {
    balaoEl.style.left = `${e.pageX}px`;
    balaoEl.style.top = `${e.pageY}px`;
}

function inMark(e) {
    let clicadoEl = e.currentTarget;
    balaoEl.style.display = "";

    let el = document.querySelector('#' + clicadoEl.id);
    
    balaoEl.innerHTML = '<h1>' + el.dataset.titulo + '</h1><p>' + el.dataset.conteudo + '</p>';
}
function outMark(e){
    balaoEl.innerHTML = "";
    balaoEl.style.display = "none";
}

function defMark(e) {
    let x = document.querySelector('#marcacao-x');
    let y = document.querySelector('#marcacao-y');
    let larg = document.querySelector('#marcacao-largura');
    let alt = document.querySelector('#marcacao-altura');
    arrMaksEl[0].style = "width: " + larg.value + "px; height: " + alt.value + "px; top: " + y.value + "px; left: " + x.value + "px;";
}