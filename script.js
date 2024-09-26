// Toggle the "Read More" functionality
document.querySelectorAll('.toggle-read-more').forEach(button => {
    button.addEventListener('click', () => {
        const readMoreText = button.previousElementSibling.querySelector('.read-more');
        if (readMoreText.style.display === 'none') {
            readMoreText.style.display = 'inline';
            button.textContent = 'Read Less';
        } else {
            readMoreText.style.display = 'none';
            button.textContent = 'Read More';
        }
    });
});
