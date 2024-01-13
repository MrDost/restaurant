const fridge = [];


function createDish (name, description, image) {
    return { name, description, image }
}

function fillFridge() {
    fridge.push(createDish('pizza1', 'Tasty Pizza really tasty and cheap come try it', './images/1.jpg'));
    fridge.push(createDish('pizza2', 'Tasty Pizza really tasty and cheap come try it', './images/2.jpg'));
    fridge.push(createDish('pizza3', 'Tasty Pizza really tasty and cheap come try it', './images/3.jpg'));
    fridge.push(createDish('pizza4', 'Tasty Pizza really tasty and cheap come try it', './images/4.jpg'));
    fridge.push(createDish('pizza5', 'Tasty Pizza really tasty and cheap come try it', './images/5.jpg'));
    fridge.push(createDish('pizza6', 'Tasty Pizza really tasty and cheap come try it', './images/6.jpg'));
    fridge.push(createDish('burger1', 'Tasty Burger really tasty and cheap come try it', './images/7.jpeg'));
    fridge.push(createDish('burger2', 'Tasty Burger really tasty and cheap come try it', './images/8.jpg'));
    fridge.push(createDish('burger3', 'Tasty Burger really tasty and cheap come try it', './images/9.png'));
    fridge.push(createDish('burger4', 'Tasty Burger really tasty and cheap come try it', './images/10.jpg'));
    fridge.push(createDish('sushi1', 'Tasty Sushi really tasty and cheap come try it', './images/11.jpg'))
    fridge.push(createDish('sushi2', 'Tasty Sushi really tasty and cheap come try it', './images/12.jpg'))
    fridge.push(createDish('sushi3', 'Tasty Sushi really tasty and cheap come try it', './images/13.jpg'))
}

fillFridge();

function renderDish(dishType) {
    fridge.forEach(item => {
        if (item.name.includes(dishType)) {
            const content = document.querySelector('#content');
            const dish = document.createElement('div');
            const backgroundImage = document.createElement('div');
            const overlay = document.createElement('div');
            const name = document.createElement('div');
            const descr = document.createElement('div');
            dish.classList.add('dish');
            backgroundImage.classList.add('background-image');
            overlay.classList.add('overlay');
            name.classList.add('name');
            descr.classList.add('descr');
            name.innerText = item.name;
            descr.innerText = item.description;
            backgroundImage.style.background = `url(${item.image}) center/cover`;
            dish.appendChild(backgroundImage);
            dish.appendChild(overlay);
            dish.appendChild(name);
            dish.appendChild(descr);
            content.appendChild(dish);
        }
    });
}

export default renderDish;



