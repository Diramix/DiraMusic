// Автоскрытие пинлиста
/*--------------------------------------------*/
setInterval(() => {
    const pinsContent = document.querySelector('.PinsList_content__9RG7s');
    const layoutContent = document.querySelector('.DefaultLayout_content__md70Z');

    if (pinsContent && layoutContent) {
        layoutContent.style.right = pinsContent.children.length === 0 ? '8px' : '65px';
    }

// Улучшение разрешения картинки плеера
    const imgElements = document.querySelectorAll('[class*="PlayerBarDesktop_cover__IYLwR"]');

    imgElements.forEach(img => {
        if (img.src && img.src.includes('/100x100')) {
            img.srcset = img.srcset.replace(/\/100x100/g, '/1000x1000'); // Нормальное разрешение картинки плеера
        }
    });
}, 100);
/*--------------------------------------------*/