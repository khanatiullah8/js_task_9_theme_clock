var container = document.querySelector('.container');
var modeButton = document.querySelector('.mode-button');
var dark = document.querySelector('.dark');
var light = document.querySelector('.light');
var analogHours = document.querySelector('.analog-hours');
var analogMinutes = document.querySelector('.analog-minutes');
var analogSeconds = document.querySelector('.analog-seconds');
var digitalHoursMinutes = document.querySelector('.digital-hours-minutes');
var digitalAmPm = document.querySelector('.digital-am-pm');
var digitalDay = document.querySelector('.digital-day');
var digitalMonth = document.querySelector('.digital-month');
var digitalDate = document.querySelector('.digital-date');

light.classList.add('display-none');

modeButton.addEventListener('click', function () {
	modeButton.classList.toggle('background-white');
	dark.classList.toggle('display-none');
	light.classList.toggle('display-none');
	container.classList.toggle('background-black');
	analogHours.classList.toggle('linear-background');
	analogMinutes.classList.toggle('linear-background');
	digitalHoursMinutes.classList.toggle('color');
	digitalAmPm.classList.toggle('color');
	digitalDate.classList.toggle('background-white');
})

//************************************************************//

setInterval(function () {
	var dateClock = new Date();
	var date = dateClock.getDate();
	var day = dateClock.getDay();
	var month = dateClock.getMonth();
	var hour = dateClock.getHours();
	var minute = dateClock.getMinutes();
	var second = dateClock.getSeconds();

	analogHours.style.transform = 'rotate(' + ((hour * 30) + ((minute * 6) / 12)) + 'deg)';
	analogMinutes.style.transform = 'rotate(' + (minute * 6 + ((second * 6) / 60)) + 'deg)';
	analogSeconds.style.transform = 'rotate(' + (second * 6) + 'deg)';

	if (minute < 10) minute = '0' + minute;

	if (second < 10) second = '0' + second;

	if (hour >= 12) digitalAmPm.innerHTML = 'pm';

	if (hour > 12) hour = hour - 12;

	if (hour == 00) hour = hour + 12;

	if (hour < 10) hour = '0' + hour;

	digitalHoursMinutes.innerHTML = hour + ':' + minute;
	digitalDate.innerHTML = date;

	var arrday = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
	for (var i = 0; i < day; i++) {
		if (i === (day - 1)) {
			digitalDay.innerHTML = arrday[i];
		}
	}

	var arrmonth = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
	for (var j = 0; j <= month; j++) {
		if (j === month) {
			digitalMonth.innerHTML = arrmonth[j];
		}
	}

}, 0)

//******* js code for : new added html analog-seconds-block ********//

var analogNumber = document.querySelector('.analog-number');
var num = 2;
for (let j = 1; j < 12; j++) {
	if(num < 10) {
		num = '0' + num;
	}
	analogNumber.innerHTML += '<span class="number">' + num + '</span>';
	num++;
}

var analogSecondBlock = document.querySelector('.analog-second-block');
for (let m = 1; m < 60; m++) {
	analogSecondBlock.innerHTML += '<span class="second-block">block</span>';
}

var secondBlock = document.querySelectorAll('.second-block');
for (let n = 0; n < secondBlock.length; n++) {
	secondBlock[n].style.transform = 'rotate(' + (n * 6) + 'deg)';
}