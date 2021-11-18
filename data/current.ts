import { CurrentlyDoing } from '@models/currentlyDoing';

const current: CurrentlyDoing = {
    lastUpdate: 'November 2021',
    reading: [
        {
            title: 'The Righteous Mind: Why Good People Are Divided by Politics and Religion',
            author: 'Jonathan Haidt',
            cover: 'righteousmind.jpg',
            link: 'https://bookshop.org/books/the-righteous-mind-why-good-people-are-divided-by-politics-and-religion-9798200560639/9780307455772',
            rating: null,
            thoughts: null,
        },
    ],
    watching: [
        {
            title: 'Ted Lasso',
            cover: 'tedlasso.jpg',
        },
        {
            title: 'Star Trek: Deep Space Nine',
            cover: 'ds9.jpg',
        },
    ],
    playing: [
        {
            title: 'Halo Infinite Multiplayer Beta',
            system: 'Xbox Series X',
            cover: 'halo-infinite-mp.jpg',
            link: 'https://www.xbox.com/en-US/games/halo-infinite',
        },
        {
            title: 'Destiny 2',
            system: 'Xbox Series X & PC',
            cover: 'destiny2.jpg',
            link: 'https://www.bungie.net/7/en/Destiny/NewLight',
        },
        {
            title: 'MLB The Show 21',
            system: 'Xbox Series X',
            cover: 'mlb21.jpg',
            link: 'https://www.microsoft.com/en-us/p/mlb-the-show-21-xbox-series-x-s/9nsdl005mbtg',
        },
        {
            title: 'Mass Effect',
            system: 'Xbox Series X',
            cover: 'masseffect.jpg',
            link: 'https://www.ea.com/games/mass-effect/mass-effect-legendary-edition',
        },
    ],
};

export default current;
