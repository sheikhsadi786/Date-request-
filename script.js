const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx5rL4X0tqKH-dMBDxnI8PYqSKx3R8JCFPWE-Memd8gBJplStw8IrdhIuAjDCFfKZl1/exec";

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const success = document.getElementById("success");

function moveNoButton() {
    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    noBtn.style.left = Math.random() * maxX + "px";
    noBtn.style.top = Math.random() * maxY + "px";
}

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

yesBtn.addEventListener("click", async () => {

    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const place = document.getElementById("place").value;

    await fetch(SCRIPT_URL,{
        method:"POST",
        body:JSON.stringify({
            date,
            time,
            place
        })
    });

    confetti({
        particleCount:200,
        spread:120
    });

    success.style.display="flex";

});
