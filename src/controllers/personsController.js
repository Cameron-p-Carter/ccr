import PERSONS_DATA from '../data/persons.js';
import createListTemplate from '../views/list.js';
import createPersonTemplate from '../views/person.js';
import createEditFormTemplate from '../views/edit.js';

export const getAllPersons = (req, res) => {
  res.send(createListTemplate(PERSONS_DATA));
};

export const getPersonById = (req, res) => {
  const person = PERSONS_DATA.find(b => b.id === req.params.id);
  res.send(createPersonTemplate(person));
};

export const createPerson = (req, res) => {
  const { name, major } = req.body;
  const id = Math.random().toString();
  PERSONS_DATA.push({ id, name, major });
  res.redirect(`/persons/${id}`);
};

export const updatePerson = (req, res) => {
  const { id } = req.params;
  const { name, major } = req.body;
  const idx = PERSONS_DATA.findIndex(b => b.id === id);
  PERSONS_DATA[idx] = { id, name, major };
  res.send(createPersonTemplate(PERSONS_DATA[idx]));
};

export const deletePerson = (req, res) => {
  const idx = PERSONS_DATA.findIndex(b => b.id === req.params.id);
  PERSONS_DATA.splice(idx, 1);
  res.send();
};

export const searchPersons = (req, res) => {
  const text = req.body.search.toLowerCase();
  const filtered = PERSONS_DATA.filter(b => b.name.toLowerCase().includes(text));
  res.send(createListTemplate(filtered));
};

export const renderEditForm = (req, res) => {
  const person = PERSONS_DATA.find(b => b.id === req.params.id);
  res.send(createEditFormTemplate(person));
};
