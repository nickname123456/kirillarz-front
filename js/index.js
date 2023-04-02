let place_for_cards = document.querySelector('.place-for-cards');

let cards_data = [
    {
        img: 'assets/python.png',
        know: ['test', 'test2', 'test3'],
        learn: ['test', 'test2', 'test3'],
        projects: ['test', 'test2', 'test3']
    },
    {
        img: 'assets/HTML.png',
        know: ['test', 'test2', 'test3'],
        learn: ['test', 'test2', 'test3'],
        projects: ['test', 'test2', 'test3']
    },
    {
        img: 'assets/js.png',
        know: ['test', 'test2', 'test3'],
        learn: ['test', 'test2', 'test3'],
        projects: ['test', 'test2', 'test3']
    },
    {
        img: 'assets/CSS.svg',
        know: ['test', 'test2', 'test3'],
        learn: ['test', 'test2', 'test3'],
        projects: ['test', 'test2', 'test3']
    },
];

for (let i = 0; i < cards_data.length; i++) {
    let card = cards_data[i];
    card_HTML = `
    <div class="margin-of-card">
    <div class="cartochka">
        <div class="place-for-image">
            <img src="${card.img}" class="image">
        </div>
        <div class="place-for-details d-none">
            <div class="detail i-know">
                <h3>Знаю:</h3>
                <ul class="">`;

    for (let y = 0; y < card.know.length; y++) {
        card_HTML += `<li>${card.know[y]}</li>`;
    }


    card_HTML += `</ul>
            </div>
            <div class="detail i-learn">
                <h3>Изучаю:</h3>
                <ul class="">`;

    for (let y = 0; y < card.learn.length; y++) {
        card_HTML += `<li>${card.learn[y]}</li>`;
    }

    card_HTML += `</ul>
            </div>
            <div class="detail projects">
                <h3>Проекты:</h3>
                <ul class="">`;

    for (let y = 0; y < card.projects.length; y++) {
        card_HTML += `<li>${card.projects[y]}</li>`;
    }

    card_HTML += `</ul>
            </div>
        </div>
        </div>
        </div>
    `;

    place_for_cards.innerHTML += card_HTML;
}


let cards = document.querySelectorAll('.margin-of-card');

for (let i = 0; i < cards.length; i++) {
    let card = cards[i];

    card.addEventListener('click', function () {
        if (card.classList.contains('active-margin')) {
            for (let y = 0; y < cards.length; y++) {
                remove_active(cards[y])
            }
        } else {
            for (let y = 0; y < cards.length; y++) {
                remove_active(cards[y])
            }
            add_active(card)
        }
    })
}


function add_active(card) {
    let place_for_details = card.querySelector('.place-for-details')
    let cartochka = card.querySelector('.cartochka')

    card.classList.add('active-margin')
    cartochka.classList.add('active')
    place_for_details.classList.remove('d-none')
}


function remove_active(card) {
    let place_for_details = card.querySelector('.place-for-details')
    let cartochka = card.querySelector('.cartochka')


    card.classList.remove('active-margin')
    cartochka.classList.remove('active')
    place_for_details.classList.add('d-none')
}


let place_for_social = document.querySelector('.place-for-social');

let social_networks = [
    {
        title: 'ВКонтакте',
        class: 'VK',
        link: ' href="https://vk.com/kirillarz" target="_blank"',
        img: 'assets/VK-logo.jpg'
    },
    {
        title: 'Телеграмм',
        class: 'TG',
        link: ' href="https://t.me/kirillarz" target="_blank"',
        img: 'assets/TG-logo.png'
    },
    {
        title: 'Дискорд',
        class: 'DS',
        link: ' href="/#contact"',
        img: 'assets/DS-logo.png'
    },
    {
        title: 'ГитХаб',
        class: 'GH',
        link: ' href="https://github.com/nickname123456" target="_blank"',
        img: 'assets/GH-logo.png'
    },
];

for (let i = 0; i < social_networks.length; i++) {
    place_for_social.innerHTML += `
    <a ${social_networks[i].link}>
        <div class="social-network ${social_networks[i].class}">
            <img src="${social_networks[i].img}">
            <h3>${social_networks[i].title}</h3>
        </div>
    </a>
    `
}


let discord = document.querySelector('.DS')
discord.addEventListener('click', function () {
    discord.innerHTML = `
        <img src="assets/DS-logo.png">
        <h3 style="font-size: 17px;">StrangeSturgeon#0043</h3>
    `
});