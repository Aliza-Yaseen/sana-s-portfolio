document.addEventListener('DOMContentLoaded', () => {
    const dynamicText = document.getElementById('dynamic-text');
    const texts = ["Sana Riaz", "Defending Rights", "Shaping Justice."];
    let index = 0;

    setInterval(() => {
        dynamicText.textContent = texts[index];
        index = (index + 1) % texts.length;
    }, 2000); // Change text every 2 seconds
});


// ball js

const ball = document.getElementById('ball');

// Function to update the position of the ball
function updateBallPosition(event) {
    ball.style.left = `${event.clientX - ball.offsetWidth / 2}px`;
    ball.style.top = `${event.clientY - ball.offsetHeight / 2}px`;
    ball.style.opacity = 1; // Make the ball visible
}

console.log(`${event.clientX}`);

// Function to hide the ball when the cursor leaves the window
function hideBall() {
    ball.style.opacity = 0;
}

// Attach event listeners to the document
document.addEventListener('mousemove', updateBallPosition);
document.addEventListener('mouseleave', hideBall);