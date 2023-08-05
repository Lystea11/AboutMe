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
        const easing = 0.2; // Adjust this value for smoother movement (lower values: smoother but slower)

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


function animateLetter(letter) {
    const letterContainers = {
        'L': document.querySelector('.L-container'),
        'S': document.querySelector('.S-container'),
        'B': document.querySelector('.B-container'),
    };

    const lettersToHide = Object.values(letterContainers).filter((l) => l !== letterContainers[letter]);

    letterContainers[letter].classList.add('animate-glide');
    lettersToHide.forEach((l) => {
        l.style.opacity = 0;
    });

    setTimeout(() => {
        switch (letter) {
            case 'L':
                window.location.href = 'L-letter.html';
                break;
            case 'S':
                window.location.href = 'S-letter.html';
                break;
            case 'B':
                window.location.href = 'B-letter.html';
                break;
            default:
                break;
        }
    }, 500);
}
