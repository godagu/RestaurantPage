import restaurantImage from '/Users/mac/Documents/RestaurantPage/src/giphy.gif';


export default function loadHomePage() {
    const content = document.createElement('div');
    content.classList.add('tab-content');

    content.id = 'homepage';

    const headline = document.createElement('h1');
    headline.textContent = "KHINKALI GODS";

    const image = document.createElement('img');
    image.src = restaurantImage; 
    image.alt = "Delicious food";

    const description = document.createElement('p');
    description.textContent = "The best khinkali in town. Period.";

    content.appendChild(headline);
    content.appendChild(image);
    content.appendChild(description);

    return content;
}

