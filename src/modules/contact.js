const renderContact = () => {
	const contactContent = document.getElementById('content');
	const contactTitle = document.createElement('h2');
	contactTitle.textContent = 'Contact us';
	contactContent.appendChild(contactTitle);

	const contactText = document.createElement('p');
	contactText.textContent =
		'Feel free to contact us at bens_pastries_support@gmail.com or visit us in person at any of our locations.';
	contactContent.appendChild(contactText);
};

export { renderContact };
