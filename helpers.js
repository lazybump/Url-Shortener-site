// Error display when there's no input
function toggleErrorOn() {
    input.style.border = '3px solid var(--red)';
    error.innerHTML = 'Please add a link';
    error.style.color = 'var(--red)';
}

// Turn error message off
function toggleErrorOff() {
    input.style.border = 'none';
    error.innerHTML = '';
    error.style.color = 'none';
}


// Switches to input field when 'Get started' is clicked
getStartedButton.addEventListener('click', () => {
    input.focus();
});


// Consume API
async function shortenUrl() {
    const endpoint = 'https://api.shrtco.de/v2/shorten?url=' + input.value;
    try {
        const response = await fetch(endpoint);
        if (response.ok) {
            const jsonResponse = await response.json();
            storeLinks(jsonResponse);
        } else {
            throw new Error('Request failed!');
        }
    } catch (error) {
        console.log(error);
    }
};


let originalLink, shortLink;

// Grab relevant info from API
const storeLinks = res => {
    originalLink = res.result.original_link;
    shortLink = res.result.full_short_link;
}


function copyLink(e) {
    const content = e.target.previousElementSibling.innerText;
    navigator.clipboard.writeText(content);
    e.target.style.backgroundColor = 'var(--dark-violet)';
    e.target.innerHTML = 'Copied!';
};


function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.hidden = !(nav.hidden)
}