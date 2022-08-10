let $btn = document.querySelector(`.topBtn`);
window.addEventListener(`scroll`, () => {
    if (window.scrollY > 1000) {
        $btn.classList.add(`show`);
    }
    else {
        $btn.classList.remove(`show`);
    }
})
$btn.addEventListener(`click`, () => {
    window.scrollTo({
        top: 100,
        left: 0,
        behavior: `smooth`
    });
})