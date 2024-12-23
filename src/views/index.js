const createHomepageTemplate = () => /*html*/`
  <!DOCTYPE html>
  <html>
    <head>
      <title>CRC</title>
      <script src="https://unpkg.com/htmx.org@1.9.12"></script>
      <link rel="stylesheet" href="/styles.css">
    </head>
    <body>
      <header>
        <h1>CRC</h1>
      </header>

      <main>


        <div class="person-list" 
             hx-get="/persons" 
             hx-trigger="load" 
             hx-target=".person-list">
        </div>
      </main>
    </body>
  </html>
`;

export default createHomepageTemplate;