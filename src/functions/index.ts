const textSplitter = (text: string, isFancyFont: boolean = false): string => {
  const words = text.split(' ');
  const char = words.map((word) => word.split(''));

  let result = '';
  char.forEach((word) => {
    result += '<span class="inline-block overflow-clip">';
    word.forEach((char) => {
      let classes = 'letters translate-y-full inline-block ';
      if (isFancyFont) {
        classes += ' font-fancy ';
      }
      result += `<span class="${classes}">${char}</span>`;
    });
    result += '</span> ';
  });

  return result;
};

export { textSplitter };
