// bar outline none 
/*
let manuBar = document.querySelector('.navbar-toggler')
manuBar.style.boxShadow = 'none'
manuBar.addEventListener('click', function() {
    let manubarSpan = this.querySelector('span')
    let manubarIcon = this.querySelector('span i')
    manubarIcon.classList.add('fa-times-circle')
    manubarIcon.style.fontSize = '40px'
    manubarSpan.classList.remove('navbar-toggler-icon')

})

let manubarI = manuBar.querySelector('span i')
manubarI.addEventListener('click', function() {
    this.classList.remove('fa-times-circle')
    this.closest('span').classList.add('navbar-toggler-icon')
    console.log(this.closest);

})
*/


// ul lis hover img src change

const imgSrc = document.querySelector('.service-list-img img')
const serviceLi = document.querySelector('.my-services ul li')
const serviceLi2 = document.querySelector('.my-services ul li:nth-child(2)')
const serviceLi3 = document.querySelector('.my-services ul li:nth-child(3)')
const serviceLi4 = document.querySelector('.my-services ul li:nth-child(4)')
const serviceLi5 = document.querySelector('.my-services ul li:nth-child(5)')

serviceLi.addEventListener('mouseover', function() {
    imgSrc.setAttribute('src', '../All_Image/logoDesign.png')
})
serviceLi.addEventListener('mouseout', function() {
    imgSrc.setAttribute('src', '../All_Image/demoSerImg.png')
})

serviceLi2.addEventListener('mouseover', function() {
    imgSrc.setAttribute('src', '../All_Image/BusinessCardDesign.jpg')
})
serviceLi2.addEventListener('mouseout', function() {
    imgSrc.setAttribute('src', '../All_Image/demoSerImg.png')
})

serviceLi3.addEventListener('mouseover', function() {
    imgSrc.setAttribute('src', '../All_Image/web-designer.jpg')
})
serviceLi3.addEventListener('mouseout', function() {
    imgSrc.setAttribute('src', '../All_Image/demoSerImg.png')
})

serviceLi4.addEventListener('mouseover', function() {
    imgSrc.setAttribute('src', '../All_Image/customize-wordpress.jpg')
})
serviceLi4.addEventListener('mouseout', function() {
    imgSrc.setAttribute('src', '../All_Image/demoSerImg.png')
})

serviceLi5.addEventListener('mouseover', function() {
    imgSrc.setAttribute('src', '../All_Image/fontend-developer.png')
})
serviceLi5.addEventListener('mouseout', function() {
    imgSrc.setAttribute('src', '../All_Image/demoSerImg.png')
})


AOS.init();