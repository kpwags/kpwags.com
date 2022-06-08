import { BlogTag } from '@models/BlogTag';

export interface BlogPost {
    id: string
    title: string
    date: Date
    isRssOnly?: boolean
    excerpt?: string
    url?: string
    content?: string
    description?: string
    contentImage?: string
    socialImageUrl?: string
    socialImageWidth?: number
    socialImageHeight?: number
    hasEmbeddedTweet: boolean
    tags: BlogTag[]
    commentIssueNumber?: number
}
