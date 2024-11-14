

export default function loadAbout() {
    const content = document.createElement('div');
    content.classList.add('tab-content');

    content.id = 'about';

    const about = document.createElement('h1');
    about.textContent = "We love khinkali and so will you!";

    const headline = document.createElement('h2');
    headline.textContent = "CONTACT US";

    const contactInfo = document.createElement('p');
    contactInfo.textContent = "Phone: 123-456-7890 | Email: kinkali@thebest.com";

    content.append(about)
    content.appendChild(headline);
    content.appendChild(contactInfo);

    return content;

}