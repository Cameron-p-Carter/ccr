const createPersonTemplate = (person) => /*html*/`
  <li data-id="${person.id}">
    <div 
      class="details" 
      hx-get="/persons/edit/${person.id}"
      hx-target="closest li"
    >
      <h3>${person.name}</h3>
      <p>${person.major}</p>
    </div>
    <button
      hx-delete="/persons/${person.id}" 
      hx-target="closest li" 
      hx-swap="outerHTML"
      >Delete
    </button>
    
  </li>
`;

export default createPersonTemplate;