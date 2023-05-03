const checkAge = () => {
    const age = parseInt(prompt("How old are you?"));
    if(age >= 18) {
        return true;
    }else{
        return confirm('Do you have permission form your parents?'); 
    }
};

alert(checkAge());
