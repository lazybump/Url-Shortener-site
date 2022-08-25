// Display error when there's no input
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



// Server endpoint
const endpoint = '/server';


// Consume API
const sendToBackend = async () => {
    const data = JSON.stringify({ userInput: input.value });
    try {
        const response = await fetch(
            endpoint, {
                method: 'POST',
                body: data,
                headers: {
                'Content-type': 'application/json'
                }
            });
        if(response.ok){
            const jsonResponse = await response.json();
            storeLinks(jsonResponse);
        }
    } catch (error) {
        console.log(error);
    }
};



let originalLink, shortLink;

// Grab relevant info from Rebrandly API
const storeLinks = res => {
    originalLink = res.destination;
    shortLink = res.shortUrl;
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