import './styles.css'
import store from './store.js'
import { increment, decrement } from './actions.js'
import router from './router.js'
import home from './components/home.js'
import about from './components/about.js'
import { navbar, initNavbar } from './components/navbar.js'

// Render the navbar
document.getElementById('navbar').innerHTML = navbar()
initNavbar()

function render(route) {
  let component

  if (route === 'about') {
    component = about()
  } else {
    component = home()
  }

  document.getElementById('app').innerHTML = component

  if (route === 'home') {
    document.getElementById('increment').addEventListener('click', () => {
      store.dispatch(increment())
    })

    document.getElementById('decrement').addEventListener('click', () => {
      store.dispatch(decrement())
    })

    store.subscribe(() => {
      document.getElementById('count').innerText = store.getState().count
    })
  }
}

router
  .on({
    '/': () => render('home'),
    '/about': () => render('about'),
  })
  .resolve()

router.updatePageLinks()
