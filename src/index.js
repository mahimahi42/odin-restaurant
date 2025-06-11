import renderAboutContent from './about';
import renderHomeContent from './home';
import renderMenuContent from './menu';

const homeButton = document.querySelector('#home-button');
const menuButton = document.querySelector('#menu-button');
const aboutButton = document.querySelector('#about-button');
const content = document.querySelector('#content');

const resetContent = () => {
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
}

homeButton.onclick = () => {
    resetContent();
    renderHomeContent();
}

menuButton.onclick = () => {
    resetContent();
    renderMenuContent();
}

aboutButton.onclick = () => {
    resetContent();
    renderAboutContent();
}

renderHomeContent();
