const textSplitter = (text: string): string => {
    const words = text.split(' ');
    const char = words.map((word) => word.split(''));

    let result = '';
    char.forEach((word) => {
      result += '<span class="inline-block overflow-clip">';
      word.forEach((char) => {
        result += `<span class="letters translate-y-full inline-block ">${char}</span>`;
      });
      result += '</span> ';
    });

    return result;
}

export {
    textSplitter
}