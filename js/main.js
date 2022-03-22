window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('#menu').classList.toggle('is-active'),
      document.querySelector('#burger').classList.toggle('header__burger');
    document.querySelector('#burger').classList.toggle('header__burger-close');
  })

  document.querySelector('#burger').addEventListener('focus', function () {
    document.querySelector('#menu').classList.toggle('is-active')
  })

  // search 1024-320
  document.querySelector('.header__search-btn-1024').addEventListener('click', function() {
    document.querySelector('.header__search-btn-1024').classList.add('header__search-btn-1024-none');
    document.querySelector('.header__form-search').classList.add('header__form-search-view');
  })

  document.querySelector('.header__search-close').addEventListener('click', function() {
    document.querySelector('.header__search-btn-1024').classList.remove('header__search-btn-1024-none');
    document.querySelector('.header__form-search').classList.remove('header__form-search-view');
  })


  //убрать фокус после нажатия
  let notFocusForLink = document.querySelectorAll('a');
  for (let i = 0; i < notFocusForLink.length; i++) {
    notFocusForLink[i].addEventListener('mousedown', e => e.preventDefault());
  }

  let notFocusForBtn = document.querySelectorAll('button');
  for (let i = 0; i < notFocusForBtn.length; i++) {
    notFocusForBtn[i].addEventListener('mousedown', e => e.preventDefault());
  }

  document.querySelector('.header__search-btn').addEventListener('mousedown', e => e.preventDefault());

  //Swiper
  const swiper = new Swiper('.hero__swiper-container', {
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },

    loop: true
  });

  // Modal Gallery
  document.querySelectorAll('.gallery__swiper-btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path;

      document.querySelector('.gallery-modal-container').classList.add('gallery-modal-container-visible');
      document.querySelector('.gallery-modal-background').classList.add('gallery-modal-background-visible');

      document.querySelectorAll('.gallery-modal').forEach(function(modalNone) {
        modalNone.classList.remove('gallery-modal-isactive');
      });

      document.querySelector(`[data-target="${path}"]`).classList.add('gallery-modal-isactive');

      document.body.classList.add('gallery__body-hidden');
      });
    })

    document.querySelector('.gallery-modal-background').addEventListener('click', function() {
      document.querySelectorAll('.gallery-modal').forEach(function(modalNone) {
        modalNone.classList.remove('gallery-modal-isactive');
      });
      document.querySelector('.gallery-modal-container').classList.remove('gallery-modal-container-visible');
      document.querySelector('.gallery-modal-background').classList.remove('gallery-modal-background-visible');
      document.body.classList.remove('gallery__body-hidden');
    })

    document.querySelectorAll('.gallery-modal-close').forEach(function(closeModal) {
      closeModal.addEventListener('click', function() {
        document.querySelectorAll('.gallery-modal').forEach(function(modalNone) {
          modalNone.classList.remove('gallery-modal-isactive');
        });
        document.querySelector('.gallery-modal-container').classList.remove('gallery-modal-container-visible');
        document.querySelector('.gallery-modal-background').classList.remove('gallery-modal-background-visible');
        document.body.classList.remove('gallery__body-hidden');
      })
    });

  // Swiper Gallery 
  const swiperGallery = new Swiper('.gallery__swiper-container', {
    speed: 600,
    spaceBetween: 50,
    slidesPerView: 3,
    slidesPerGroup: 3,
    slidesPerColumn: 2,
    slidesPerColumnFill: 'row',

    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.gallery__button-next',
      prevEl: '.gallery__button-prev',
    },
    keyboard: {
      enable: true,
      onlyInViewport: true,
      pageUpDown: false,
    },

    breakpoints: {
      1635: {
        spaceBetween: 50,
        slidesPerView: 3,
        slidesPerGroup: 2,
        slidesPerColumn: 2,
      },

      1025: {
        spaceBetween: 34,
        slidesPerView: 2,
        slidesPerGroup: 2,
        slidesPerColumn: 2,
      },

      769: {
        spaceBetween: 34,
        slidesPerView: 2,
        slidesPerGroup: 2,
        slidesPerColumn: 2,
      },

     500: {
      spaceBetween: 34,
      slidesPerView: 2,
      slidesPerGroup: 2,
      slidesPerColumn: 2,
      },

      320: {
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerColumn: 1,
      }
    }
  })

  // Select
  const element = document.querySelector('#selectCustom');
  const choices = new Choices(element, {
    searchEnabled: false,
  });

  //Gallery Choices
  document.querySelector('.choices__inner').addEventListener('click', function() {
    if (document.querySelector('.choices').classList.contains('is-open')) {
      document.querySelector('.gallery__swiper-container').classList.remove('gallery__swiper-container-open-choices');
      document.querySelector('.gallery__filter-and-description').classList.remove('gallery__filter-and-description-open-choices');
    } else {
      document.querySelector('.gallery__swiper-container').classList.add('gallery__swiper-container-open-choices');
      document.querySelector('.gallery__filter-and-description').classList.add('gallery__filter-and-description-open-choices');
    }
  })

  // Scrollbar 
  const headerNavDirectionsBtn = document.querySelectorAll('.header__nav-directions-btn');
  const headerNavDirectionsPainters = document.querySelectorAll('.header__nav-directions-painters');
  const headerNavDirectionsAfter = document.querySelectorAll('.header__nav-directions-after');

  for (let i = 0; i < headerNavDirectionsBtn.length; i++) {
    headerNavDirectionsBtn[i].addEventListener('click', function () {
      for (j = 0; j < headerNavDirectionsBtn.length; j++) {
        if (j !== i) {
          headerNavDirectionsPainters[j].classList.add('header__nav-directions-painters-none');
          headerNavDirectionsAfter[j].classList.remove('header__nav-directions-after-isactive');
        }
      }
      headerNavDirectionsPainters[i].classList.toggle('header__nav-directions-painters-none');
      headerNavDirectionsAfter[i].classList.toggle('header__nav-directions-after-isactive');
    })
  }

  document.querySelector('.hero').addEventListener('click', function () {
    for (let i = 0; i < headerNavDirectionsBtn.length; i++) {
      if (!headerNavDirectionsPainters[i].classList.contains('header__nav-directions-painters-none')) {
        for (j = 0; j < headerNavDirectionsBtn.length; j++) {
          headerNavDirectionsPainters[j].classList.add('header__nav-directions-painters-none');
          headerNavDirectionsAfter[j].classList.remove('header__nav-directions-after-isactive');
        }
      }
    }
  })

  // Catalog Tabs Language
  const languageCheck = document.querySelectorAll('.catalog__language-check-btn');
  const catalogList = document.querySelectorAll('.catalog__list');
  const descriptionAuthor = document.querySelectorAll('.catalog__doer-description');

  document.querySelectorAll('.catalog__language-check-btn').forEach(function (tabsItem) {
    tabsItem.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path;

      document.querySelectorAll('.catalog__language-check-btn').forEach(function (delBorder) {
        delBorder.classList.remove('catalog__language-check-isactive')
      })
      tabsItem.classList.add('catalog__language-check-isactive');

      document.querySelectorAll('.catalog__description-language').forEach(function (tabContent) {
        tabContent.classList.remove('catalog__description-language-isactive')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__description-language-isactive');

      for (i = 0; i < 5; i++) {
        if (languageCheck[i].classList.contains('catalog__language-check-isactive')) {
          catalogList.forEach(function(list) {
            list.classList.add('catalog__list-none');
          })
          catalogList[i].classList.remove('catalog__list-none');
          catalogList[i+5].classList.remove('catalog__list-none');
          catalogList[i+10].classList.remove('catalog__list-none');
          catalogList[i+15].classList.remove('catalog__list-none');
          catalogList[i+20].classList.remove('catalog__list-none');
          catalogList[i+25].classList.remove('catalog__list-none');
          catalogList[i+30].classList.remove('catalog__list-none');
      }
    }

      if (languageCheck[0].classList.contains('catalog__language-check-isactive')) {
        document.querySelectorAll('.catalog__doer-description').forEach(function(desc) {
          desc.classList.add('catalog__doer-description-none');
        })
        document.querySelectorAll('.catalog__doer-description-french').forEach(function(desc) {
          desc.classList.remove('catalog__doer-description-none');
        })
      }

      if (languageCheck[1].classList.contains('catalog__language-check-isactive')) {
        document.querySelectorAll('.catalog__doer-description').forEach(function(desc) {
          desc.classList.add('catalog__doer-description-none');
        })
        document.querySelectorAll('.catalog__doer-description-german').forEach(function(desc) {
          desc.classList.remove('catalog__doer-description-none');
        })
      }

      if (languageCheck[2].classList.contains('catalog__language-check-isactive')) {
        document.querySelectorAll('.catalog__doer-description').forEach(function(desc) {
          desc.classList.add('catalog__doer-description-none');
        })
        document.querySelectorAll('.catalog__doer-description-italy').forEach(function(desc) {
          desc.classList.remove('catalog__doer-description-none');
        })
      }

      if (languageCheck[3].classList.contains('catalog__language-check-isactive')) {
        document.querySelectorAll('.catalog__doer-description').forEach(function(desc) {
          desc.classList.add('catalog__doer-description-none');
        })
        document.querySelectorAll('.catalog__doer-description-rus').forEach(function(desc) {
          desc.classList.remove('catalog__doer-description-none');
        })
      }

      if (languageCheck[4].classList.contains('catalog__language-check-isactive')) {
        document.querySelectorAll('.catalog__doer-description').forEach(function(desc) {
          desc.classList.add('catalog__doer-description-none');
        })
        document.querySelectorAll('.catalog__doer-description-belgian').forEach(function(desc) {
          desc.classList.remove('catalog__doer-description-none');
        })
      }
    })
  })

  let notFocusForItem = document.querySelectorAll('li');
  for (let i = 0; i < notFocusForLink.length; i++) {
    notFocusForItem[i].addEventListener('mousedown', e => e.preventDefault());
  }

  // Catalog Tabs
  document.querySelectorAll('.catalog__btn').forEach(function (tabsItem) {
    tabsItem.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path;

      document.querySelectorAll('.catalog__doer-detail').forEach(function (tabContent) {
        tabContent.classList.remove('tab-content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active');

      for (i = 0; i < document.querySelectorAll('.catalog__btn').length; i++) {
        document.querySelectorAll('.catalog__btn')[i].classList.remove('catalog__btn-checked');
      }
      tabsItem.classList.add('catalog__btn-checked');
    })
  })

  // Catalog Accordeon Svg
  const accordeonItem = document.querySelectorAll('.ui-accordion-header');
  const accordeonSvg = document.querySelectorAll('.catalog__svg');
  const accordeonList = document.querySelectorAll('.ui-accordion-content');

  for (let k = 0; k < accordeonItem.length; k++) {
    accordeonItem[k].addEventListener('click', function () {
      for (let j = 0; j < accordeonItem.length; j++) {
        accordeonSvg[j].classList.remove('catalog__svg-isactive')
      }
      accordeonSvg[k].classList.add('catalog__svg-isactive');
    })
  }

  for (let i = 0; i < accordeonItem.length; i++) {
    accordeonItem[i].addEventListener('mousedown', e => e.preventDefault());
  }

  // Catalog Scroll 
  const catalogDescription = document.querySelector('.catalog__for-scroll');

  function catalogScroll() {
    if (window.innerWidth <= 768) {
      document.querySelectorAll('.catalog__btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
          catalogDescription.scrollIntoView({behavior: "smooth", block: 'start'});
        });
      });
    }
  }

  catalogScroll();
  
  window.addEventListener('resize', () => {
    catalogScroll();
  });

  // Events Slider
  const slider = document.querySelector('.events__swiper-container');
  let mySwiperEvents;

  function mobileSlider() {
    if (window.innerWidth <= 460 && slider.dataset.mobile == 'false') {
      mySwiperEvents = new Swiper(slider, {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        slideClass: 'events__card',

        pagination: {
          el: '.events__swiper-pagination',
          clickable: true,
        },
      });
      slider.dataset.mobile = 'true';
    }

    if (window.innerWidth > 460) {
      slider.dataset.mobile = 'false';

      if (slider.classList.contains('swiper-container-initialized')) {
        mySwiperEvents.destroy();
      }
    }
  }

  mobileSlider();

  window.addEventListener('resize', () => {
    mobileSlider();
  });

    // Events
  document.querySelector('.events__btn').addEventListener('click', function () {
    document.querySelector('.events__btn').classList.add('events-btn-none');
    document.querySelectorAll('.events__card').forEach(card => {
      card.classList.add('events__card-view')
    });
  })

  // Editions Swiper
  const swiperEditions = document.querySelector('.editions__swiper-container');
  let mySwiperEditions;

  function mobileNotSlide() {
    if (window.innerWidth > 375 && swiperEditions.dataset.mobile == 'false') {
      mySwiperEditions = new Swiper(swiperEditions, {
        speed: 600,
        spaceBetween: 50,
        slidesPerView: 3,
        slidesPerGroup: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: 'row',

        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
        navigation: {
          nextEl: '.editions__button-next',
          prevEl: '.editions__button-prev',
        },
        keyboard: {
          enable: true,
          onlyInViewport: true,
          pageUpDown: false,
        },

        breakpoints: {
          1506: {
            spaceBetween: 50,
            slidesPerView: 3,
            slidesPerGroup: 1,
            slidesPerColumn: 1,
          },

          780: {
            spaceBetween: 50,
            slidesPerView: 2,
            slidesPerGroup: 1,
            slidesPerColumn: 1,
          },

          677: {
            spaceBetween: 34,
            slidesPerView: 2,
            slidesPerGroup: 1,
            slidesPerColumn: 1,
          },

          321: {
            spaceBetween: 15,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerColumn: 1,
          }
        }
      });

      swiperEditions.dataset.mobile = 'true';

    }

    if (window.innerWidth <= 375) {
      swiperEditions.dataset.mobile = 'false';

      if (swiperEditions.classList.contains('swiper-container-initialized')) {
        mySwiperEditions.destroy();
      }
    }
  }
  mobileNotSlide();

  window.addEventListener('resize', () => {
    mobileNotSlide();
  });


  // Edition Spoiler
  const spolerBtn = document.querySelector('.editions__heading-and-svg');
  const spolerLabel = document.querySelectorAll('.editions__categories-label');
  const spolerCheck = document.querySelectorAll('.editions__categories-check');
  const spolerItem = document.querySelectorAll('.editions__categories-item');
  let forCounter = 0;

  spolerBtn.addEventListener('click', function () {
    document.querySelector('.editions__categories-svg').classList.toggle('editions__categories-svg-open');

    for (i = 0; i < spolerCheck.length; i++) {
      if (spolerCheck[i].checked) {
        forCounter += 1;
      };
    };

    if (forCounter === 0) {
      for (let k = 0; k < spolerLabel.length; k++) {
        spolerItem[k].classList.toggle('editions__catrgories-hide');
      }
    } else {
      for (let j = 0; j < spolerLabel.length; j++) {
        if (spolerCheck[j].checked) {
          spolerItem[j].classList.remove('editions__catrgories-hide');
        } else {
          spolerItem[j].classList.toggle('editions__catrgories-hide');
        };
      };
    };
  });

  document.querySelectorAll('.editions__categories-item').forEach(function(close) {
    close.addEventListener('click', function() {
    if (document.querySelector('.editions__categories-svg').classList.contains('editions__categories-svg-open') === false) {
      close.classList.add('editions__catrgories-hide')
    }

    for (i=0; i<document.querySelectorAll('.editions__categories-check').length; i++) {
      if (document.querySelectorAll('.editions__categories-check')[i].checked) {
        document.querySelectorAll('.editions__categories-close')[i].classList.remove('editions__categories-close-none');
        } else (
          document.querySelectorAll('.editions__categories-close')[i].classList.add('editions__categories-close-none')
        )
      }
    })
  })

  // Projects swiper
  const swiperProjects = new Swiper('.projects__swiper', {
    speed: 600,
    spaceBetween: 51,
    slidesPerView: 3,
    slidesPerGroup: 3,
    slidesPerColumn: 1,
    slidesPerColumnFill: 'row',

    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.projects__button-next',
      prevEl: '.projects__button-prev',
    },
    keyboard: {
      enable: true,
      onlyInViewport: true,
      pageUpDown: false,
    },

    breakpoints: {
      1635: {
        spaceBetween: 50,
        slidesPerView: 3,
        slidesPerGroup: 3,
        slidesPerColumn: 1,
      },

      771: {
        spaceBetween: 50,
        slidesPerView: 2,
        slidesPerGroup: 2,
        slidesPerColumn: 1,
      },

      677: {
        spaceBetween: 34,
        slidesPerView: 2,
        slidesPerGroup: 2,
        slidesPerColumn: 1,
      },

      321: {
        spaceBetween: 50,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerColumn: 1,
      },

      320: {
        spaceBetween: 10,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerColumn: 1,
      },
    }
  })

  document.querySelector('.contacts__form-btn').addEventListener('click', function error() {
    function x() {
      let errorValidation = document.querySelectorAll('.js-validate-error-label');
      errorValidation[0].classList.add('contacts__error-one');
      errorValidation[1].classList.add('contacts__error-two');
    }
    setTimeout(x, 1);
  })

})