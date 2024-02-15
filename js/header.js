let menuItems = [
    'Home',
    'Porfolio',
    'Awards',
    'About',
    'Contact'
];

let urls = [
    "index.html",
    "portfolio.html",
    "https://www.emmys.com/",
    "about.html",
    "contact.html"
];

window.onload = function() {
    /*menu elements and loop*/
    let index = 0;
    let menuElement = document.getElementById('menu');
    menuElement.style.border = 'none';

    let ulElement = document.querySelector('ul');
    ulElement.classList.add('horizontal-menu'); //found in styles.css

    menuItems.forEach(function(text, index) {
            let li = document.createElement('li');
            li.innerHTML = text;

            let linkElement = document.createElement('a');
            linkElement.href = urls[index];
            linkElement.textContent = menuItems[index];
            linkElement.classList.add('link'+index);

            li.setAttribute('a', urls[index]);
            ulElement.appendChild(linkElement);
    });
}
