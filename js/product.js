const smallImages = document.querySelectorAll('.small');
const bigImage = document.querySelector('.big');

smallImages.forEach(img => {
    img.addEventListener('click', () => {
        bigImage.src = img.src;
    });
});
