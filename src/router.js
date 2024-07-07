import Navigo from 'navigo'
import home from './components/home.js'
import about from './components/about.js'
import contact from './components/contact.js'
import { render } from './index.js'

const router = new Navigo('/', { hash: true })

router
  .on({
    '/': () => render(home),
    '/about': () => render(about),
    '/contact': () => render(contact),
  })
  .resolve()

export default router
