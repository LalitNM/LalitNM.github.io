// Back To Top
function ScrollToTop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
// SideBar
const navbar = document.getElementById('sidebar');

function SidebarToggle() {
	if (navbar.style.left == '0px') {
		navbar.style.left = '-250px';
		var toggle = document.getElementsByClassName('fa-arrow-left')[0];
		toggle.className = '';
		toggle.className += 'fa fa-arrow-right';
	} else {
		navbar.style.left = '0px';
		var toggle = document.getElementsByClassName('fa-arrow-right')[0];
		toggle.className = '';
		toggle.className += 'fa fa-arrow-left';
	}
}

function HideNav() {
	if (navbar.style.left == '0px') {
		navbar.style.left = '-250px';
		var toggle = document.getElementsByClassName('fa-arrow-left')[0];
		toggle.className = '';
		toggle.className += 'fa fa-arrow-right';
	}
}
// update the currrent state (where I am studying)
function StudyYear() {
	var d = new Date();
	year = d.getFullYear();
	month = d.getMonth();
	numbers = ['first', 'second', 'third', 'forth']
	states = ['undergraduate', 'postgraduate']
	if (month > 5 && year < 2022) {
		state = numbers[(year - 2019)] + ' year ' + states[0] + ' student at';
	} else if (month <= 5 && year <= 2022) {
		state = numbers[(year - 2019) - 1] + ' year ' + states[0] + ' student at';
	} else if (year >= 2022 && year <= 2024) {
		state = states[1] + ' student at';
	} else {
		state = 'postgraduate from';
	}
	document.getElementById('studyYear').innerText = state;
}
$(document).on('click', function (event) {
	if (!$(event.target).closest('#sidebar').length) {
		HideNav()
	}
});
