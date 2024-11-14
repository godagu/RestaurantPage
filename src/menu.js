

export default function loadMenu(){
    const content = document.createElement('div');
    content.classList.add('tab-content');

    content.id = 'menu';

    const headline = document.createElement('h1');
    headline.textContent = "MENU";

    const menuList = document.createElement('ul');
    menuList.innerHTML = `
        <li>Khinkali with meet</li>
        <li>Khinkali with cheese</li>
        <li>Khinkali with mushrooms</li>
    `;

    content.appendChild(headline);
    content.appendChild(menuList);

    return content;
}