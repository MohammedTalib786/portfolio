const toTop = document.querySelector('.to-top');
let respHead = document.querySelector('.resp-head');
let toggleBtn = document.querySelector('.toggleBtn');
let respNav = document.querySelector('.resp-nav');
let faSolid = document.querySelector('.fa-solid');
let hiddenElem = document.querySelectorAll('.hidden');
let date = new Date();
let year = date.getFullYear();
let projSecTxtCont = document.querySelectorAll('.projSect .blocks .text_content')

// >>>>>>>>>>>>>>>>>>> Scroll To Top Functionality
window.addEventListener('scroll', () => window.pageYOffset > 100 ? toTop.classList.add('active') : toTop.classList.remove('active'))
toTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
})


// >>>>>>>>>>>>>>>>>>> Responsive Navbar Functionality
toggleBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (faSolid.classList.contains('fa-bars')) {
        faSolid.classList.remove('fa-bars')
        faSolid.classList.add('fa-xmark')
        respNav.style.opacity = '1'
        respNav.style.marginTop = '0px'
    }
    else {
        faSolid.classList.remove('fa-xmark')
        faSolid.classList.add('fa-bars')
        respNav.style.opacity = '0'
        respNav.style.marginTop = '-150px'
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

hiddenElem.forEach((elem) => observer.observe(elem));



if (projSecTxtCont) {
    projSecTxtCont.forEach(elem => {
        let paraTxt = Array.from(elem.querySelectorAll('p'))
        let readMoreBtns = Array.from(elem.querySelectorAll('.read_more_btn'))

        readMoreBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                paraTxt.forEach(para => {
                    para.classList.toggle('extendedHeight')
                    if (para.classList.contains('extendedHeight')) {
                        btn.innerHTML = 'Read less <i class="fa-solid fa-chevron-up"></i>';
                        btn.style.color = '#1e42ff'
                    }
                    else {
                        btn.innerHTML = 'Read more <i class="fa-solid fa-chevron-down"></i>'
                        btn.style.color = 'black'
                    }
                })
            })
        })
    })

    let code_unavailable = Array.from(document.querySelectorAll('#code_unavailable'));
    code_unavailable.forEach(elem => {
        elem.addEventListener('click', (e) => {
            e.preventDefault();
            alert("Sorry! Code preview is not Available for this project")
        })
    })
}



// >>>>>>>>>>>>>>>>>>> Initialize LENIS
// Initialize Lenis

const lenis = new Lenis({
    lerp: 0.05,
    // duration: 2.5,
    autoRaf: true,
    anchors: true,
});

// >>>>>>>>>>>>>>>>>>> ENDS Initialize LENIS


// >>>>>>>>>>>>>>>>>>> Initialize Fancybox Lib
Fancybox.bind("[data-fancybox]", {
    // Your custom options
});

