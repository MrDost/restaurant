import './style.css';
import clearContent from './clear.js';
import renderDish from './kitchen.js';

const buttons = document.querySelectorAll('li')
console.log(buttons);

buttons.forEach((item, index) => {
    item.addEventListener('click', () => {
        clearContent();
        if (index === 0) {
            renderDish('pizza');
        } else if (index === 1) {
            renderDish('burger');
        } else if (index === 2) {
            console.log(index);
            renderDish('sushi');
        }
    });
});

renderDish('sushi')