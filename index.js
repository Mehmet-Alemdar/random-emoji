function lip() {
  var w = Math.floor(Math.random() * 200) + 50
  var h = Math.floor(Math.random() * 200) + 10

  var r = Math.floor(Math.random() * 255)
  var b = Math.floor(Math.random() * 255)
  var g = Math.floor(Math.random() * 255)

  setTimeout(function () {
    $('.lip').css({ width: `${w}px`, height: `${h}px`, transition: '0.5s' })

    $('.container').css({
      'background-color': `rgb(${r},${b},${g})`,
      transition: '0.5s',
    })
    lip()
  }, 1000)
}

function eyes() {
  setTimeout(function () {
    $('.eye').css({ height: '10px', transition: '0.5s' })
    setTimeout(function () {
      $('.eye').css({ height: '100px', transition: '0.5s' })
      eyes()
    }, 500)
  }, 2500)
}

eyes()
lip()
