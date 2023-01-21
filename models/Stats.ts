export interface PostsPerYear {
    year: number;
    count: number;
}

export interface PostsPerTag {
    tag: string;
    url: string;
    count: number;
}

export interface Stats {
    PostsPerYear: PostsPerYear[];
    MostPopularTags: PostsPerTag[];
}
