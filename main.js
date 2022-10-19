document.addEventListener('DOMContentLoaded', () => {
  $(document).ready(function () {
    // Initialize Local/Session Storage
    ccInit()
    // Local Storage Counter
    $('#clickCounter').click(function () {
      clickCounter('local')
    })
    // Local Storage Reset
    $('#resetCounter').click(function () {
      resetCounter('local')
    })
  })

  function ccInit() {
    if (typeof Storage !== 'undefined') {
      if (!localStorage.nike) {
        localStorage.nike = 0
      }
      if (!sessionStorage.sessionCount) {
        sessionStorage.sessionCount = 0
      }
      $('#nike').html(localStorage.nike)
      $('#sessionStorageCount').html(sessionStorage.sessionCount)
    } else {
      $('p#outputText').html("Your browser doesn't support Local Storage")
    }
  }
  // CLICK COUNTER
  function clickCounter(storageType) {
    if (typeof Storage !== 'undefined') {
      if (storageType == 'local') {
        if (localStorage.nike) {
          localStorage.nike = parseInt(localStorage.nike) + 1
        } else {
          localStorage.nike = 1
        }
        $('#nike').html(localStorage.nike)
      } else if (storageType == 'session') {
        if (sessionStorage.sessionCount) {
          sessionStorage.sessionCount =
            parseInt(sessionStorage.sessionCount) + 1
        } else {
          sessionStorage.sessionCount = 1
        }
        $('#sessionStorageCount').html(sessionStorage.sessionCount)
      }
    } else {
      $('p.outputText').html("Your browser doesn't support Local Storage")
    }
  }

  function resetCounter(storageType) {
    if (typeof Storage !== 'undefined') {
      if (storageType == 'local') {
        localStorage.clear()
        $('#nike').html('0')
      } else if (storageType == 'session') {
        sessionStorage.clear()
        $('#sessionStorageCount').html('0')
      }
    } else {
      $('p.outputText').html(
        "Your browser doesn't support Local/Session Storage"
      )
    }
  }

  ////////////////////////////LACOSTE//////////////////////////////////////

  $(document).ready(function () {
    // Initialize Local/Session Storage
    ccInit()
    // Local Storage Counter
    $('#clickCounterLacoste').click(function () {
      clickCounterLacoste('local')
    })
    // Local Storage Reset
    $('#resetCounter').click(function () {
      resetCounter('local')
    })
  })

  function ccInit() {
    if (typeof Storage !== 'undefined') {
      if (!localStorage.lacoste) {
        localStorage.lacoste = 0
      }
      if (!sessionStorage.sessionCount) {
        sessionStorage.sessionCount = 0
      }
      $('#lacoste').html(localStorage.lacoste)
      $('#sessionStorageCount').html(sessionStorage.sessionCount)
    } else {
      $('p#outputText').html("Your browser doesn't support Local Storage")
    }
  }
  // CLICK COUNTER
  function clickCounterLacoste(storageType) {
    if (typeof Storage !== 'undefined') {
      if (storageType == 'local') {
        if (localStorage.lacoste) {
          localStorage.lacoste = parseInt(localStorage.lacoste) + 1
        } else {
          localStorage.lacoste = 1
        }
        $('#lacoste').html(localStorage.lacoste)
      } else if (storageType == 'session') {
        if (sessionStorage.sessionCount) {
          sessionStorage.sessionCount =
            parseInt(sessionStorage.sessionCount) + 1
        } else {
          sessionStorage.sessionCount = 1
        }
        $('#sessionStorageCount').html(sessionStorage.sessionCount)
      }
    } else {
      $('p.outputText').html("Your browser doesn't support Local Storage")
    }
  }

  ////////////////////////////ADIDAS////////////////////////////////////

  $(document).ready(function () {
    // Initialize Local/Session Storage
    ccInit()
    // Local Storage Counter
    $('#clickCounterAdidas').click(function () {
      clickCounterAdidas('local')
    })
    // Local Storage Reset
    $('#resetCounter').click(function () {
      resetCounter('local')
    })
  })

  function ccInit() {
    if (typeof Storage !== 'undefined') {
      if (!localStorage.adidas) {
        localStorage.adidas = 0
      }
      if (!sessionStorage.sessionCount) {
        sessionStorage.sessionCount = 0
      }
      $('#adidas').html(localStorage.adidas)
      $('#sessionStorageCount').html(sessionStorage.sessionCount)
    } else {
      $('p#outputText').html("Your browser doesn't support Local Storage")
    }
  }
  // CLICK COUNTER
  function clickCounterAdidas(storageType) {
    if (typeof Storage !== 'undefined') {
      if (storageType == 'local') {
        if (localStorage.adidas) {
          localStorage.adidas = parseInt(localStorage.adidas) + 1
        } else {
          localStorage.adidas = 1
        }
        $('#adidas').html(localStorage.adidas)
      } else if (storageType == 'session') {
        if (sessionStorage.sessionCount) {
          sessionStorage.sessionCount =
            parseInt(sessionStorage.sessionCount) + 1
        } else {
          sessionStorage.sessionCount = 1
        }
        $('#sessionStorageCount').html(sessionStorage.sessionCount)
      }
    } else {
      $('p.outputText').html("Your browser doesn't support Local Storage")
    }
  }
})

////////////////////////////////SWIPER///////////////////////////////////////

var swiper = new Swiper('.mySwiper', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  }
})
