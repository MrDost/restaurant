import './style.css';
import clearContent from './clear.js';
import renderDish from './kitchen.js';

const ulElement = document.querySelector('ul');

ulElement.addEventListener('click', (event) => {
    const targetLi = event.target.closest('li');
    if (targetLi) {
        const index = Array.from(ulElement.children).indexOf(targetLi);
        clearContent();
        if (index === 0) {
            renderDish('pizza');
        } else if (index === 1) {
            renderDish('burger');
        } else if (index === 2) {
            console.log(index);
            renderDish('sushi');
        }
    }
});

renderDish('pizza')