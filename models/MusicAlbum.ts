export interface MusicAlbum {
    id: string;
    artist: string;
    title: string;
    coverUrl: string;
    genres: string[];
    sortedName: string;
    formats: string[];
    tracks?: string[];
}
