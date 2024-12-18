/* 1 варик */
/* document.addEventListener('DOMContentLoaded', () => {
    const loadMoreButton = document.querySelector('#load-more button');
    const galleries = document.querySelectorAll('.gallery');
    const closeMoreButton = document.querySelector('#close-more');

    if (!loadMoreButton) {
        console.error('Кнопка не найдена! Проверьте селектор.');
        return;
    }

    let currentGalleryIndex = 0;

    loadMoreButton.addEventListener('click', () => {
        if (currentGalleryIndex < galleries.length - 1) {
            currentGalleryIndex++;
            galleries[currentGalleryIndex].style.display = 'grid';
            if (currentGalleryIndex === galleries.length - 1) {
                loadMoreButton.style.display = 'none';
            }
        } else {
            for (let i = 1; i < galleries.length; i++) {
                galleries[i].style.display = 'none';
            }
            currentGalleryIndex = 0;
            loadMoreButton.textContent = 'Загрузить еще';
        }
    });

    closeMoreButton.addEventListener('click', () => {
        for (let i = 1; i < galleries.length; i++) {
            galleries[i].style.display = 'none';
        }
        currentGalleryIndex = 0; // Сброс индекса галереи
        loadMoreButton.style.display = 'inline-flex'; // Возвращаем кнопку на место
        loadMoreButton.textContent = 'Загрузить еще'; // Восстанавливаем текст кнопки
    });
});
 */

document.addEventListener('DOMContentLoaded', () => {
    const loadMoreButton = document.querySelector('#load-more button');
    const galleries = document.querySelectorAll('.gallery');
    const closeMoreButton = document.querySelector('#close-more');

    if (!loadMoreButton) {
        console.error('Кнопка не найдена! Проверьте селектор.');
        return;
    }

    let currentGalleryIndex = 0;

    // Изначально скрываем closeMoreButton
    closeMoreButton.style.display = 'none';

    loadMoreButton.addEventListener('click', () => {
        if (currentGalleryIndex < galleries.length - 1) {
            currentGalleryIndex++;
            galleries[currentGalleryIndex].style.display = 'grid';

            // Показываем closeMoreButton, если открыта вторая галерея
            if (currentGalleryIndex === 1) {
                closeMoreButton.style.display = 'inline-flex';
            }

            if (currentGalleryIndex === galleries.length - 1) {
                loadMoreButton.style.display = 'none';
            }
        } else {
            for (let i = 1; i < galleries.length; i++) {
                galleries[i].style.display = 'none';
            }
            currentGalleryIndex = 0;
            loadMoreButton.textContent = 'Загрузить еще';
        }
    });

    closeMoreButton.addEventListener('click', () => {
        for (let i = 1; i < galleries.length; i++) {
            galleries[i].style.display = 'none';
        }
        currentGalleryIndex = 0; // Сброс индекса галереи
        loadMoreButton.style.display = 'inline-flex'; // Возвращаем кнопку на место
        loadMoreButton.textContent = 'Загрузить еще'; // Восстанавливаем текст кнопки

        // Скрываем closeMoreButton
        closeMoreButton.style.display = 'none';
    });
});
