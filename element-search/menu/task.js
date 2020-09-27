let menuLink = Array.from(document.getElementsByClassName('menu__link'));
let menuSub = Array.from(document.getElementsByClassName('menu_sub'));

for (let link of menuLink) {

    link.onclick = function () {

        if (!link.parentElement.querySelector('.menu_sub').classList.contains('menu_active')) {
            link.parentElement.querySelector('.menu_sub').classList.add('menu_active');
        } 

        // else {
        //     menuSub.querySelectorAll('.menu_active').classList.remove('menu_active');
        // }


        if (link.closest('.menu_main')) {
            return false
        }
    }
}


