import { Book } from './Book';
import { VideoGame } from './VideoGame';
import { TV } from './tv';

export interface Current {
    reading: Book[],
    watching: TV[],
    playing: VideoGame[],
}
