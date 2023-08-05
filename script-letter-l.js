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




document.addEventListener('DOMContentLoaded', function () {
    onLetterClick();
});

function onLetterClick() {
    const popupContainer = document.querySelector('.popup-container');
    const popupWord = document.querySelector('.popup-word');
    popupWord.textContent = "egacy";
}

document.addEventListener('DOMContentLoaded', function () {
    // Other cursor code ...

    // Add event listener for scrolling
    document.addEventListener('scroll', handleScroll);

    function handleScroll() {
        // Get the distance scrolled from the top
        const scrollDistance = window.scrollY;

        // Define the fade threshold and fade distance
        const fadeThreshold = 5; // The distance from the top when the fade starts
        const fadeDistance = 100; // The distance over which the fade occurs

        // Calculate the opacity based on scroll distance
        let opacity = 1 - Math.max(0, Math.min(1, (scrollDistance - fadeThreshold) / fadeDistance));

        // Update the opacity of the popup-container1
        const popupContainer = document.querySelector('.popup-container1');
        popupContainer.style.opacity = opacity.toFixed(2);
    }

    // Call the handleScroll function to set the initial opacity
    handleScroll();

    // Other click animation code ...
});

const clickableSpan = document.querySelector('.home-butt');

// Add a click event listener to the span
clickableSpan.addEventListener('click', () => {
    // Add the fadeOutAnimation class to the body
    document.body.classList.add('fadeOutAnimation');
    document.body.classList.add('overlay');
    // Wait for one second (1000 milliseconds) before redirecting
    setTimeout(() => {
        // Redirect to index.html
        window.location.href = 'index.html';
    }, 900);
});

