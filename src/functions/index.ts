import { lenis } from '@/main';

const textSplitterIntoChar = (
  text: string,
  isFancyFont: boolean = false,
  isNewLine: boolean = false,
): string => {
  const words = text.split(' ');
  const char = words.map((word) => word.split(''));

  let result = '';
  char.forEach((word) => {
    result += '<span class="text-nowrap!  overflow-clip ';
    if (isNewLine) {
      result += ' leading-none block  ';
    } else {
      result += ' inline-block ';
    }
    result += '">';

    word.forEach((char) => {
      let classes =
        'letters translate-y-[120%] inline-block will-change-auto will-change-transform ';
      if (isFancyFont) {
        classes += ' font-fancy ';
      }

      result += `<span class="${classes}">${char}</span>`;
    });

    result += '</span> ';
  });

  return result;
};

const getAvailableForWorkDate = () => {
  const date = new Date();

  const year = date.getFullYear().toString().slice(-2);
  const monthNames = [
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
  ];
  let index = date.getMonth();

  // Uncomment this if you want to include the next month
  // if (date.getMonth() < 12) {
  //   index += 1;
  // }
  const month = monthNames[index];

  return `${month} '${year}`;
};

const gotoSection = (url: string) => {
  lenis.start();
  if (url === '#testimonials-section') {
    lenis.scrollTo('#slider', { duration: 3 });
    return;
  }
  lenis.scrollTo(url, { duration: 3 });
};

export { textSplitterIntoChar, getAvailableForWorkDate, gotoSection };
