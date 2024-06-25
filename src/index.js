import { homeContent } from './home.js';
import { menuContent } from './menu.js';
import { aboutContent } from './about.js';

const buttons = document.querySelectorAll('button');
const contentDiv = document.getElementById('content');


// A function to clear the existing content
function clearContent() {
    while (contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.firstChild);
    }
}

// Load the initial content
document.addEventListener('DOMContentLoaded', () => {
    homeContent();
});

buttons.forEach((button) => {
	button.addEventListener('click', () => {
		clearContent();

		if (button.textContent === "Home") {
			homeContent();
		} 

		if (button.textContent === "Menu") {
			menuContent();
		}

		if (button.textContent === "About") {
			aboutContent();
		}
	});
});
