const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const success = document.getElementById("success");

// Make the "No" button run away
function moveNoButton() {
    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", function(e){
    e.preventDefault();
    moveNoButton();
});

// When "Yes" is clicked
yesBtn.addEventListener("click", () => {

    // Confetti
    confetti({
        particleCount: 180,
        spread: 120,
        origin: { y: 0.6 }
    });

    // Show success screen
    success.style.display = "flex";

    // More confetti
    setTimeout(() => {
        confetti({
            particleCount: 250,
            spread: 180
        });
    }, 700);

});