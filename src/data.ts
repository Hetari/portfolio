// Nav type
export type navLinkType = {
  label: string;
  url: string;
};

const socialLinks = [
  {
    label: 'Twitter',
    url: 'https://x.com/4Hetari',
  },
  {
    label: 'GitHub',
    url: 'https://github.com/hetari',
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/hetari/',
  },
];

const resourceLinks = [
  {
    label: 'Huy Nguyen (the designer of this ui)',
    url: 'https://www.huyng.xyz',
  },
  {
    label: 'Pillarstack',
    url: 'https://www.pillarstack.com',
  },
  {
    label: 'Figma Template',
    url: 'https://www.figma.com/community/file/1328038510191576951/project-starter-template',
  },
];

const heroText =
  'A freelance full-stack developer, making good shit since 2023, hiding bad shit since 2023.';

const locationPlace = `15°22'22.0"N 44°10'39.5"E`;
const locationCountry = 'Yemen, Sanaa';

// projectsData.js
// import ibgroup from '/src/assets/images/ib-group-desktop.webp';
// import memento from '/src/assets/images/memento-desktop.webp';
// import acc from '/src/assets/images/acc-square.webp';
// import daddy from '/src/assets/images/godaddy-desktop.webp';
// import sunnyside from '/src/assets/images/sunny-side-square.webp';

// const projectsData = [
//   {
//     title: 'IB Group Vietnam Website',
//     description: 'Web Design / Frontend Development',
//     imageSrc: ibgroup,
//     link: 'https://musical-stroopwafel-1c2327.netlify.app/landing.html',
//   },
//   {
//     title: 'Memento Studio Landing Page',
//     description: 'Web Design / Frontend Development',
//     imageSrc: memento,
//     link: 'https://mementostudio.netlify.app/',
//   },
//   {
//     title: 'Real Business Accountants',
//     description: 'Web Design / Frontend Development',
//     imageSrc: acc,
//     link: 'https://realbusinessaccountants.netlify.app',
//   },
//   {
//     title: 'GoDaddy Landing Page Clone',
//     description: 'Web Design / Frontend Development',
//     imageSrc: daddy,
//     link: 'https://godaddyuiclone.netlify.app',
//   },
//   {
//     title: 'Sunnyside Landing Page',
//     description: 'Web Design / Frontend Development',
//     imageSrc: sunnyside,
//     link: 'https://sunnysidechallenge.netlify.app',
//   },
// ];

export { socialLinks, resourceLinks, heroText, locationPlace, locationCountry };
