let modalMain = document.getElementById('modal_main');
let modalClose = Array.from(document.getElementsByClassName('modal__close_times'));
let showSuccess = document.getElementsByClassName('show-success');
let modalSuccess = document.getElementById('modal_success');

modalMain.classList.add('modal_active');
/*
modalClose[0].onclick = function() {
    modalMain.classList.remove('modal_active');
}
*/
showSuccess[0].onclick = function() {
    modalSuccess.classList.add('modal_active');
    modalMain.classList.remove('modal_active');
}
/*
modalClose[1].onclick = function() {
    modalSuccess.classList.remove('modal_active');
}
*/
for (let i = 0; i < modalClose.length; i++) {
    modalClose[i].onclick = function() {
        modalClose[i].closest('.modal').classList.remove('modal_active');
    }
}


