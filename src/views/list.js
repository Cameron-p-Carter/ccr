import PERSONS_DATA from "../data/persons.js";
import createPersonTemplate from './person.js';

const createListTemplate = (persons) => /*html*/`
  <ul>
    ${persons.map((person) => createPersonTemplate(person)).join('')}
  </ul>
`;

export default createListTemplate;