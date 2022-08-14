function toggleErrorOn() {
    input.style.border = '3px solid var(--red)';
    error.innerHTML = 'Please add a link';
    error.style.color = 'var(--red)';
}

function toggleErrorOff() {
    input.style.border = 'none';
    error.innerHTML = '';
    error.style.color = 'none';
}

let originalLink, shortLink;

const getLinks = res => {
    originalLink = res.result.original_link;
    shortLink = res.result.full_short_link;
}


const renderNewLink = () => {
    let newDiv = document.createElement('div');
    newDiv.className = 'new-link';
    newDiv.innerHTML += `<p class="original">${originalLink}</p>`;
    newDiv.innerHTML += '<hr>';
    newDiv.innerHTML += `<p class="new">${shortLink}</p>`;
    newDiv.innerHTML += '<button class="copy-btn">Copy</button>';
    linksContainer.appendChild(newDiv);
}