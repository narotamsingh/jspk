import './styles.css'

import router from './router.js'
import { navbar, initNavbar } from './components/navbar.js'
import { footer, initFooter } from './components/footer.js'

// Render the navbar
document.getElementById('navbar').innerHTML = navbar()
initNavbar()

// Render the footer
document.getElementById('footer').innerHTML = footer()
initFooter()

function render(component) {
  document.getElementById('app').innerHTML = component()
}

export { render }
router.updatePageLinks()
