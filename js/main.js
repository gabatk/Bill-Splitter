// const countBtn = document.querySelector('.count');
// const formFields = document.querySelectorAll('.form-field');
// const billPerPerson = document.querySelector('.cost');
// const costInfo = document.querySelector('.cost-info');
// const errorField = document.querySelector('.error');

// const tipValue = () => {
// 	let billValue = Number(formFields[0].value);
// 	let people = Number(formFields[1].value);
// 	let tipRate = Number(formFields[2].value);

// 	if (billValue != 0 && people != 0 && tipRate != 0) {
// 		billPerPerson.textContent = (
// 			(billValue + billValue * tipRate) /
// 			people
// 		).toFixed(2);
// 		costInfo.style.display = 'block';
// 		errorField.textContent = '';
// 	} else {
// 		errorField.textContent = 'All fields must be completed!';
// 	}
// };

// countBtn.addEventListener('click', tipValue);

// Rozwiązanie 2.
const countBtn = document.querySelector('.count');
const price = document.querySelector('#price');
const people = document.querySelector('#people');
const tip = document.querySelector('#tip');
const billPerPerson = document.querySelector('.cost');
const costInfo = document.querySelector('.cost-info');
const error = document.querySelector('.error');

const tipValue = () => {
	if (price.value == '' || people.value == '' || tip.value == 0) {
		error.textContent = 'All fields must be completed!';
	} else {
		error.textContent = '';
		countBill();
	}
};

const countBill = () => {
	const billValue = parseFloat(price.value);
	const peopleNumber = parseInt(people.value);
	const tipRate = parseFloat(tip.value);

	billPerPerson.textContent = ((billValue + billValue * tipRate) /peopleNumber).toFixed(2);
	costInfo.style.display = 'block';
};

countBtn.addEventListener('click', tipValue);
