const homeContent = () => {
	const contentDiv = document.querySelector("#content");

	const homeDiv = document.createElement("div");
	const homeH1 = document.createElement("h1");
	homeH1.textContent = "Our Coffee";

	const homePara = document.createElement("p");
	homePara.textContent = "When it comes to the important stuff - the coffee - we are committed to sourcing and serving one of the highest quality and we believe is nothing of the best coffee possible";



	homeDiv.appendChild(homeH1);
	homeDiv.appendChild(homePara);
	contentDiv.appendChild(homeDiv);
}



export { homeContent };