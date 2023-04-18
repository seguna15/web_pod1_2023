//alert
//alert('hello world');

//prompt
/* let username = prompt('enter username', 'default user');
alert(username); */

let deleteOption = confirm('Are you sure you want to delete');

if(deleteOption){
    alert('Item deleted successfully');
}else{
    alert('User did not delete item');
}
