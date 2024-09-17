// QUALITY_SETTINGS_CONTEXT_MENU color
const css = `
:root {
    --background-color: #000;
}

[data-test-id="QUALITY_SETTINGS_CONTEXT_MENU"] {
    background-color: var(--background-color);
}
`;

const style = document.createElement('style');
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);

function applyBackgroundColor() {
    const elementWithColor = document.querySelector("[style*='--player-average-color-background']");

    if (elementWithColor) {
        const backgroundColor = getComputedStyle(elementWithColor).getPropertyValue('--player-average-color-background');
        document.documentElement.style.setProperty('--background-color', backgroundColor);
    }

    setTimeout(applyBackgroundColor, 1000);
}

applyBackgroundColor();