function solve() {
    const text = document.getElementById('text').value.toLowerCase();
    const conventionType = document.getElementById('naming-convention').value.toLowerCase();
    const resultBox = document.getElementById('result');

    let casingResult = [];
    let words = text.split(' ');
    switch (conventionType) {
      case 'camel case':
        casingResult.push(words[0]);
        for (let i = 1; i < words.length; i++) {
          let currWordArr = words[i].split('');
          let firstSymbol = currWordArr[0].toUpperCase();
          currWordArr[0] = firstSymbol;
          currWordArr = currWordArr.join('');
          casingResult.push(currWordArr);
        }
        break;
      case 'pascal case':
        for (let i = 0; i < words.length; i++) {
          let currWordArr = words[i].split('');
          let firstSymbol = currWordArr[0].toUpperCase();
          currWordArr[0] = firstSymbol;
          currWordArr = currWordArr.join('');
          casingResult.push(currWordArr);
        }
        break;
      default:
        resultBox.textContent = 'Error!';
        return;
    }

    const resultString = casingResult.join('');
    document.getElementById('result').textContent = resultString;
}

function solve1() {
  const textValue = document.getElementById("text").value.toLowerCase();
  const namingConvention = document.getElementById("naming-convention").value;
  let parts = textValue.split(" ");
  let textResultColl = null;

  if (namingConvention == "Camel Case") {
    textResultColl = getWordCasing(1, parts, namingConvention);
  } else if (namingConvention == "Pascal Case") {
    textResultColl = getWordCasing(0, parts, namingConvention);
  } else {
    //Error!
    document.querySelector("#result").textContent = "Error!";
    return;
  }

  const textCasingResult = textResultColl.join('');
  document.querySelector('#result').textContent = textCasingResult;

  function getWordCasing(startIndex, partsArg, casingType) {
    let textResultColl = [];
    for (let i = startIndex; i < partsArg.length; i++) {
      let currWord = partsArg[i];
      let firstChar = currWord[0].toUpperCase();
      let pascalCaseWord = firstChar + currWord.substring(1);
      textResultColl.push(pascalCaseWord);
    }

    if(casingType == 'Camel Case') {
      textResultColl.unshift(partsArg[0]);
    }

    return textResultColl;
  }
}