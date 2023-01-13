import { VideoGame } from './VideoGame';

export interface VideoGames {
    lastUpdate: string;
    current: VideoGame[];
    played: VideoGame[];
}
