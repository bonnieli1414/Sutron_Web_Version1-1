document.querySelector('.ham-toggle').addEventListener("click", (e) => {
    e.target.parentElement.classList.toggle('opened');
    e.target.parentElement.nextElementSibling.classList.toggle('opened');
});