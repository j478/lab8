let colors = ["red", "green", "blue"]
let borderColor = document.querySelector('#border');
let backgroundColor = document.querySelector('#bg');

document.querySelector('#submit').addEventListener('click', () => {
	let borderBool = false;
	let bgBool = false;
	for(let i=0;i<3;i++)
	{
		if(borderColor.value == colors[i])
			borderBool = true;
		if(backgroundColor.value == colors[i])
			bgBool = true;
	}
	if(borderBool)
		document.querySelector('#text_field').style.borderColor = borderColor.value;
	if(bgBool)
		document.querySelector('#text_field').style.backgroundColor = backgroundColor.value;
	if(!borderBool || !bgBool)
		alert("Invalid Input!\nValid colors are 'red', 'blue', and 'green'");
});