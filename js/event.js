import variable from "./var.js";
import { counterChange, burger, scrollToLink } from './func.js';


const { 
    arrowRight,
    arrowLeft,
    burgerButton,
    nav,
    navList
} = variable;
arrowLeft.addEventListener('click', {handleEvent: counterChange, num:0});
arrowRight.addEventListener('click', {handleEvent: counterChange, num:1});
burgerButton.addEventListener('click', {handleEvent: burger, btn:burgerButton, list:nav });
navList.forEach((item) => item.addEventListener('click', scrollToLink));

// () =>{
//     nav.classList.remove('show-nav');
//     burgerButton.classList.toggle('active');
// }))