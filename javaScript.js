function w3_open() {
  document.getElementById('navbarNavDropdown').style.display = 'block'
  document.getElementById('myOverlay').style.display = 'block'
}

function w3_close() {
  document.getElementById('navbarNavDropdown').style.display = 'none'
  document.getElementById('myOverlay').style.display = 'none'
}

// Chanange image of arrow when click

let x = document.querySelectorAll('#navbarDropdownMenuLink')
const arrow = document.querySelectorAll('#arrow-icon')

function dropDown() {
  if (x[0].className.indexOf('w3-show') == -1) {
    x[0].className += ' w3-show'
    arrow[0].src = 'images/icon-arrow-up.svg'
  } else {
    x[0].className = x[0].className.replace(' w3-show', '')
    arrow[0].src = 'images/icon-arrow-down.svg'
  }
}

function dropDown2() {
  if (x[1].className.indexOf('w3-show') == -1) {
    x[1].className += ' w3-show'
    arrow[1].src = 'images/icon-arrow-up.svg'
  } else {
    x[1].className = x[1].className.replace(' w3-show', '')
    arrow[1].src = 'images/icon-arrow-down.svg'
  }
}
// Accordtion for the mobile
const acc = document.getElementsByClassName('accordion')

  acc[0].addEventListener('click', function () {
    this.classList.toggle('active')
    const panel = this.nextElementSibling
    if (panel.style.display === 'block') {
      arrow[3].src = 'images/icon-arrow-down.svg'
      panel.style.display = 'none'
    } else {
      panel.style.display = 'block'
      arrow[3].src = 'images/icon-arrow-up.svg'
    }
  })
  acc[1].addEventListener('click', function () {
    this.classList.toggle('active')
    const panel = this.nextElementSibling
    if (panel.style.display === 'block') {
      panel.style.display = 'none'
      arrow[4].src = 'images/icon-arrow-down.svg'
    } else {
      panel.style.display = 'block'
      arrow[4].src = 'images/icon-arrow-up.svg'
    }
  })

