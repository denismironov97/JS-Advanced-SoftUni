function daysOfWeek(dayOfWeek) {
    let num = 0;
    switch (dayOfWeek) {
        case 'Monday':
            num = 1;
            break;
        case 'Tuesday':
            num = 2;
            break;
        case 'Wednesday':
            num = 3;
            break;
        case 'Thursday':
            num = 4;
            break;
        case 'Friday':
            num = 5;
            break;
        case 'Saturday':
            num = 6;
            break;
        case 'Sunday':
            num = 7;
            break;
        default:
            console.log('error');
            return;
    }

    console.log(num);
}