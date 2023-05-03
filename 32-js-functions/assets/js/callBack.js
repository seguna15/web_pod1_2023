const getAge = () => {
    return parseInt(prompt('How old are you?'));
};
   
const checkAge = (age) => {
  if (age >= 18) {
    return true;
  } else {
    return confirm('Do you have permission from your parents?');
  }
};

function showContent (myCallBack1, myCallBack2 ){
    let age = myCallBack1();
    let validationStatus = myCallBack2(age);

    if(validationStatus){
        alert('You can view our content');
    }else{
        alert(`Sorry you have to wait a bit or seek your parent's permission`);
    }
}

//passing the methods as parameters called callbacks
showContent(getAge,checkAge);