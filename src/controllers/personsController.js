import PERSONS_DATA from '../data/persons.js';
import createPersonTemplate from '../views/person.js';

let currentIndex = 0; // To track the currently displayed person

export const getFirstPerson = (req, res) => {
  currentIndex = 0; // Reset to the first person
  res.send(createPersonTemplate(PERSONS_DATA[currentIndex]));
};

export const getNextPerson = (req, res) => {
  currentIndex = (currentIndex + 1) % PERSONS_DATA.length; // Move to the next person
  res.send(createPersonTemplate(PERSONS_DATA[currentIndex]));
};

export const getPreviousPerson = (req, res) => {
  currentIndex = (currentIndex - 1 + PERSONS_DATA.length) % PERSONS_DATA.length; // Move to the previous person
  res.send(createPersonTemplate(PERSONS_DATA[currentIndex]));
};
