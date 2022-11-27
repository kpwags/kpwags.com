import { CurrentlyDoing } from '@models/currentlyDoing';

const current: CurrentlyDoing = {
    lastUpdate: 'November 2022',
    reading: [
        {
            title: 'What If? 2',
            author: 'Randall Munroe',
            cover: 'whatif2.jpg',
            link: 'https://bookshop.org/p/books/what-if-2-additional-serious-scientific-answers-to-absurd-hypothetical-questions-randall-munroe/18153615',
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
            link: 'https://www.imdb.com/title/tt4236770/',
            rating: null,
            thoughts: null,
        },
        {
            title: "It's Always Sunny in Philadelphia",
            cover: 'always_sunny.jpg',
            rating: null,
            thoughts: null,
            link: 'https://www.imdb.com/title/tt0472954/',
            imageFolder: 'tv',
        },
        {
            title: 'Star Trek: Voyager',
            cover: 'voyager.jpg',
            rating: null,
            thoughts: null,
            link: 'https://www.imdb.com/title/tt0112178/',
            imageFolder: 'tv',
        },
        {
            title: 'Daria',
            cover: 'daria.jpg',
            rating: null,
            thoughts: null,
            link: 'https://www.imdb.com/title/tt0118298/',
            imageFolder: 'tv',
        },
    ],
    playing: [
        {
            title: 'WoW Classic',
            system: 'PC',
            cover: 'wow_classic.jpg',
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
        {
            title: 'Jedi: Fallen Order',
            system: 'Xbox',
            cover: 'jedifallenorder.jpg',
            link: 'https://www.ea.com/games/starwars/jedi/jedi-fallen-order',
            imageFolder: 'games',
            rating: null,
            thoughts: null,
        },
    ],
};

export default current;
