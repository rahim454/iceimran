$('.latestprojectslider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});

// document.querySelector('.slick-prev').innerHTML = '<i class="fas fa-chevron-left"></i>'
// document.querySelector('.slick-next').innerHTML = '<i class="fas fa-chevron-right"></i>'
document.querySelector('.slick-prev').style.display = 'none'
document.querySelector('.slick-next').style.display = 'none'

//text warp and show script

setInterval(function() {
    document.querySelectorAll('.maintext')[0].style.display = 'none';
}, 6200);

setInterval(function() {
    document.querySelectorAll('.maintext')[0].style.display = 'initial';
}, 12900);


setInterval(function() {
    document.querySelectorAll('.text')[0].style.display = 'initial';
}, 6200);

setInterval(function() {
    document.querySelectorAll('.text')[0].style.display = 'none';
}, 12900);

//google form edited

const myiFrame = document.querySelector('#footermail');
const iframeWindow = myiFrame.contentWindow;
const iframeDocument = iframeWindow.document;
const iframeBody = iframeDocument.body;
iframeBody.style.background = "tomato";
// const iframeTopHeader = iframeDocument.querySelector('body')


console.log(iframeBody);