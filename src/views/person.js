const createPersonTemplate = (person) => /*html*/`
  <li data-id="${person.id}">
    <div 
      class="details"
    >
      <h3>${person.name}</h3>
      <p>${person.major}</p>
    </div>
    
  </li>
`;

export default createPersonTemplate;