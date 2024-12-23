import createHomepageTemplate from '../views/index.js';

export const renderHomepage = (req, res) => {
  res.send(createHomepageTemplate());
};
