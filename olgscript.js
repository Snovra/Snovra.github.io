const section1 = document.querySelector('.sec2')
//const slogan1 = document.querySelector('.slogan1')
const slogan2 = document.querySelector('.slogan2')

window.addEventListener('scroll', () => 
{

    //slogan1.classList.add('active')

    const {scrollTop, clientHeight} = document.documentElement
    topSec1 = section1.getBoundingClientRect().top
    console.log(topSec1)

    if(scrollTop > (scrollTop + topSec1 - clientHeight*0.7))
    {
        section1.classList.add('active')
        slogan2.classList.add('active')
    }

    else
    {
        section1.classList.remove('active')
        slogan2.classList.remove('active')
    }
})
