// Scroll To Top Functionality
const toTop = document.querySelector('.to-top');
// console.log(toTop)
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


// Responsive Navbar Functionality
let respHead = document.querySelector('.resp-head');
let toggleBtn = document.querySelector('.toggleBtn');
let respNav = document.querySelector('.resp-nav');
let faSolid = document.querySelector('.fa-solid');

// console.log(respHead, toggleBtn, respNav)
toggleBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if (respNav.style.display != 'flex') {
        respHead.style.height = '20rem';
        respNav.style.display = 'flex'
        faSolid.classList.add('fa-xmark');
    }
    else {
        faSolid.classList.remove('fa-xmark');
        respHead.style.height = '9rem';
        respNav.style.display = 'none'
    }
})


// Get Current Year
let date = new Date();
let year = date.getFullYear();
document.getElementById('getYear').innerHTML = year;
