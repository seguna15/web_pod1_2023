/**
    for (initialization, condition, iteration counter){
        if(condition) {
            continue
        }
    }
 */

for (i = 1; i <= 10; i++) {
    if(i % 2 == 0){
        continue;
    }
    console.log(`${i} * 2: ${i * 2}`);
}
