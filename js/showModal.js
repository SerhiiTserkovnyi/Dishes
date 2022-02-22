let popupBg = document.querySelector('.popup__bg');
let popup = document.querySelector('.popup');
let openPopupButtons = document.querySelectorAll('.open-popup');
let closePopupButton = document.querySelector('.close-popup');
openPopupButtons.forEach((element) => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup.classList.add('active');
    })
});
closePopupButton.addEventListener('click', () => {
    popupBg.classList.remove('active');
    popup.classList.remove('active');
});
document.addEventListener('click', (button) => {
    if (button.target === popupBg) {
        popupBg.classList.remove('active');
        popup.classList.remove('active');
    }
});