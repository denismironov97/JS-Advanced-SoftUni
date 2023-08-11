function search() {
   const searchField = document.getElementById('searchText');
   const towns = [...document.querySelectorAll('#towns li')];
   const resultBox = document.getElementById('result');
   const regEx = new RegExp(`${searchField.value}`, 'i');

   let matchCount = 0;
   for (const currLiElem of towns) {
      const currTown = currLiElem.textContent;
      const hasMatch = regEx.test(currTown);

      if(hasMatch) {
         matchCount++;
         currLiElem.style.fontWeight = 'bold';
         currLiElem.style.textDecoration = 'underline';
      }
   }
   const matchResults = `${matchCount} matches found`;
   resultBox.textContent = matchResults;
}
