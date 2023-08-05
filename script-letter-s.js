document.addEventListener('DOMContentLoaded', function () {
    const cursor = document.querySelector('.custom-cursor');
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    let isClicked = false;

    document.addEventListener('mousemove', function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function showClickAnimation() {
        if (!isClicked) {
            isClicked = true;
            cursor.style.left = mouseX + 'px';
            cursor.style.top = mouseY + 'px';
            cursor.style.animation = 'clickAnimation 0.4s ease-out';

            // Reset the cursor to its default state after the animation
            cursor.addEventListener('animationend', function () {
                cursor.style.animation = 'breatheCursor 2s infinite';
                isClicked = false;
            });
        }
    }

    document.addEventListener('click', showClickAnimation);

    function updateCursor() {
        const delay = 50; // Adjust this value to control the delay effect (in milliseconds)
        const easing = 0.1; // Adjust this value for smoother movement (lower values: smoother but slower)

        const dx = mouseX - currentX;
        const dy = mouseY - currentY;

        currentX += dx * easing;
        currentY += dy * easing;

        cursor.style.left = currentX + 'px';
        cursor.style.top = currentY + 'px';

        requestAnimationFrame(updateCursor);
    }

    updateCursor();

    // Add the initial breathing animation to the cursor
    cursor.style.animation = 'breatheCursor 2s infinite';
});

document.addEventListener('DOMContentLoaded', function () {
    onLetterClick();
});


function onLetterClick() {
    const popupContainer = document.querySelector('.popup-container');
    const popupWord = document.querySelector('.popup-word');
    popupWord.textContent = "howcase";
    popupContainer.style.display = 'block';
}
