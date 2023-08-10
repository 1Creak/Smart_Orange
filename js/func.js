import variable from './var.js';

let{
  counterSlider,
  counterText,
  maxCount,
  minCount,
  burgerButton,
  nav,
} = variable;

export let renderCount = () =>{
    counterText.innerHTML = `${counterSlider}/${maxCount}`;
}

export function counterChange (){
  if(this.num == '0'){
    counterSlider--; 
  }else{
    counterSlider++;
  }
  if(counterSlider > maxCount){
    counterSlider = minCount;
  }else if (counterSlider < minCount ){
    counterSlider = maxCount;
  }
  counterText.innerHTML = `${counterSlider}/${maxCount}`;
}
// !!!!! arg?
export function burger(){
  burgerButton.classList.toggle('active');
  nav.classList.toggle('show-nav');
}

export function scrollToLink(){
  nav.classList.remove('show-nav');
  burgerButton.classList.toggle('active');
};