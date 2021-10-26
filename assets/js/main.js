// Back To Top
function ScrollToTop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
// SideBar
const navbar = document.getElementById('sidebar');

function SidebarToggle() {
	if (navbar.style.left == '0px') {
		navbar.style.left = '-251px';
		var toggle = document.getElementsByClassName('bi-chevron-left')[0];
		toggle.className = '';
		toggle.className += 'bi bi-chevron-right';
		// removing shadow from .sidebar
		var sidebar = document.getElementsByClassName('sidebar')[0];
		sidebar.className = '';
		sidebar.className += 'sidebar';
	} else {
		navbar.style.left = '0px';
		var toggle = document.getElementsByClassName('bi-chevron-right')[0];
		toggle.className = '';
		toggle.className += 'bi bi-chevron-left';
		// Adding shadow to .sidebar
		var sidebar = document.getElementsByClassName('sidebar')[0];
		sidebar.className = '';
		sidebar.className += 'sidebar shadow';
	}
}

function HideNav() {
	if (navbar.style.left == '0px') {
		navbar.style.left = '-251px';
		var toggle = document.getElementsByClassName('bi-chevron-left')[0];
		toggle.className = '';
		toggle.className += 'bi bi-chevron-right';
	}
}
$(document).on('click', function (event) {
	if (!$(event.target).closest('#sidebar').length) {
		HideNav()
	}
});
