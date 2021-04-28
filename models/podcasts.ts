export interface Podcast {
    name: string,
    link: string,
}

export interface PodcastCategory {
    name: string,
    podcasts: Podcast[],
}
