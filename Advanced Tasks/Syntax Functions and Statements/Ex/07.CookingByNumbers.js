function cookingByNumbers(numString, command1, command2, command3, command4, command5) {
    let number = +numString;//Number(numString);
    number = performOperation(number, command1);
    console.log(number);
    number = performOperation(number, command2);
    console.log(number);
    number = performOperation(number, command3);
    console.log(number);
    number = performOperation(number, command4);
    console.log(number);
    number = performOperation(number, command5);
    console.log(number);
    
    function performOperation(numArg, instruction) {
        switch (instruction) {
            case 'chop':
                numArg /= 2;
                break;
            case 'dice':
                numArg = Math.sqrt(numArg);
                break;
            case 'spice':
                numArg++;
                break;
            case 'bake':
                numArg *= 3;
                break;
            case 'fillet':
                numArg *= 0.8;
                
                break;
        }
        
        numArg = Math.round(numArg * 10) / 10;
        return numArg;
    }
}

//cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');