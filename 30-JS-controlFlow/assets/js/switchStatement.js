/*
    switch(condition) {
        case 1:
            code to execute 
            break
        case 2: 
            code to execute
            break
        default:
            code to execute

    }
*/

//code to check for primary colours

const primaryColor  = prompt('enter your color name?').toLowerCase();

switch(primaryColor){
    case 'red': 
        alert(`${primaryColor} is a primary color`);
        break;
    case 'green': 
        alert(`${primaryColor} is a primary color`);
        break;
    case 'blue': 
        alert(`${primaryColor} is a primary color`);
        break;
    default: 
        alert(`${primaryColor} is not a primary color`);
}