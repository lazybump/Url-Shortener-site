const form = document.querySelector('form');
const linksContainer = document.getElementById('links-container');
const input = document.getElementById('link-input');
const error = document.getElementById('error');
const getStartedButton = document.querySelector('.get-started-btn');


// Retrieve link pairs from local storage if there are any
const linkPairs = JSON.parse(localStorage.getItem('Link Pairs')) || [];

// Add link pair object to array, and localStorage, then return it
const addPair = (long, short) => {
    let obj = {
        long,
        short
    }
    
    linkPairs.push(obj)

    localStorage.setItem('Link Pairs', JSON.stringify(linkPairs));
    return obj;
};


const renderLinks = ({ long, short }) => {
    const newDiv = document.createElement('div');
    newDiv.className = 'new-link-container';

    let contents = [
        `<p class="original">${long}</p>`,
        '<hr>',
        `<p class="new">${short}</p>`,
        '<button class="copy-btn">Copy</button>'
    ]
    
    contents.forEach(content => newDiv.innerHTML += content);

    linksContainer.appendChild(newDiv);

    const copyButtons = document.querySelectorAll('.copy-btn');
    const lastCopyBtn = copyButtons[copyButtons.length - 1]
    
    lastCopyBtn.addEventListener('click', copyLink);
};


// Rebuild the links on the page after each refresh
linkPairs.forEach(renderLinks);



form.onsubmit = (e) => {
    e.preventDefault();

    // Input validation
    if (input.value === '' || input.value === null) {
        toggleErrorOn();
        return;
    } else {
        toggleErrorOff();
    }

    sendToBackend().then(() => {
        const newPair = addPair(originalLink, shortLink);
        renderLinks(newPair);
    });
    form.reset();
};


const burgerIcon = document.querySelector('.burger-icon');

burgerIcon.onclick = toggleMenu;