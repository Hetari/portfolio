// Nav
const enNavLinks = [
  {
    label: 'Services',
    url: '#services',
  },
  {
    label: 'Works',
    url: '#works',
  },
  {
    label: 'About',
    url: '#about-me-section',
  },
  {
    label: 'Contact',
    url: '#',
  },
];
const enNavbarLinks = [
  {
    label: 'Home',
    url: 'body',
  },
  ...enNavLinks,
];

const en = {
  common: {
    hetari: 'Hetari',
    comma: ',',
  },
  date: {
    monthNames: [
      'JAN',
      'FEB',
      'MAR',
      'APR',
      'MAY',
      'JUN',
      'JUL',
      'AUG',
      'SEP',
      'OCT',
      'NOV',
      'DEC',
    ],
  },
  nav: {
    available: 'available',
    forFreelancer: 'for freelancers',
    workAndCollaboration: 'work and collaboration',
    links: enNavLinks,
    navbar: enNavbarLinks,
  },
};

export default en;
