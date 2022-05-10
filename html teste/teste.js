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



