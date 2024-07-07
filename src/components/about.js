const about = () => `
  <style>
    body, html {
      background-color: var(--bg-color);
      color: var(--text-color);
    }
    .about-container {
      padding: 2rem;

      margin: 0 auto;
      background-color: var(--bg-color); /* Ensure the container uses the background color variable */
      color: var(--text-color); /* Ensure the text color uses the text color variable */
    }
    .about-container h1 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    .about-container h2 {
      font-size: 1.5rem;
      margin-top: 1.5rem;
      margin-bottom: 1rem;
    }
    .about-container p {
      margin-bottom: 1rem;
      line-height: 1.6;
    }
    .about-container ul {
      margin-bottom: 1rem;
      list-style-type: disc;
      padding-left: 1.5rem;
    }
    .about-container li {
      margin-bottom: 0.5rem;
    }
    .about-container pre {
      background-color: var(--bg-color);
      padding: 1rem;
      border-radius: 0.5rem;
      overflow: auto;
    }
    .about-container code {
      display: block;
      white-space: pre;
    }
  </style>
  <div class="about-container">
    <h1>JavaScript Pro Kit (JSPK) System</h1>

    <h2>Overview</h2>
    <p>The JavaScript Pro Kit (JSPK) is a comprehensive, modular development system designed to streamline and enhance the development of JavaScript-based applications. JSPK integrates modern development tools and best practices, providing a robust foundation for building scalable and maintainable web applications.</p>

    <h2>Key Features</h2>
    
    <h3>1. Modular JavaScript Architecture</h3>
    <ul>
      <li><strong>Component-Based Design</strong>: JSPK promotes the use of self-contained, reusable components, each encapsulating its HTML, CSS, and JavaScript.</li>
      <li><strong>Easy Integration</strong>: Components can be easily imported and utilized across different parts of the application, promoting code reuse and reducing redundancy.</li>
    </ul>

    <h3>2. Webpack</h3>
    <ul>
      <li><strong>Efficient Bundling</strong>: Webpack handles the bundling of JavaScript, CSS, and assets, optimizing the application for performance.</li>
      <li><strong>Hot Module Replacement</strong>: Facilitates fast development by enabling modules to be updated without a full page refresh.</li>
    </ul>

    <h3>3. Babel</h3>
    <ul>
      <li><strong>ES6+ Support</strong>: Transpiles modern JavaScript syntax to ensure compatibility with older browsers.</li>
      <li><strong>Plugin Ecosystem</strong>: Extend Babel’s functionality with a wide range of plugins for various use-cases.</li>
    </ul>

    <h3>4. ESLint</h3>
    <ul>
      <li><strong>Code Quality</strong>: ESLint enforces coding standards and detects potential errors in the codebase, ensuring code consistency and reliability.</li>
    </ul>

    <h3>5. NPM</h3>
    <ul>
      <li><strong>Package Management</strong>: Easily manage project dependencies and scripts with NPM, the Node Package Manager.</li>
    </ul>

    <h3>6. Redux</h3>
    <ul>
      <li><strong>State Management</strong>: Centralized state management using Redux allows for predictable state updates and easier debugging.</li>
      <li><strong>Middleware Support</strong>: Integrate middleware for handling asynchronous actions and other side effects.</li>
    </ul>

    <h3>7. Navigo</h3>
    <ul>
      <li><strong>Client-Side Routing</strong>: Simplifies routing in single-page applications (SPA) with a lightweight, easy-to-use router.</li>
    </ul>

    <h2>Additional Tools</h2>

    <h3>1. Tailwind CSS</h3>
    <ul>
      <li><strong>Utility-First CSS Framework</strong>: Offers low-level utility classes that enable rapid and custom styling without leaving your HTML.</li>
    </ul>

    <h3>2. Local Storage Management</h3>
    <ul>
      <li><strong>State Persistence</strong>: Utilizes local storage to persist user preferences and application state across sessions.</li>
    </ul>

    <h2>Use Case Example</h2>

    <h3>Project Structure</h3>
    <pre>
<code>
src
├── assets
│   └── logo.png
├── components
│   └── navbar.js
├── index.js
├── index.html
├── actions.js
├── router.js
├── store.js
├── styles.css
└── reducer.js
</code>
    </pre>
  </div>
`;

export default about;

