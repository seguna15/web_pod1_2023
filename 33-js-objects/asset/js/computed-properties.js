const fruit = prompt('Which fruit do you want', 'Apple');
const bag = {
    [fruit]: 5
}

alert(bag[fruit]);