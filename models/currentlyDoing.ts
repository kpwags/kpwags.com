import { Media } from './media';

export interface CurrentlyDoing {
    lastUpdate: string,
    reading: Media[],
    watching: Media[],
    playing: Media[],
}
