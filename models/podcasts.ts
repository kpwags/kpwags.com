export interface Podcast {
    name: string,
    link: string,
    summary?: string|null,
    artwork?: string|null,
}

export interface PodcastCategory {
    name: string,
    podcasts: Podcast[],
}
