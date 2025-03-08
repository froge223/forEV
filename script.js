const button = document.getElementById('congratButton');
const message = document.getElementById('message');

button.addEventListener('click', () => {
    button.style.display = 'none'; // Скрываем кнопку
    message.classList.remove('hidden'); // Показываем сообщение и картинку
});