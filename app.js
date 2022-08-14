const form = document.querySelector('form');
const linksContainer = document.getElementById('links-container');
const input = document.getElementById('link-input');
const error = document.getElementById('error');


const generateLink = async (e) => {
    e.preventDefault();
    let query = input.value;
    // Reset input field
    input.value = '';
    // Error validation
    if (query === '' || query === null) {
        toggleErrorOn();
        return;
    } else {
        toggleErrorOff();
    }
    // Consume API
    const endpoint = 'https://api.shrtco.de/v2/shorten?url=' + query;
    try {
        const response = await fetch(endpoint);
        if (response.ok) {
            const jsonResponse = await response.json();
            getLinks(jsonResponse);
            renderNewLink();
        } else {
            throw new Error('Request failed bro');
        }
    } catch (error) {
        console.log(error);
    }
};


form.addEventListener('submit', generateLink);