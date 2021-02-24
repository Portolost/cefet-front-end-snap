function inMark(e) {
    let clicadoEl = e.currentTarget;
    let el = document.querySelector('#' + clicadoEl.id);
    balaoEl.innerHTML = '<h1>' + el.dataset.titulo + '</h1>';
    balaoEl.style.display = "";
    
}

function outMark(e) {
    balaoEl.innerHTML = "";
    balaoEl.style.display="";
}

const balaoEl = document.querySelector("#balaozinho");
const arrMaksEl = document.querySelectorAll(".marcacao");

for (markEl of arrMaksEl) {
    markEl.addEventListener("mouseover", inMark);
    markEl.addEventListener("mouseout", outMark);
}