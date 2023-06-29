function wordsUpperCase(stringArg) {
  let message = stringArg.toUpperCase();
  let stringArr = message.split(/[\W]+/).filter((w) => w.length > 0);
  const resultMessage = stringArr.join(", ");

  console.log(resultMessage);
}

wordsUpperCase("Hi, how are you?");

function solve1(text) {
  let result = text
    .toUpperCase()
    .split(/[\W]+/)
    .filter((w) => w.length > 0)
    .join(", ");

  console.log(result);
}
