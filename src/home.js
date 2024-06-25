import caffeImg from './assets/caffe.jpg';

const homeContent = () => {
	const contentDiv = document.querySelector("#content");

	const homeDiv = document.createElement("div");
	const homeH1 = document.createElement("h1");
	homeH1.textContent = "Our Drinks";

	const homePara = document.createElement("p");
	homePara.textContent = "When it comes to the important stuff - the drink - we are committed to sourcing and serving is one of the highest quality and we believe is nothing short of the best drink possible";


	const img = document.createElement("img");
	img.src = caffeImg;
	homeDiv.appendChild(img);



	homeDiv.appendChild(homeH1);
	homeDiv.appendChild(homePara);

	return contentDiv.appendChild(homeDiv);
}



export { homeContent };