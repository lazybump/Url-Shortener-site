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
    newDiv.className = 'new-link-container';
    let contents = [
        `<p class="original">${originalLink}</p>`,
        '<hr>',
        `<p class="new">${shortLink}</p>`,
        '<button class="copy-btn">Copy</button>'
    ]
    contents.forEach(content => newDiv.innerHTML += content);
    linksContainer.appendChild(newDiv);

    const copyButtons = document.querySelectorAll('.copy-btn');
    const newestButton = copyButtons[copyButtons.length - 1]
    newestButton.onclick = e => {
        e.target.style.backgroundColor = 'var(--dark-violet)';
        e.target.innerHTML = 'Copied!';
    };
}