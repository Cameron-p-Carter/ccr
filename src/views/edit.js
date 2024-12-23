const createEditFormTemplate = (person) => /*html*/`
  <form hx-put="/persons/${person.id}" hx-target="closest li" hx-swap="outerHTML">
    <input 
      name="name"
      placeholder="name" 
      type="text" 
      value="${person.name}" 
    />
    <input 
      name="major"
      placeholder="major" 
      type="text" 
      value="${person.major}" 
    />
    <button>Confirm</button>
  </form>
`;

export default createEditFormTemplate;