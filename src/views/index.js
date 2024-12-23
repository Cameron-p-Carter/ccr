const createHomepageTemplate = () => /*html*/`
  <!DOCTYPE html>
  <html>
    <head>
      <title>CRC</title>
      <script src="https://unpkg.com/htmx.org@1.9.12"></script>
      <link rel="stylesheet" href="/styles.css">
      <style>
        /* makes it full screen */
        html, body {
          height: 100%;
          margin: 0;
          box-sizing: border-box; /* accounts for padding */
        }

        /* universal box-sizing for all elements */
        *, *:before, *:after {
          box-sizing: inherit;
        }

        /* full screen grid container */
        .container {
          display: grid;
          grid-template-areas:
            "header1 header2 header3 header4"
            "menu menu content content"
            "footer1 footer1 footer2 footer3";
          grid-template-columns: 6fr 4fr 3fr 3fr; /* coloumns sizing*/
          grid-template-rows: 1fr 12fr 3fr; /* rows sizing */
          height: 100%; /* fill the whole height */
          width: 100%; /* fill the whole width */
          overflow: hidden; /* content doesnt overflow outside container */
        }

        .container > div {
          background-color: rgba(255, 255, 255, 0.8);
          padding: 20px; 
          border: 1px solid black; /* BORDER HERE */
        }

        .container > div.header1 {
          grid-area: header1;
          text-align: left;
          padding: 20px;
          background-color: #f0f0f0;
        }

        .container > div.header2 {
          grid-area: header2;
          text-align: center;
          padding: 20px;
          background-color: #f0f0f0; 
        }

        .container > div.header3 {
          grid-area: header3;
          text-align: center;
          padding: 20px;
          background-color: #f0f0f0; 
        }

        .container > div.header4 {
          grid-area: header4;
          text-align: center;
          padding: 20px;
          background-color: #f0f0f0; 
        }


        .container > div.menu {
          grid-area: menu;
          background-color: #f0f0f0;
          padding: 20px;
        }

        .container > div.content {
          grid-area: content;
          padding: 20px;
        }

        .container > div.footer1 {
          grid-area: footer1;
          text-align: center;
          font-size: 100px;
          padding: 20px;
        }

        .container > div.footer2 {
          grid-area: footer2;
          text-align: center;
          padding: 20px;
          display: flex;
          justify-content: center;
          align-items: center; 
        }

        .container > div.footer3 {
          grid-area: footer3;
          text-align: center;
          padding: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
        }




        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .navigation button {
          margin: 0 10px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header1">
          <header>
            <div>
              <div>CRC</div>
            </div>
          </header>
        </div>

        <div class="header2">
          <header>
            <div>
              <div>PROFILES</div>
            </div>
          </header>
        </div>

        <div class="header3">
          <header>
            <div>
              <div>G L</div>
            </div>
          </header>
        </div>

        <div class="header4">
          <header>
            <div>
              <div>CONTACT</div>
            </div>
          </header>
        </div>

        <!-- picture -->
        <div class="menu">
          <!-- placeholder for img -->
          <p> IMAGE GOES HERE</p>
        </div>

        <!-- about you here -->
        <div class="content">
          <div class="person-display" 
               hx-get="/persons/first" 
               hx-trigger="load" 
               hx-target=".person-display">
            <!-- single persons data -->
          </div>
        </div>

        <!-- footer Section -->
        <div class="footer1">
          <footer>
            <div class="footer-content">
                <!-- hard code for now -->
              <div>CAMERON</div>
            </div>
          </footer>
        </div>

        <div class="footer2">
          <footer>
            <div class="footer-content">
              <div class="navigation">
                <button hx-get="/persons/previous" hx-target=".person-display"><</button>
              </div>
            </div>
          </footer>
        </div>

        <div class="footer3">
          <footer>
            <div class="footer-content">
              <div class="navigation">
                <button hx-get="/persons/next" hx-target=".person-display">></button>
              </div>
            </div>
          </footer>
        </div>


      </div>
    </body>
  </html>
`;

export default createHomepageTemplate;
