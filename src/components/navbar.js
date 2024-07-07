import logo from '../assets/logo.png';
import router from '../router.js';  // Import the router object

const navbar = () => `
  <style>
    nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
    }
    .nav-links {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    .toggle-path {
      background-color: #e2e8f0;
    }
    .toggle-circle {
      top: 0.25rem;
      left: 0.25rem;
      width: 1.5rem;
      height: 1.5rem;
      background-color: #fff;
      border-radius: 50%;
      transition: transform 0.3s;
    }
    input:checked + .toggle-path .toggle-circle {
      transform: translateX(2rem);
    }
    input:checked + .toggle-path .sun {
      display: inline-block;
    }
    input:checked + .toggle-path .moon {
      display: none;
    }
    .logo {
      height: 2rem; /* Adjust as needed */
      cursor: pointer;
    }
  </style>
  <nav>
    <div class="logo">
      <img src="${logo}" alt="Logo" class="h-8" id="home-logo">
    </div>
    <div class="nav-links">
      <a href="/" data-navigo>Home</a>
      <a href="/about" data-navigo>About</a>
      <a href="/contact" data-navigo>Contact Us</a>
      <label for="dark-mode-toggle" class="relative inline-block w-16 h-8 align-middle select-none transition duration-200 ease-in">
        <input type="checkbox" id="dark-mode-toggle" class="absolute opacity-0 w-0 h-0" />
        <span class="toggle-path bg-gray-200 dark:bg-gray-700 block w-full h-full rounded-full shadow-inner"></span>
        <span class="toggle-circle absolute left-0 top-0 bg-white dark:bg-gray-900 w-8 h-8 rounded-full transition transform duration-300 ease-in-out flex items-center justify-center">
          <span class="sun hidden dark:inline-block text-yellow-500">☀️</span>
          <span class="moon inline-block dark:hidden text-gray-500">🌙</span>
        </span>
      </label>
    </div>
  </nav>
`

const initNavbar = () => {
  // Dark Mode Toggle Logic
  const toggleDarkMode = () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('darkMode', document.body.classList.contains('dark'));
    console.log('Dark mode:', document.body.classList.contains('dark'));  // Debugging log
  }

  document.getElementById('dark-mode-toggle').addEventListener('change', toggleDarkMode)

  // Set the initial state based on local storage
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark');
    document.getElementById('dark-mode-toggle').checked = true;
  }
  // Logo click logic
  document.getElementById('home-logo').addEventListener('click', () => {
    router.navigate('/');
  });
}

export { navbar, initNavbar }
