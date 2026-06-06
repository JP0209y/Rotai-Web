// Quantity Buttons
const quantityContainer = document.querySelector('.quantity-selector');
const input = quantityContainer.querySelector('input');
const btns = quantityContainer.querySelectorAll('button');

btns[0].addEventListener('click', () => {
if (parseInt(input.value) > 1) {
input.value = parseInt(input.value) - 1;
}
});

btns[1].addEventListener('click', () => {
input.value = parseInt(input.value) + 1;
});