import bobaImg from './assets/boba.jpg';
import latteImg from './assets/latte.jpg';
import cappuccinoImg from './assets/cappuccino.jpg';


const menuItems = [
	{img: cappuccinoImg, text: "Boba"},
	{img: latteImg, text: "Latte"},
	{img: cappuccinoImg, text: "Cappuccino"}

	];

const menuContent = () => {
	const contentDiv = document.querySelector("#content");

	const menuDiv = document.createElement('div');
	menuDiv.setAttribute('class', 'menu');
	const menuH1 = document.createElement('h1');
	menuH1.textContent = "The Menu";
	menuDiv.appendChild(menuH1);

	menuItems.forEach((item, index) => {
		const itemDiv = document.createElement('div');
		itemDiv.setAttribute('class', 'menuItem')
		itemDiv.id = `item${index + 1}`;

		const itemImg = document.createElement('img');
		itemImg.src = item.img;

		const itemH3 = document.createElement('h3');
		itemH3.textContent = item.text;

		itemDiv.appendChild(itemImg);
		itemDiv.appendChild(itemH3);
		menuDiv.appendChild(itemDiv);

		itemDiv.addEventListener('mouseover', () => {
			menuDiv.classList.add('paused');
		});

		itemDiv.addEventListener('mouseout', () => {
			menuDiv.classList.remove('paused');
		});
		
	});


	return contentDiv.appendChild(menuDiv);
}

export { menuContent };