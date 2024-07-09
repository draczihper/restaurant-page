import callIcon from './assets/call.png';
import pinIcon from './assets/pin.png';
import facebookIcon from './assets/facebook.png';
import instagramIcon from './assets/instagram.png';
import twitterIcon from './assets/twitter.png';


const contactContent = () => {
	const contentDiv = document.querySelector('#content');

	const contactDiv = document.createElement('div');
	contactDiv.setAttribute('class', 'contact');

	const cardDiv = document.createElement('div');
	cardDiv.setAttribute('class', 'card');
	const cardH3 = document.createElement('h3');
	cardH3.textContent = "Find Us";
	// cardDiv.appendChild(cardH3);

	const addressDiv = document.createElement('div');
	addressDiv.setAttribute('class', 'address');
	cardDiv.appendChild(addressDiv);

	const locationDiv = document.createElement('div');
	const locationIcon = document.createElement('img');
	locationIcon.src = pinIcon;
	const locationText = document.createElement('p');
	locationText.textContent = "4897 Maggie Plaza, West Robert, SC 31203-4313";
	locationDiv.appendChild(locationIcon);
	locationDiv.appendChild(locationText);
	addressDiv.appendChild(locationDiv);

	const phoneDiv = document.createElement('div');
	const phoneIcon = document.createElement('img');
	phoneIcon.src = callIcon;
	const phoneText = document.createElement('p');
	phoneText.textContent = "+ 255 26 - 2720900";
	phoneDiv.appendChild(phoneIcon);
	phoneDiv.appendChild(phoneText)
	addressDiv.appendChild(phoneDiv);

	const socialDiv = document.createElement('div');
	addressDiv.appendChild(socialDiv);

	const instagramLink = document.createElement('a');
	instagramLink.setAttribute("href", "https://www.instagram.com/pictoristudios/");
	const igIcon = document.createElement('img');
	igIcon.src = instagramIcon;
	instagramLink.appendChild(igIcon);
	socialDiv.appendChild(instagramLink);

	const facebookLink = document.createElement('a');
	facebookLink.setAttribute("href", "https://www.facebook.com/pictoristudios/");
	const fbIcon = document.createElement('img');
	fbIcon.src = facebookIcon;
	facebookLink.appendChild(fbIcon);
	socialDiv.appendChild(facebookLink);

	const twitterLink = document.createElement('a');
	twitterLink.setAttribute("href", "https://www.twitter.com/pictoristudios/");
	const tIcon = document.createElement('img');
	tIcon.src = twitterIcon;
	twitterLink.appendChild(tIcon);
	socialDiv.appendChild(twitterLink);


	const mapDiv = document.createElement('div');
	mapDiv.innerHTML = `
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.180985099609!2d39.28154817420411!3d-6.747768393248624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4d665a214a27%3A0x85e7c3ee11c6b03e!2sShoppers%20Plaza%20Masaki!5e0!3m2!1sen!2stz!4v1719317059468!5m2!1sen!2stz" width="400" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
`;
	addressDiv.appendChild(mapDiv);


	const formDiv = document.createElement('div');
	const formH3 = document.createElement('h3');
	formH3.textContent = 'Order Here';
	formDiv.appendChild(formH3);

	var form = document.createElement('form');
	form.setAttribute('method', 'post');
	form.setAttribute('action', '/');

	var inputMenu = document.createElement('input');
	inputMenu.setAttribute("type", "text");
    inputMenu.setAttribute("name", "Menu");
    inputMenu.setAttribute("placeholder", "What would you like to order?");

    var inputAddress = document.createElement('input');
	inputAddress.setAttribute("type", "text");
    inputAddress.setAttribute("name", "address");
    inputAddress.setAttribute("placeholder", "Where should we deliver it?");

    var inputComment = document.createElement('textarea');
	inputComment.setAttribute("type", "text");
    inputComment.setAttribute("name", "comment");
    inputComment.setAttribute("placeholder", "Anything else?");

    var s = document.createElement("input");
    s.setAttribute("type", "submit");
    s.setAttribute("value", "Send");

    form.appendChild(inputMenu);
    form.appendChild(inputAddress);
    form.appendChild(inputComment);

    form.appendChild(s);

    formDiv.appendChild(form);

    cardDiv.appendChild(formDiv);

    contactDiv.appendChild(cardDiv);

    return contentDiv.appendChild(contactDiv);

}



export { contactContent };