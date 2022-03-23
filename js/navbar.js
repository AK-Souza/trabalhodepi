function expandir() {
    var chk_ham = document.getElementById("chk-ham");
    if (chk_ham.checked) {
        document.getElementById('menu').style.transform = "none";
    } else {
        document.getElementById('menu').style.transform = "";
    }
}
function getWidth() {
    return document.body.clientWidth;
}

function expandirSearch() {
    if (getWidth() < 767) {
        document.getElementById("busca").style.width = "calc(100% - 65px)";
        document.getElementById("busca").style.position = "absolute";
        document.getElementById("busca").style.top = "0";
        document.getElementById("busca").style.right = "0";
        document.getElementById("group-nav").style.background = "var(--menu-background)";
        document.getElementById("chk-ham").style.pointerEvents = "none";
        document.getElementById("botao-ham").classList.add("close-active");
    }
}
function ocultarSearch() {
        document.getElementById("busca").style.width = "";
        document.getElementById("busca").style.position = "";
        document.getElementById("busca").style.top = "";
        document.getElementById("busca").style.right = "";
        document.getElementById("group-nav").style.background = "";
        document.getElementById("chk-ham").style.pointerEvents = "";
        document.getElementById("botao-ham").classList.remove("close-active");
}