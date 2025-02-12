const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("romanticMessage");

yesBtn.addEventListener("click", () => {
    document.querySelector(".valentine-box").style.display = "none"; // Hide question box
    message.classList.remove("hidden"); // Show romantic message
    createHearts(); // Start heart animation
});
let moveRight = true;
noBtn.addEventListener("mouseover",()=>{
    // //const x = (0.2+Math.random()*0.5) * (window.innerWidth - noBtn.clientWidth);
    // const x = Math.floor(Math.random() * (450 - 300 + 1)) + 300;

    // // const y = (0.3+Math.random()*0.5) * (window.innerHeight - noBtn.clientHeight);
    // // while (y < 100){

    // //     y = (0.5+Math.random()*0.5) * (window.innerHeight - noBtn.clientHeight);
    // // }

    // noBtn.style.left  = x;
    // console.log(x);
            let newX = moveRight ? 250 : 120; // Toggle between positions
            noBtn.style.left = `${newX}px`;
            moveRight = !moveRight; // Toggle direction


    });


function createHearts() {
    for (let i = 0; i < 20; i++) {
        let heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.classList.add("heart");
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = Math.random() * window.innerHeight + "px";
        heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
        document.body.appendChild(heart);

        // Remove the heart after its animation ends
        // setTimeout(() => {
        //     heart.remove();
        // }, 4000); // Convert seconds to milliseconds
    }
}