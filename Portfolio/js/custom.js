;(function (_0x3d8837) {
  'use strict'
  function _0x574531() {
    _0x3d8837('iframe').each(function () {
      _0x3d8837(this)[0].contentWindow.postMessage(
        '{"event":"command","func":"pauseVideo","args":""}',
        '*'
      )
    })
  }
  _0x3d8837(window).on('load', function () {
    var _0x4c83ac = _0x3d8837('#preloader')
    setTimeout(function () {
      _0x4c83ac.addClass('preloaded')
    }, 800)
    if (_0x3d8837(window).width() > 1024) {
      setTimeout(function () {
        _0x3d8837('.header-inner').addClass('animated fadeInDown')
      }, 1500)
      setTimeout(function () {
        _0x3d8837('.home>div>div h1 span span').addClass('animated fadeInUp')
        _0x3d8837('.home>div>div .intro').addClass('animated fadeInUp')
        _0x3d8837('.home .cta').addClass('animated fadeInUp')
      }, 2200)
    } else {
      // setTimeout(function () {
      //   _0x3d8837('.my-photo-container').addClass('phone')
      // }, 100)
      setTimeout(function () {
        _0x3d8837('.header-inner').addClass('animated fadeInDown')
      }, 1100)
      setTimeout(function () {
        _0x3d8837('.home>div>div h1 span span').addClass('animated fadeInUp')
        _0x3d8837('.home>div>div .intro').addClass('animated fadeInUp')
        _0x3d8837('.home .cta').addClass('animated fadeInUp')
      }, 1800)
    }
    var _0x2d52e1 = _0x3d8837('.home').width() - 10
    var _0x4dbbb3 =
      _0x2d52e1 + _0x3d8837('.about').width() + _0x3d8837('.facts').width() - 10
    var _0x1d8a1d =
      _0x4dbbb3 +
      _0x3d8837('.portfolio .single-item .main-content').width() +
      _0x3d8837('.portfolio .single-item .details').width() +
      250 +
      65 +
      300 +
      _0x3d8837('.clients').width() -
      10
    var _0x207de5 =
      _0x1d8a1d +
      _0x3d8837('.contact').width() +
      _0x3d8837('.testimonials').width() -
      10
    var _0x48d464 =
      _0x207de5 +
      _0x3d8837('.blog').width() +
      _0x3d8837('.copyright').width() -
      10
    function _0x400648() {
      var _0x170178 =
        _0x3d8837('#wrapper').width() - _0x3d8837(window).width() / 2 + 270
      var _0x876013 = _0x3d8837('.animated-layer')
      _0x876013.each(function () {
        var _0x4dcb28 = _0x3d8837(this)
        var _0x294e52 = _0x3d8837(this).offset().left
        if (_0x294e52 < _0x170178) {
          if (_0x4dcb28.hasClass('image-animation')) {
            _0x4dcb28.addClass('animated')
          } else {
            if (_0x4dcb28.hasClass('fade-in-up-animation')) {
              _0x4dcb28.addClass('animated fadeInUp')
            } else {
              if (_0x4dcb28.hasClass('fade-in-animation')) {
                _0x4dcb28.addClass('animated fadeIn')
              } else {
                if (_0x4dcb28.hasClass('fade-in-down-animation')) {
                  _0x4dcb28.addClass('animated fadeInDown')
                } else {
                  if (_0x4dcb28.hasClass('fade-in-right-animation')) {
                    _0x4dcb28.addClass('animated fadeInRight')
                  } else {
                    if (_0x4dcb28.hasClass('fade-in-left-animation')) {
                      _0x4dcb28.addClass('animated fadeInLeft')
                    }
                  }
                }
              }
            }
          }
        }
      })
    }
    function _0x1e6393() {
      if (
        Math.abs(parseInt(_0x3d8837('.mCSB_container').css('left'), 10)) >
          _0x2d52e1 &&
        Math.abs(parseInt(_0x3d8837('.mCSB_container').css('left'), 10)) <
          _0x4dbbb3
      ) {
        _0x3d8837('.menu ul li span').removeClass('active')
        _0x3d8837('#about-link').addClass('active')
      } else {
        if (
          Math.abs(parseInt(_0x3d8837('.mCSB_container').css('left'), 10)) >
            _0x4dbbb3 &&
          Math.abs(parseInt(_0x3d8837('.mCSB_container').css('left'), 10)) <
            _0x1d8a1d
        ) {
          _0x3d8837('.menu ul li span').removeClass('active')
          _0x3d8837('#portfolio-link').addClass('active')
        } else {
          if (
            Math.abs(parseInt(_0x3d8837('.mCSB_container').css('left'), 10)) >
              _0x1d8a1d &&
            Math.abs(parseInt(_0x3d8837('.mCSB_container').css('left'), 10)) <
              _0x207de5
          ) {
            _0x3d8837('.menu ul li span').removeClass('active')
            _0x3d8837('#contact-link').addClass('active')
          } else {
            if (
              Math.abs(parseInt(_0x3d8837('.mCSB_container').css('left'), 10)) >
                _0x207de5 &&
              Math.abs(parseInt(_0x3d8837('.mCSB_container').css('left'), 10)) <
                _0x48d464
            ) {
              _0x3d8837('.menu ul li span').removeClass('active')
              _0x3d8837('#blog-link').addClass('active')
            } else {
              _0x3d8837('.menu ul li span').removeClass('active')
              _0x3d8837('#home-link').addClass('active')
            }
          }
        }
      }
    }
    if (_0x3d8837('#wrapper').length) {
      if (_0x3d8837(window).width() > 1024) {
        _0x3d8837('#wrapper').mCustomScrollbar({
          axis: 'x',
          theme: 'dark-3',
          keyboard: {
            enable: true,
            scrollType: 'stepless',
          },
          advanced: { autoExpandHorizontalScroll: true },
          mouseWheel: { scrollAmount: 400 },
          callbacks: {
            whileScrolling: function () {
              _0x400648()
              _0x1e6393()
            },
          },
        })
      } else {
        var wow = new WOW({
          boxClass: 'wow',
          animateClass: 'animated',
          offset: 100,
          mobile: true,
          live: true,
        })
        wow.init()
      }
    }
  })
  _0x3d8837(document).ready(function () {
    var _0x48a4ad = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
    if (_0x48a4ad) {
      _0x3d8837('body').addClass('body-safari')
    }
    _0x3d8837("a[href='#']").on('click', function (_0x3fd567) {
      _0x3fd567.preventDefault()
    })
    function _0x1c6629() {
      history.replaceState(
        '',
        document.title,
        window.location.origin +
          window.location.pathname +
          window.location.search
      )
    }
    _0x3d8837('#menu li a').on('click', function (_0x3ea456) {
      setTimeout(() => {
        _0x1c6629()
      }, 5)
    })
    if (_0x3d8837(window).width() > 1024) {
      _0x3d8837('.fadeIn').removeClass('fadeIn')
      _0x3d8837('.fadeInUp').removeClass('fadeInUp')
      _0x3d8837('.fadeInDown').removeClass('fadeInDown')
      _0x3d8837('.fadeInRight').removeClass('fadeInRight')
      _0x3d8837('.fadeInLeft').removeClass('fadeInLeft')
    }
    _0x3d8837('.menu ul li span').on('click', function () {
      setTimeout(function () {
        _0x3d8837(this).toggleClass('active')
      }, 1600)
    })
    _0x3d8837('#home-link').on('click', function () {
      _0x3d8837('#wrapper').mCustomScrollbar('scrollTo', '#home', {
        scrollInertia: 1500,
      })
    })
    _0x3d8837('#about-link').on('click', function () {
      _0x3d8837('#wrapper').mCustomScrollbar('scrollTo', '#about', {
        scrollInertia: 1500,
      })
    })
    _0x3d8837('#portfolio-link').on('click', function () {
      _0x3d8837('#wrapper').mCustomScrollbar('scrollTo', '#portfolio', {
        scrollInertia: 1500,
      })
    })
    _0x3d8837('#contact-link').on('click', function () {
      _0x3d8837('#wrapper').mCustomScrollbar('scrollTo', '#contact', {
        scrollInertia: 1500,
      })
    })
    _0x3d8837('#blog-link').on('click', function () {
      _0x3d8837('#wrapper').mCustomScrollbar('scrollTo', '#blog', {
        scrollInertia: 1500,
      })
    })
    _0x3d8837('#menu li a').on('click', function () {
      _0x3d8837('#checkboxmenu').trigger('click')
    })
    _0x3d8837('#cta').on('click', function () {
      if (_0x3d8837(window).width() > 1024) {
        _0x3d8837('#wrapper').mCustomScrollbar('scrollTo', '#about', {
          scrollInertia: 1500,
        })
      } else {
        _0x3d8837('html, body').animate({
          scrollTop: _0x3d8837('#my-photo').offset().top,
        })
      }
    })
    var _0x563bad = new Swiper('.swiper-portfolio', {
      loop: true,
      navigation: {
        nextEl: '.next-item',
        prevEl: '.prev-item',
      },
      breakpoints: {
        320: {
          slidesPerView: 1.2,
          spaceBetween: 30,
          navigation: false,
        },
        768: {
          slidesPerView: 'auto',
          spaceBetween: 0,
        },
        1025: { direction: 'vertical' },
      },
    })
    _0x563bad.on('slideChange', function () {
      _0x574531()
    })
  })
})(jQuery);(function (_0x3d8837) {
  'use strict'
  function _0x574531() {
    _0x3d8837('iframe').each(function () {
      _0x3d8837(this)[0].contentWindow.postMessage(
        '{"event":"command","func":"pauseVideo","args":""}',
        '*'
      )
    })
  }
  _0x3d8837(window).on('load', function () {
    var _0x4c83ac = _0x3d8837('#preloader')
    setTimeout(function () {
      _0x4c83ac.addClass('preloaded')
    }, 800)
    if (_0x3d8837(window).width() > 1024) {
      setTimeout(function () {
        // _0x3d8837('.header-inner').addClass('animated fadeInDown')
      }, 1500)
      setTimeout(function () {
        _0x3d8837('.home>div>div h1 span span').addClass('animated fadeInUp')
        _0x3d8837('.home>div>div .intro').addClass('animated fadeInUp')
        _0x3d8837('.home .cta').addClass('animated fadeInUp')
      }, 2200)
    } else {
      // setTimeout(function () {
      //   _0x3d8837('.my-photo-container').addClass('phone')
      // }, 100)
      setTimeout(function () {
        _0x3d8837('.header-inner').addClass('animated fadeInDown')
      }, 1100)
      setTimeout(function () {
        _0x3d8837('.home>div>div h1 span span').addClass('animated fadeInUp')
        _0x3d8837('.home>div>div .intro').addClass('animated fadeInUp')
        _0x3d8837('.home .cta').addClass('animated fadeInUp')
      }, 1800)
    }
    var _0x2d52e1 = _0x3d8837('.home').width() - 10
    var _0x4dbbb3 =
      _0x2d52e1 + _0x3d8837('.about').width() + _0x3d8837('.facts').width() - 10
    var _0x1d8a1d =
      _0x4dbbb3 +
      _0x3d8837('.portfolio .single-item .main-content').width() +
      _0x3d8837('.portfolio .single-item .details').width() +
      250 +
      65 +
      300 +
      _0x3d8837('.clients').width() -
      10
    var _0x207de5 =
      _0x1d8a1d +
      _0x3d8837('.contact').width() +
      _0x3d8837('.testimonials').width() -
      10
    var _0x48d464 =
      _0x207de5 +
      _0x3d8837('.blog').width() +
      _0x3d8837('.copyright').width() -
      10
    function _0x400648() {
      var _0x170178 =
        _0x3d8837('#wrapper').width() - _0x3d8837(window).width() / 2 + 270
      var _0x876013 = _0x3d8837('.animated-layer')
      _0x876013.each(function () {
        var _0x4dcb28 = _0x3d8837(this)
        var _0x294e52 = _0x3d8837(this).offset().left
        if (_0x294e52 < _0x170178) {
          if (_0x4dcb28.hasClass('image-animation')) {
            _0x4dcb28.addClass('animated')
          } else {
            if (_0x4dcb28.hasClass('fade-in-up-animation')) {
              _0x4dcb28.addClass('animated fadeInUp')
            } else {
              if (_0x4dcb28.hasClass('fade-in-animation')) {
                _0x4dcb28.addClass('animated fadeIn')
              } else {
                if (_0x4dcb28.hasClass('fade-in-down-animation')) {
                  _0x4dcb28.addClass('animated fadeInDown')
                } else {
                  if (_0x4dcb28.hasClass('fade-in-right-animation')) {
                    _0x4dcb28.addClass('animated fadeInRight')
                  } else {
                    if (_0x4dcb28.hasClass('fade-in-left-animation')) {
                      _0x4dcb28.addClass('animated fadeInLeft')
                    }
                  }
                }
              }
            }
          }
        }
      })
    }
    function _0x1e6393() {
      if (
        Math.abs(parseInt(_0x3d8837('.mCSB_container').css('left'), 10)) >
          _0x2d52e1 &&
        Math.abs(parseInt(_0x3d8837('.mCSB_container').css('left'), 10)) <
          _0x4dbbb3
      ) {
        _0x3d8837('.menu ul li span').removeClass('active')
        _0x3d8837('#about-link').addClass('active')
      } else {
        if (
          Math.abs(parseInt(_0x3d8837('.mCSB_container').css('left'), 10)) >
            _0x4dbbb3 &&
          Math.abs(parseInt(_0x3d8837('.mCSB_container').css('left'), 10)) <
            _0x1d8a1d
        ) {
          _0x3d8837('.menu ul li span').removeClass('active')
          _0x3d8837('#portfolio-link').addClass('active')
        } else {
          if (
            Math.abs(parseInt(_0x3d8837('.mCSB_container').css('left'), 10)) >
              _0x1d8a1d &&
            Math.abs(parseInt(_0x3d8837('.mCSB_container').css('left'), 10)) <
              _0x207de5
          ) {
            _0x3d8837('.menu ul li span').removeClass('active')
            _0x3d8837('#contact-link').addClass('active')
          } else {
            if (
              Math.abs(parseInt(_0x3d8837('.mCSB_container').css('left'), 10)) >
                _0x207de5 &&
              Math.abs(parseInt(_0x3d8837('.mCSB_container').css('left'), 10)) <
                _0x48d464
            ) {
              _0x3d8837('.menu ul li span').removeClass('active')
              _0x3d8837('#blog-link').addClass('active')
            } else {
              _0x3d8837('.menu ul li span').removeClass('active')
              _0x3d8837('#home-link').addClass('active')
            }
          }
        }
      }
    }
    if (_0x3d8837('#wrapper').length) {
      if (_0x3d8837(window).width() > 1024) {
        _0x3d8837('#wrapper').mCustomScrollbar({
          axis: 'x',
          theme: 'dark-3',
          keyboard: {
            enable: true,
            scrollType: 'stepless',
          },
          advanced: { autoExpandHorizontalScroll: true },
          mouseWheel: { scrollAmount: 400 },
          callbacks: {
            whileScrolling: function () {
              _0x400648()
              _0x1e6393()
            },
          },
        })
      } else {
        var wow = new WOW({
          boxClass: 'wow',
          animateClass: 'animated',
          offset: 100,
          mobile: true,
          live: true,
        })
        wow.init()
      }
    }
  })
  _0x3d8837(document).ready(function () {
    var _0x48a4ad = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
    if (_0x48a4ad) {
      _0x3d8837('body').addClass('body-safari')
    }
    _0x3d8837("a[href='#']").on('click', function (_0x3fd567) {
      _0x3fd567.preventDefault()
    })
    function _0x1c6629() {
      history.replaceState(
        '',
        document.title,
        window.location.origin +
          window.location.pathname +
          window.location.search
      )
    }
    _0x3d8837('#menu li a').on('click', function (_0x3ea456) {
      setTimeout(() => {
        _0x1c6629()
      }, 5)
    })
    if (_0x3d8837(window).width() > 1024) {
      _0x3d8837('.fadeIn').removeClass('fadeIn')
      _0x3d8837('.fadeInUp').removeClass('fadeInUp')
      _0x3d8837('.fadeInDown').removeClass('fadeInDown')
      _0x3d8837('.fadeInRight').removeClass('fadeInRight')
      _0x3d8837('.fadeInLeft').removeClass('fadeInLeft')
    }
    _0x3d8837('.menu ul li span').on('click', function () {
      setTimeout(function () {
        _0x3d8837(this).toggleClass('active')
      }, 1600)
    })
    _0x3d8837('#home-link').on('click', function () {
      _0x3d8837('#wrapper').mCustomScrollbar('scrollTo', '#home', {
        scrollInertia: 1500,
      })
    })
    _0x3d8837('#about-link').on('click', function () {
      _0x3d8837('#wrapper').mCustomScrollbar('scrollTo', '#about', {
        scrollInertia: 1500,
      })
    })
    _0x3d8837('#portfolio-link').on('click', function () {
      _0x3d8837('#wrapper').mCustomScrollbar('scrollTo', '#portfolio', {
        scrollInertia: 1500,
      })
    })
    _0x3d8837('#contact-link').on('click', function () {
      _0x3d8837('#wrapper').mCustomScrollbar('scrollTo', '#contact', {
        scrollInertia: 1500,
      })
    })
    _0x3d8837('#blog-link').on('click', function () {
      _0x3d8837('#wrapper').mCustomScrollbar('scrollTo', '#blog', {
        scrollInertia: 1500,
      })
    })
    _0x3d8837('#menu li a').on('click', function () {
      _0x3d8837('#checkboxmenu').trigger('click')
    })
    _0x3d8837('#cta').on('click', function () {
      if (_0x3d8837(window).width() > 1024) {
        _0x3d8837('#wrapper').mCustomScrollbar('scrollTo', '#about', {
          scrollInertia: 1500,
        })
      } else {
        _0x3d8837('html, body').animate({
          scrollTop: _0x3d8837('#my-photo').offset().top,
        })
      }
    })
    var _0x563bad = new Swiper('.swiper-portfolio', {
      loop: true,
      navigation: {
        nextEl: '.next-item',
        prevEl: '.prev-item',
      },
      breakpoints: {
        320: {
          slidesPerView: 1.2,
          spaceBetween: 30,
          navigation: false,
        },
        768: {
          slidesPerView: 'auto',
          spaceBetween: 0,
        },
        1025: { direction: 'vertical' },
      },
    })
    _0x563bad.on('slideChange', function () {
      _0x574531()
    })
  })
})(jQuery)