// QUALITY_SETTINGS_CONTEXT_MENU color
function applyBackgroundColor() {
    const elementWithColor = document.querySelector("[style*='--player-average-color-background']");

    if (elementWithColor) {
        const backgroundColor = getComputedStyle(elementWithColor).getPropertyValue('--player-average-color-background');

        const targetElements = document.querySelectorAll('[data-test-id="QUALITY_SETTINGS_CONTEXT_MENU"]');

        targetElements.forEach(element => {
            element.style.backgroundColor = backgroundColor;
        });
    }

    setTimeout(applyBackgroundColor, 100);
}

applyBackgroundColor();