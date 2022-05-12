const global = {
    searchHistory: []
}

const setup = () => {
    loadCards()

    let button = document.getElementById('submitbtn');
    button.addEventListener('click', searchButtonClicked)
}

const loadCards = () => {
    global.searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || []
    global.searchHistory.forEach(card => {
        makeCard(card['url'], card['title'], card['text'])
    })
}

const searchButtonClicked = () => {
    let input = document.getElementById('zoekopdracht').value;
    let inputArray = input.split(' ');
    let prefix = inputArray.shift();
    let search = inputArray.join(' ');
    console.log(prefix, search)
    document.getElementById('zoekopdracht').value = "";
    let url = checkPrefix(prefix, '', inputArray);



    if (url[0] !== '') {
        window.open(url[0], '_blank');
        makeCard(url[0], url[1], search);
        makeSearchObject(url[1],search ,url[0]);
    }
}

const checkPrefix = (prefix, url, search) => {
    let title = '';

    if(search.length > 0) {
        if(search.length > 1) {
            search = search.join('+');
        } else {
            search = search[0];
        }
    } else {
        search = '';
    }

    console.log(search);
    if (prefix === '/g') {
        url = 'https://www.google.com/search?q=' + search;
        title = 'Google';
    }
    else if (prefix === '/y') {
        url = 'https://www.youtube.com/results?search_query=' + search;
        title = 'YouTube';
    }
    else if (prefix === '/t') {
        url = 'https://twitter.com/search?q=' + search;
        title = 'Twitter';
    }
    else if (prefix === '/i') {
        url = 'https://www.instagram.com/explore/tags/' + search;
        title = 'Instagram';
    }
    else if (prefix.startsWith('/')) {
        alert('Unknown command prefix');
    } else {
        alert('Invalid command');
    }
    return [url, title, search];
}

const makeCard = (url, title, search) => {
    let container = document.getElementById('history');
    let color = getColors(title);

    let card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('col-3');
    card.classList.add('me-4');
    card.classList.add('mt-2');
    card.style.backgroundColor = color[0];
    card.style.color = 'white';

    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    let cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.innerHTML = title;

    let cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.innerHTML = search;

    let cardLink = document.createElement('a');
    cardLink.classList.add('btn');
    cardLink.style.backgroundColor = color[1];
    cardLink.setAttribute('href', url);
    cardLink.setAttribute('target', '_blank');
    cardLink.style.color = 'white';
    cardLink.innerHTML = 'GO';

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardLink);
    card.appendChild(cardBody);

    container.appendChild(card);

}

const makeSearchObject = (title, text, url) => {
    let h = {
        title: title,
        text: text,
        url: url
    };
    global.searchHistory.push(h);
    localStorage.setItem('searchHistory', JSON.stringify(global.searchHistory));
}

const getColors = (website) => {
    if (website === 'Google') {
        return ['#4285F4', '#ea4335'];
    }
    else if (website === 'YouTube') {
        return ['#FF0000', '#000000'];
    }
    else if (website === 'Twitter') {
        return ['#1DA1F2', '#FFFFFF'];
    }
    else if (website === 'Instagram') {
        return ['#c32aa3', '#f46f30'];
    }
}

window.addEventListener("load", setup);



