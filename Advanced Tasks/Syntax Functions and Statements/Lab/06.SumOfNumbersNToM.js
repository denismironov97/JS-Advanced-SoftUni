function numsNtoM(nArg, mArg) {
    let sum = 0;
    let end = +mArg;
    for (let index = +nArg; index <= end; index++) {
        sum += index;
    }

    console.log(sum);
}

numsNtoM('-8', '20');