const toTop = document.querySelector('.to-top');
let respHead = document.querySelector('.resp-head');
let toggleBtn = document.querySelector('.toggleBtn');
let respNav = document.querySelector('.resp-nav');
let faSolid = document.querySelector('.fa-solid');
let hiddenElem = document.querySelectorAll('.hidden');
let date = new Date();
let year = date.getFullYear();


// >>>>>>>>>>>>>>>>>>> Scroll To Top Functionality
window.addEventListener('scroll', () => window.pageYOffset > 100 ? toTop.classList.add('active') : toTop.classList.remove('active'))
toTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
})


// >>>>>>>>>>>>>>>>>>> Responsive Navbar Functionality
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


// >>>>>>>>>>>>>>>>>>> Get Current Year
document.getElementById('getYear').innerHTML = year;


// >>>>>>>>>>>>>>>>>>> Scroll Animation
let observer = new IntersectionObserver(entries => {
    // console.log('entries', entries)
    entries.forEach(entry => {
        // console.log('entry', entry)
        if (entry.isIntersecting) entry.target.classList.add('show')
    })
})

hiddenElem.forEach((elem) => observer.observe(elem))