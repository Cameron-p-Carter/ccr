import PERSONS_DATA from '../data/persons.js';
import createListTemplate from '../views/list.js';


export const getAllPersons = (req, res) => {
  res.send(createListTemplate(PERSONS_DATA));
};

export const getPersonById = (req, res) => {
  const person = PERSONS_DATA.find(b => b.id === req.params.id);
  res.send(createPersonTemplate(person));
};


