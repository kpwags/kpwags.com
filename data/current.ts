import { CurrentlyDoing } from '@models/currentlyDoing';

const current: CurrentlyDoing = {
    lastUpdate: 'June 2021',
    reading: [
        {
            title: 'Without Remorse',
            author: 'Tom Clancy',
            cover: 'withoutremorse.jpg',
            link: 'https://bookshop.org/books/without-remorse/9780425143322',
            rating: null,
            thoughts: null,
        },
    ],
    watching: [
        {
            title: 'Person of Interest',
            cover: 'personofinterest.jpg',
        },
        {
            title: 'Cosmos',
            cover: 'cosmos.jpg',
        },
        {
            title: 'Scrubs',
            cover: 'scrubs.jpg',
        },
    ],
    playing: [
        {
            title: 'MLB The Show 21',
            system: 'Xbox Series X',
            cover: 'mlb21.jpg',
            link: 'https://www.xbox.com/en-US/games/mlb-the-show-21',
        },
        {
            title: 'WoW: Classic',
            system: 'PC',
            cover: 'wow_tbc_classic.jpg',
            link: 'https://worldofwarcraft.com/en-us/',
        },
    ],
};

export default current;
