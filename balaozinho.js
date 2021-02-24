function inMark(e) {
    let m = e.currentTarget;
    let divEl = m.childNode;
    balaoEl.innerHTML = "Qualquer coisa";
    balaoEl.style.display="";
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