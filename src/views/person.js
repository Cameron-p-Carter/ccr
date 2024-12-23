const createPersonTemplate = (person) => /*html*/`
    <div 
      class="details"
    >
      <h3>${person.name}</h3>
      <p>${person.major}</p>
    </div>

`;

export default createPersonTemplate;