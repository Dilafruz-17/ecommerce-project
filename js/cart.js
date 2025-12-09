let heart = document.querySelectorAll('#heart');

heart.forEach(heart => {
    heart.addEventListener("click", () => {
        heart.classList.toggle("bi-heart");
        heart.classList.toggle("bi-heart-fill");
    });
});