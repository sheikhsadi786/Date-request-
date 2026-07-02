const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx5rL4X0tqKH-dMBDxnI8PYqSKx3R8JCFPWE-Memd8gBJplStw8IrdhIuAjDCFfKZl1/exec";

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const success = document.getElementById("success");

// No button run away
function moveNoButton() {
    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    noBtn.style.left = (Math.random() * maxX) + "px";
    noBtn.style.top = (Math.random() * maxY) + "px";
}

noBtn.addEventListener("mouseover", moveNoButton);

noBtn.addEventListener("touchstart", function(e){
    e.preventDefault();
    moveNoButton();
});

// Yes button
yesBtn.addEventListener("click", function () {

    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const place = document.getElementById("place").value;

    // Send data to Google Sheet (background)
    fetch(SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify({
            date: date,
            time: time,
            place: place
        })
    }).catch(err => console.log(err));

    // Show success immediately
    confetti({
        particleCount: 180,
        spread: 120,
        origin: { y: 0.6 }
    });

    success.style.display = "flex";

    setTimeout(() => {
        confetti({
            particleCount: 250,
            spread: 180
        });
    }, 700);

});
