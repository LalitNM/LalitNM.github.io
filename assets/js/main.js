function ScrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
function SidebarToggle() {
    var navbar = document.getElementById('sidebar');
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
    var navbar = document.getElementById('sidebar');
    if (window.pageYOffset > 0) {
        navbar.style.left = '-250px';

        var toggle = document.getElementsByClassName('fa-arrow-left')[0];
        toggle.className = '';
        toggle.className += 'fa fa-arrow-right';
    }
}