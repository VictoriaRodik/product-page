const defaultNavigation = {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
};

const defaultPagination = {
  el: '.swiper-pagination',
  clickable: true,
};

const swiperLogos = new Swiper('.swiper-logos', {
  loop: true,
  pagination: defaultPagination,
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

const swiperCards = new Swiper('.swiper-cards', {
  loop: true,
  navigation: defaultNavigation,
});

const swiperReviews = new Swiper('.swiper-reviews', {
  loop: true,
  pagination: defaultPagination,
  navigation: defaultNavigation,
});
