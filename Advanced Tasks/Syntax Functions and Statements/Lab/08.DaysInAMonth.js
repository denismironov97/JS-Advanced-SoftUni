function getDaysInMonth(month, year) {
  let daysInSpecificMonth = new Date(year, month, 0);
  console.log(daysInSpecificMonth.getDate());
}

getDaysInMonth(1, 2012);
