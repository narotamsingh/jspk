import logo from '../assets/logo.png';
const footer = () => `
<style>
  footer {
    padding: 2rem 1rem;
    background-color: var(--footer-bg-color);
    color: var(--footer-text-color);
    text-align: center;
    border-top: 1px solid var(--footer-border-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .footer-content {

    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .footer-logo {
    margin-bottom: 1rem;
  }
  .footer-links {
    display: flex;
    gap: 2rem;
    margin-bottom: 1rem;
  }
  .footer-links a {
    color: var(--footer-link-color);
    text-decoration: none;
    font-weight: 500;
  }
  .footer-links a:hover {
    text-decoration: underline;
  }
  .footer-text {
    font-size: 0.875rem;
  }
  body {
    --footer-bg-color: #f8f9fa;
    --footer-text-color: #333;
    --footer-border-color: #e2e8f0;
    --footer-link-color: #6a1b9a;
  }
  body.dark {
    --footer-bg-color: #2d3748;
    --footer-text-color: #e2e8f0;
    --footer-border-color: #4a5568;
    --footer-link-color: #b794f4;
  }
</style>

<div class="footer-content">
  <div class="footer-logo">
    <img src="${logo}" alt="Logo" class="h-8">
  </div>
  <div class="footer-links">
    <a href="/terms" data-navigo>Terms of Service</a>
    <a href="/privacy" data-navigo>Privacy Policy</a>
    <a href="/contact" data-navigo>Contact Us</a>
  </div>
  <div class="footer-text">
    <p>&copy; 2024 Your Company. All rights reserved.</p>
  </div>
</div>
`

const initFooter = () => {
  // Any footer-specific JavaScript logic can go here
}

export { footer, initFooter }
