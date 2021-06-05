import { Book } from './book';
import { Game } from './game';
import { TVShow } from './tvShow';

export interface CurrentlyDoing {
    lastUpdate: string,
    reading: Book[],
    watching: TVShow[],
    playing: Game[],
}
