let passField1 = document.querySelector('#pass1');
let passField2 = document.querySelector('#pass2');

document.querySelector('#validate').addEventListener('click', () => {
	if(passField1.value != passField2.value)
		alert("Passwords do not match!");
	else if(passField1.value.length < 8)
		alert("Password must be at least 8 characters!");
	else
		alert("Password Valid!");
});