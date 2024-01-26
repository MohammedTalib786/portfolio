const toTop = document.querySelector('.to-top');
console.log(toTop)
window.addEventListener('scroll', () => {
    // console.log(window.pageYOffset);
    if (window.pageYOffset > 100) {
        toTop.classList.add('active');
    }
    else {
        toTop.classList.remove('active');
    }
})

toTop.addEventListener('click', (e) => {
    e.preventDefault()
    window.scrollTo(0, 0);
})





let toggleBtn = document.querySelector('.toggleBtn');
console.log(toggleBtn)
let landscape = document.querySelector('.landscape');
console.log(landscape)
// let header = document.querySelector('header');
toggleBtn.addEventListener('click', (e) => {
    if (landscape.style.display != "flex") {
        landscape.style.display = "flex"
    }

    else {
        landscape.style.display = "none"

    }
})

if (window.innerWidth > 595) {
    landscape.classList.add('displayActive')
}


