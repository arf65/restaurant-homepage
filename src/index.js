import { renderHomepage } from './modules/home';
import { renderMenu } from './modules/menu';
import { renderContact } from './modules/contact';

renderHomepage();

document.addEventListener('click', function(e) {
	if (e.target.matches('.navLink')) {
		clearContent();
		e.target.classList.add('currentTab');
		if (e.target.matches('#home')) {
			renderHomepage();
		}
		if (e.target.matches('#menu')) {
			renderMenu();
		}
		if (e.target.matches('#contact')) {
			renderContact();
		}
	}
});

function clearContent() {
	const content = document.getElementById('content');
	content.innerHTML = '';
	const navLinks = document.querySelectorAll('.navLink');
	for (let i = 0; i < navLinks.length; i++) {
		navLinks[i].classList.remove('currentTab');
	}
}

// clearContent();
