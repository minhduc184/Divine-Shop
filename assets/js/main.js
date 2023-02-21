$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:0,
      nav:true,
      autoplay: true,
      autoplayTimeout: 3000,
      dots: true,
      responsive:{
          0:{
              items:1
          },
          300: {
            items: 1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
  })
});

// //b1: Truy cap vao phan tu 
// let iconPopup = document.querySelector('.icon-popup')

// //b2: Add 1 event DOM
// iconPopup.addEventListener('click', function handlePopup() {
//     document.querySelector('.content-popup').style.display = 'block';
// }); 

// //b3: Close Popup
// let iconClose = document.querySelector('.close')

// iconClose.addEventListener('click', function handlePopup() {
//     document.querySelector('.content-popup').style.display = 'none';
// })




//b1: Truy cap vao phan tu 

let icPopup = document.querySelector('.icon-popup');
console.log(icPopup);

icPopup.addEventListener('click', function handlePopup(){
    // alert('1');
    let wrapPopup = document.querySelector('.wrap-popup');
    console.log(wrapPopup);
    wrapPopup.classList.toggle("popup-frontend-32");
})
