/**
    for (initialization, condition, iteration counter){
        if(condition) {
            break
        }
    }
 */

for (i = 1; i <= 10; i++) {
    if(i == 5){
        break;
    }
    console.log(`${i} * 2: ${i * 2}`);
}
