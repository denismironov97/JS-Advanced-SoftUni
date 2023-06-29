function getPreviousDay(year, month, day) {
    let dateObj = new Date(year, month -= 1, day);
    dateObj.setDate(dateObj.getDate() - 1);

    console.log(`${dateObj.getFullYear()}-${dateObj.getMonth() + 1}-${dateObj.getDate()}`);
}

getPreviousDay(2016, 9, 30);
getPreviousDay(2016, 10, 1);

function getPreviousDayV1(year, month, day) {
    const dateObj = new Date(year, month -= 1, day);
    const previous = new Date(dateObj.getTime());
    previous.setDate(dateObj.getDate() - 1);

    console.log(`${previous.getFullYear()}-${previous.getMonth() + 1}-${previous.getDate()}`);
}