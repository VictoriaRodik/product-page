const defaultNavigation = {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
};

const defaultPagination = {
  el: '.swiper-pagination',
  clickable: true,
};

const swiperLogos = new Swiper('.swiper-logos', {
  slidesPerView: 2,
  spaceBetween: 15,
  pagination: defaultPagination,
  breakpoints: {
    768: { 
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: { 
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
});

const swiperProducts = new Swiper('.swiper-products', {
  navigation: defaultNavigation,
  on: {
      init: function () {
          const thumbnailsContainer = document.querySelector('.swiper-products .swiper-thumbnails');
          if (!thumbnailsContainer) {
              console.warn('Thumbnails container not found for swiper-products.');
              return;
          }

          this.slides.forEach((slide, index) => {
              const img = slide.querySelector('img');
              if (!img) return;

              const thumbnail = document.createElement('img');
              thumbnail.src = img.src;
              thumbnail.alt = img.alt;
              thumbnail.classList.add('thumbnail', 'w-6', 'h-6', 'object-cover', 'cursor-pointer');
              thumbnail.dataset.index = index;

              thumbnail.addEventListener('click', () => {
                  this.slideToLoop(index);
              });

              thumbnailsContainer.appendChild(thumbnail);
          });
      },
      slideChange: function () {
          const thumbnails = document.querySelectorAll('.swiper-products .thumbnail');
          const activeIndex = this.loop ? this.realIndex : this.activeIndex;

          thumbnails.forEach((thumb, index) => {
              thumb.classList.toggle('active', index === activeIndex);
          });
      },
  },
});

const swiperCards = new Swiper('.swiper-comfort', {
  slidesPerView: 1,
  navigation: defaultNavigation,
  breakpoints: {
    1024: { 
      slidesPerView: 3,
    },
  },
});

const swiperReviews = new Swiper('.swiper-reviews', {
  slidesPerView: 1,
  loop: true,
  pagination: defaultPagination,
  navigation: defaultNavigation,
  breakpoints: {
    1024: { 
      slidesPerView: 3,
    },
  },
});
