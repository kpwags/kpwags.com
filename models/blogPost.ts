import { BlogTag } from '@models/BlogTag';

export interface BlogPost {
    id: string
    title: string
    date: Date
    isRssOnly?: boolean
    excerpt?: string
    url?: string
    subheading?: string | null
    content?: string
    description?: string
    socialImageUrl?: string
    tags: BlogTag[]
    commentIssueNumber?: number
    wordCount?: number
    readTime?: number
}
