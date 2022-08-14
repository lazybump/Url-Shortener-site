const form = document.querySelector('form');
const linksContainer = document.getElementById('links-container');
const input = document.getElementById('link-input');
const error = document.getElementById('error');


const generateLink = async (e) => {
    e.preventDefault();

    // Error validation
    if (input.value === '' || input.value === null) {
        toggleErrorOn();
        return;
    } else {
        toggleErrorOff();
    }
    // Consuming API
    const endpoint = 'https://api.shrtco.de/v2/shorten?url=' + input.value;
    try {
        const response = await fetch(endpoint);
        if (response.ok) {
            const jsonResponse = await response.json();
            // console.log(jsonResponse);
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