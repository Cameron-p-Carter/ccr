const createHomepageTemplate = () => /*html*/`
  <!DOCTYPE html>
  <html>
    <head>
      <title>CRC</title>
      <script src="https://unpkg.com/htmx.org@1.9.12"></script>

      <link rel="stylesheet" href="/styles.css">
    </head>
    <body>
      <!-- Header Section -->
      <header>
        <div class="nav-bar">
          <div>PROJECTS</div>
          <div>PROFILES</div>
          <div class="socials">G L</div>
          <div>CONTACT</div>
        </div>
      </header>

      <!-- Main Content Section -->
      <main>
        <div class="person-display" 
             hx-get="/persons/first" 
             hx-trigger="load" 
             hx-target=".person-display">
          <!-- A single person's data will be dynamically loaded here -->
        </div>
      </main>

      <!-- Footer Section -->
      <footer>
        <div class="footer-content">
          <div>CAMERON</div>
          <div class="navigation">
            <button hx-get="/persons/previous" hx-target=".person-display"><</button>
            <button hx-get="/persons/next" hx-target=".person-display">></button>
          </div>
        </div>
      </footer>
    </body>
  </html>
`;

export default createHomepageTemplate;
