setInterval(() => {
    const pinsContent = document.querySelector('.PinsList_content__9RG7s');
    const layoutContent = document.querySelector('.DefaultLayout_content__md70Z');

    if (pinsContent && layoutContent) {
        layoutContent.style.right = pinsContent.children.length === 0 ? '8px' : '65px';
    }
}, 1000);