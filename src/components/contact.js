// src/components/contact.js
const contact = () => `
  <div class="p-4 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
    <h1 class="text-2xl mb-4">Contact Us</h1>
    <p>If you have any questions, feel free to reach out to us.</p>
    <form class="mt-4">
      <label class="block mb-2" for="name">Name</label>
      <input class="w-full p-2 mb-4 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200" type="text" id="name" name="name" required>
      
      <label class="block mb-2" for="email">Email</label>
      <input class="w-full p-2 mb-4 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200" type="email" id="email" name="email" required>
      
      <label class="block mb-2" for="message">Message</label>
      <textarea class="w-full p-2 mb-4 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200" id="message" name="message" rows="4" required></textarea>
      
      <button class="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600" type="submit">Send</button>
    </form>
  </div>
`;

export default contact;