import { Media } from './media';

export interface Game extends Media {
    finished: 'yes' | 'no' | 'n/a';
}
