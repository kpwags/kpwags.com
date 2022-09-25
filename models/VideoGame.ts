import { Media } from './media';

export interface VideoGame extends Media {
    finished: 'yes' | 'no' | 'n/a';
}
