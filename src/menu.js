import bobaImg from './assets/boba.jpg';
import latteImg from './assets/latte.jpg';
import cappuccinoImg from './assets/cappuccino.jpg';


const menuItems = [
	{img: bobaImg, text: "Boba"},
	{img: latteImg, text: "Latte"},
	{img: cappuccinoImg, text: "Cappuccino"}

	];

const menuContent = () => {
	const contentDiv = document.querySelector("#content");

	const menuDiv = document.createElement('div');
	const menuH1 = document.createElement('h1');
	menuH1.textContent = "The Menu";
	menuDiv.appendChild(menuH1);

	menuItems.forEach(item => {
		const itemDiv = document.createElement('div');

		const itemImg = document.createElement('img');
		itemImg.src = item.img;

		const itemH3 = document.createElement('h3');
		itemH3.textContent = item.text;

		itemDiv.appendChild(itemImg);
		itemDiv.appendChild(itemH3);
		menuDiv.appendChild(itemDiv);


	})


	return contentDiv.appendChild(menuDiv);
}

export { menuContent };