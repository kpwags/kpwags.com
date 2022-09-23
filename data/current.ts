import { CurrentlyDoing } from '@models/currentlyDoing';

const current: CurrentlyDoing = {
    lastUpdate: 'September 2022',
    reading: [
        {
            title: 'Responsible Javascript',
            author: 'Jeremy Wagner',
            cover: 'responsible_javascript.jpg',
            link: 'https://abookapart.com/products/responsible-javascript',
            rating: null,
            thoughts: null,
            imageFolder: 'books',
        },
    ],
    watching: [
        {
            title: 'Yellowstone',
            cover: 'yellowstone.jpg',
            imageFolder: 'tv',
            rating: null,
            thoughts: null,
        },
        {
            title: 'The Office',
            cover: 'theoffice.jpg',
            imageFolder: 'tv',
            rating: null,
            thoughts: null,
        },
    ],
    playing: [
        {
            title: 'WoW Burning Crusade Classic',
            system: 'PC',
            cover: 'wow_tbc_classic.jpg',
            link: 'https://worldofwarcraft.com/en-us/wowclassic',
            imageFolder: 'games',
            rating: null,
            thoughts: null,
        },
        {
            title: 'Star Wars: Battlefront II',
            system: 'PS5',
            cover: 'battlefront2.jpg',
            link: 'https://www.ea.com/games/starwars/battlefront/star-wars-battlefront-2',
            imageFolder: 'games',
            rating: null,
            thoughts: null,
        },
    ],
};

export default current;
