  
"use strict";

// Burger Meniu animation and VAR.
//--------------------------------------------------
let hidden__menu = document.querySelector('.hidden__menu');
let navigation = document.querySelector('.nav');

hidden__menu.addEventListener('click', () => {

    if (navigation.className == 'nav on') {
        navigation.classList.remove('on');
    } else {
        navigation.classList.add('on');
    }

});

