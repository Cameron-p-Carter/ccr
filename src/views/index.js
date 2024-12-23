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
        <div class="search" style="text-align: center;">
          <input 
            type="search"
            name="search"
            placeholder="Search persons by name..."
            hx-post="/persons/search"
            hx-trigger="keyup changed delay:300ms"
            hx-target=".person-list"
          />
        </div> 

        <div class="person-list">
          <button hx-get="/persons" hx-target=".person-list">Show Persons</button>
        </div>

        <div class="add-person-form">
          <h2>wow</h2>
          <form
            hx-post="/persons" 
            hx-target=".person-list ul" 
            hx-swap="beforeend" 
            hx-on::after-request="document.querySelector('form').reset()"
          >
            <input 
              id="name" 
              name="name"
              placeholder="name" 
              type="text"
              required 
            />
            <input 
              id="major" 
              name="major"
              placeholder="major" 
              type="text"
              required
            />
            <button>Add</button>
          </form>
        </div>
      </main>
    </body>
  </html>
`;

export default createHomepageTemplate;