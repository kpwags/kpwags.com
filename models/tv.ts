import { Media } from './media';

export type TV = {
    lastUpdate: string
    couldNotFinish: Media[]
    continuing: Media[]
    current: Media[]
    completed: Media[]
}
