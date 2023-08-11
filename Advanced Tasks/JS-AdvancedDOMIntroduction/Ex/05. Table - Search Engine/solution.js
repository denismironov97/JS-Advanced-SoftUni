function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const searchField = document.getElementById('searchField');
      const regEx = new RegExp(searchField.value, 'i');
      const students = Array.from(document.querySelectorAll('tbody tr'));
      for (const currStudentRow of students) {
         [studentName, studentMail, studentCourse] = Array.from(currStudentRow.children);
         const matchText = `${studentName.textContent} ${studentMail.textContent} ${studentCourse.textContent}`;
         
         if(regEx.test(matchText)) {
            currStudentRow.classList.add('select');
         }
      }

      searchField.value = '';
   }
}

//parentElementTrRef.classList.add('select');//Adding attribute of type class with wanted attribute value = 'select';
//parentElementTrRef.setAttribute('class', 'select');