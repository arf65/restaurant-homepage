const renderMenu = () => {
	const menuContent = document.getElementById('content');
	const menuContainer = document.createElement('div');
	menuContainer.setAttribute('class', 'menuContainer');
	menuContent.appendChild(menuContainer);

	const item1 = document.createElement('div');
	item1.setAttribute('class', 'item1');
	menuContainer.appendChild(item1);
	const item1Text = document.createElement('h2');
	item1Text.textContent = 'Cinnamon rolls';
	item1.appendChild(item1Text);
	const item1Image = document.createElement('img');
	item1Image.setAttribute(
		'src',
		'https://images.unsplash.com/photo-1509365465985-25d11c17e812?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
	);
	item1Image.setAttribute('alt', 'A tray of cinnamon rolls');
	item1.appendChild(item1Image);

	const item2 = document.createElement('div');
	item2.setAttribute('class', 'item2');
	menuContainer.appendChild(item2);
	const item2Text = document.createElement('h2');
	item2Text.textContent = 'Peach, lavender tart';
	item2.appendChild(item2Text);
	const item2Image = document.createElement('img');
	item2Image.setAttribute(
		'src',
		'https://images.unsplash.com/photo-1505656031945-da477b4f1b31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
	);
	item2Image.setAttribute('alt', 'A peach lavender tart');
	item2.appendChild(item2Image);

	const item3 = document.createElement('div');
	menuContainer.appendChild(item3);
	const item3Text = document.createElement('h2');
	item3Text.textContent = 'Croissants';
	item3.appendChild(item3Text);
	const item3Image = document.createElement('img');
	item3Image.setAttribute(
		'src',
		'https://images.unsplash.com/photo-1530610476181-d83430b64dcd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
	);
	item3Image.setAttribute('alt', 'A bowl filled with croissants');
	item3.appendChild(item3Image);

	const item5 = document.createElement('div');
	menuContainer.appendChild(item5);
	const item5Text = document.createElement('h2');
	item5Text.textContent = 'Honey cake';
	item5.appendChild(item5Text);
	const item5Image = document.createElement('img');
	item5Image.setAttribute(
		'src',
		'https://images.unsplash.com/photo-1572897305697-f8adb93dae8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
	);
	item5Image.setAttribute('alt', 'A wire rack with squares of honey cake on it');
	item5.appendChild(item5Image);

	const item4 = document.createElement('div');
	menuContainer.appendChild(item4);
	const item4Text = document.createElement('h2');
	item4Text.textContent = 'Almond Scones';
	item4.appendChild(item4Text);
	const item4Image = document.createElement('img');
	item4Image.setAttribute(
		'src',
		'https://images.unsplash.com/photo-1557779140-30d5e144e964?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
	);
	item4Image.setAttribute('alt', 'A plate of almond scones');
	item4.appendChild(item4Image);

	const item6 = document.createElement('div');
	menuContainer.appendChild(item6);
	const item6Text = document.createElement('h2');
	item6Text.textContent = 'Almond cream ring';
	item6.appendChild(item6Text);
	const item6Image = document.createElement('img');
	item6Image.setAttribute(
		'src',
		'https://images.unsplash.com/photo-1517401371900-1f56ae9f71e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
	);
	item6Image.setAttribute('alt', 'A baked, cream filled pastry with almond garnish on a wire rack');
	item6.appendChild(item6Image);
};

export { renderMenu };
