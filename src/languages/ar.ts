// Nav
const arNavLinks = [
  {
    label: 'ركن الإبداع',
    url: '#services',
  },
  {
    label: 'أعمالي',
    url: '#works',
  },
  {
    label: 'من أنا؟',
    url: '#about-me-section',
  },
  {
    label: 'تواصل معي',
    url: '#',
  },
];
const arNavbarLinks = [
  {
    label: 'الرئيسية',
    url: 'body',
  },
  ...arNavLinks,
];

const ar = {
  common: {
    hetari: 'الهتاري',
    comma: '،',
  },
  date: {
    monthNames: [
      'يناير',
      'فبراير',
      'مارس',
      'أبريل',
      'مايو',
      'يونيو',
      'يوليو',
      'أغسطس',
      'سبتمبر',
      'أكتوبر',
      'نوفمبر',
      'ديسمبر',
    ],
  },
  nav: {
    available: 'متوفر',
    forFreelancer: 'للعمل الحر',
    workAndCollaboration: 'والفريلانس والاسئلة',
    links: arNavLinks,
    navbar: arNavbarLinks,
  },
};

export default ar;
