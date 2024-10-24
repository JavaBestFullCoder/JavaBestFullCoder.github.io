document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('dynamicSelect');
    const signalText = document.getElementById('signalText');
    const typeText = document.getElementById('typeText')
    const timeText = document.getElementById('timeText')
    const getSignalButton = document.getElementById('getSignalButton');
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');

    // Показать контент после загрузки
    setTimeout(() => {
        loader.style.display = 'none';
        content.style.display = 'block';
    }, 2000); // Задержка 2 секунды для имитации загрузки

    // Данные для добавления в раскрывающийся список
    const data = ['Опция 1', 'Опция 2', 'Опция 3', 'Опция 4'];

    // Заполнение раскрывающегося списка
    data.forEach(item => {
        const option = document.createElement('option');
        option.value = item;
        option.textContent = item;
        select.appendChild(option);
    });

    // Обработчик нажатия на кнопку
    getSignalButton.addEventListener('click', () => {
        const randomValue = Math.floor(Math.random() * 56) + 40; // Генерация числа от 40 до 95
        signalText.textContent = `Успешность: ${randomValue}%`;
        signalText.style.color = randomValue < 60 ? 'red' : 'green';
    });
});











