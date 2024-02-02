new Swiper('.swiper', {
    spaceBetween: 27,
    slidesPerView: 'auto',
    loop: true,
    speed:1000,
    autoplay:{
      delay:3000
    },

  });

new Swiper('.swiper-swap', {
    spaceBetween: 20,
    slidesPerView: 3,
    loop: true,
    speed:1000,
    autoplay:{
      delay:1000
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 4,
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      990: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 6,
      },
      375: {
        slidesPerView: 1,
        spaceBetween: 8,
      },
    },

  });
new Swiper('.swiper-swaps', {
    spaceBetween: 20,
    slidesPerView: 3,
    loop: true,
    speed:1000,
    autoplay:{
      delay:1000
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 4,
      },
      990: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      375: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },

  });

new Swiper('.swipper-swipper', {
    spaceBetween: 20,
    slidesPerView: 4,
    loop: true,
    speed:1000,
    autoplay:{
      delay:1000
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 4,
      },
      990: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      375: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
    },
  });

    new Swiper('.swipper-last-wrapper', {
      spaceBetween: 15,
      slidesPerView: 'auto',
      loop: true,
      speed:1000,
      autoplay:{
        delay:3000
      },
  
  });
