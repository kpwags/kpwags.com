import { Media } from './media';

interface Game extends Media {
    finished: 'yes' | 'no' | 'n/a';
}

export default Game;
