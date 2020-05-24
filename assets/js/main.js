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
    }
    else {
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

$(document).on('click', function (event) {
    if (!$(event.target).closest('#sidebar').length) {
      HideNav()
    }
  });