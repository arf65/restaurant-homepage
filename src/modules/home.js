const renderHomepage = () => {
	const homepageContent = document.getElementById('content');
	const homepageContainer = document.createElement('div');
	homepageContent.appendChild(homepageContainer);
	const title = document.createElement('h1');
	title.textContent = "Ben's Tasty Pastries";
	homepageContainer.appendChild(title);
	const promotionalText = document.createElement('p');
	promotionalText.textContent =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit.Fuga enim dignissimos at neque, in excepturi impedit similique nemo aliquam voluptate, repellat dolore pariatur.Aliquid, rerum architecto nisi similique aut soluta!Expedita voluptas rem earum voluptatum odio dignissimos exercitationem dolorem soluta dolore recusandae fuga corrupti dolor, illum id quas, tenetur maxime possimus, laborum non ? Dolorem quas natus, impedit similique sed beatae.';
	homepageContainer.appendChild(promotionalText);
};

export { renderHomepage };
