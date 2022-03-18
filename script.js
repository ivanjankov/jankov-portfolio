let bodyElement = document.getElementById('body-content');
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((link) => {
	link.addEventListener('click', getMenuLinkData);
});

function getMenuLinkData(e) {
	removeActiveClassFromNavLinks();
	e.target.classList.add('active');
}

function removeActiveClassFromNavLinks() {
	navLinks.forEach((link) => {
		if (link.classList.contains('active')) {
			link.classList.remove('active');
		}
	});
}
