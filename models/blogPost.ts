export interface BlogPost {
    id: string
    title: string
    date: Date
    excerpt?: string
    url?: string
    content?: string
    description?: string
    socialImageUrl?: string
    socialImageWidth?: number
    socialImageHeight?: number
    hasEmbeddedTweet: boolean
}
