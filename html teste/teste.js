const { homedir } = require("os");

function teste() {
    let text = document.getElementById("name2");
    if (text.classList.contains("name_teste")) {
        text.style.display = 'block';
        document.getElementById("name2").textContent = `teste`;
        text.classList.remove("name_teste")
    } else if (!text.classList.contains("name_teste")) {
        text.classList.add("name_teste")
        text.style.display = 'none';
    }
}

//----------------------------------------//
function modal() {
    let modal = document.querySelector('.modal1');
    modal.style.display = 'block';
}
function fechar() {
    let modal = document.querySelector('.modal1');
    modal.style.display = 'none';
}
//----------------------------------------//
function modal2() {
    document.getElementById("name").textContent = `teste`;
    let modal2 = document.querySelector('.modal2');
    modal2.style.display = 'block';
}
function fechar2() {
    let modal2 = document.querySelector('.modal2');
    modal2.style.display = 'none';
}
//----------------------------------------//

function open_pag_1() {
    trocaVisualizacao(1);
}
function open_pag_2() {
    trocaVisualizacao(2);
    /*
    let pag1Styles = window.getComputedStyle(document.querySelector('#pag_2'));

    if (pag1Styles.display === "none") {
        document.getElementById("pag_2").style.setProperty('display', 'block');

        document.getElementById("pag_1").style.setProperty('display', 'none');
        document.getElementById("pag_3").style.setProperty('display', 'none');
    }*/
}
function open_pag_3() {
    trocaVisualizacao(3);
}

function open_home() {
    trocaVisualizacao("home");
}

function trocaVisualizacao(alvo) {
    let pagAlvo = window.getComputedStyle(document.querySelector('#pag_' + alvo));

    if (pagAlvo.display === "none") {
        document.getElementById("pag_" + alvo).style.setProperty('display', 'block');
    }

    switch (alvo) {

        case 1:
            document.getElementById("pag_home").style.setProperty('display', 'none');
            document.getElementById("pag_2").style.setProperty('display', 'none');
            document.getElementById("pag_3").style.setProperty('display', 'none');
            break;
        case 2:
            document.getElementById("pag_home").style.setProperty('display', 'none');
            document.getElementById("pag_1").style.setProperty('display', 'none');
            document.getElementById("pag_3").style.setProperty('display', 'none');
            break;
        case 3:
            document.getElementById("pag_home").style.setProperty('display', 'none');
            document.getElementById("pag_1").style.setProperty('display', 'none');
            document.getElementById("pag_2").style.setProperty('display', 'none');
            break;
        case "home":
            document.getElementById("pag_home").style.setProperty('display', 'block');
            document.getElementById("pag_1").style.setProperty('display', 'none');
            document.getElementById("pag_2").style.setProperty('display', 'none');
            document.getElementById("pag_3").style.setProperty('display', 'none');
            break;
    }
}
