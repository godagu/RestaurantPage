import loadHomePage from './home';
import loadMenu from './menu';
import loadAbout from './about';
import './styles.css';


function clearContent() {
    const content = document.getElementById('content');
    content.innerHTML = '';
}

function setUpTabs() {
    const homeButton = document.querySelector('nav button:nth-child(1)');
    const menuButton = document.querySelector('nav button:nth-child(2)');
    const aboutButton = document.querySelector('nav button:nth-child(3)');

    homeButton.addEventListener('click', () => {
        clearContent();
        document.getElementById('content').appendChild(loadHomePage());
    });

    menuButton.addEventListener('click', () => {
        clearContent();
        document.getElementById('content').appendChild(loadMenu());
    });

    aboutButton.addEventListener('click', () => {
        clearContent();
        document.getElementById('content').appendChild(loadAbout());
    });
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('content').appendChild(loadHomePage());
    setUpTabs();
});