const swiperLogos = new Swiper('.swiper-logos', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  const swiperProducts = new Swiper('.swiper-products', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      init: function () {
        const thumbnailsContainer = document.querySelector('.swiper-products .swiper-thumbnails');
        this.slides.forEach((slide, index) => {
          const img = slide.querySelector('img');
          const thumbnail = document.createElement('img');
          thumbnail.src = img.src;
          thumbnail.alt = img.alt;
          thumbnail.classList.add('thumbnail', 'w-6', 'h-6', 'object-cover', 'cursor-pointer');
          thumbnail.dataset.index = index;
  
          thumbnail.addEventListener('click', () => {
            swiperProducts.slideToLoop(index); 
          });
  
          thumbnailsContainer.appendChild(thumbnail);
        });
      },
      slideChange: function () {
        const thumbnails = document.querySelectorAll('.swiper-products .thumbnail');
        thumbnails.forEach((thumb, index) => {
          thumb.classList.toggle('active', index === this.realIndex);
        });
      },
    },
  });