/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import marked from 'marked';
import { JSDOM } from 'jsdom';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);

    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the id
        return {
            id,
            ...matterResult.data,
        };
    });

    // Sort posts by date
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return allPostsData.sort((a: any, b: any) => {
        if (a.date < b.date) {
            return 1;
        }
        return -1;
    });
}

export function getAllPostIds(includeHtmlExtension = false) {
    const fileNames = fs.readdirSync(postsDirectory);

    return fileNames.map((filename) => {
        const arr = filename.replace(/\.md$/, '').split('-');
        const id = arr.splice(3).join('-');

        return ({
            params: {
                year: arr[0].toString(),
                month: arr[1].toString(),
                day: arr[2].toString(),
                id: `${id}${includeHtmlExtension ? '.html' : ''}`,
            },
        });
    });
}

export const getPostExcerpt = (html: string): string => {
    const dom = new JSDOM(html);

    const paragraphs = dom.window.document.getElementsByTagName('p');

    if (paragraphs.length === 0) {
        return html;
    }

    return paragraphs[0].innerHTML;
};

export const getPostData = (year: string, month: string, day: string, id: string) => {
    const postId = `${year}-${month}-${day}-${id}`;

    const fullPath = path.join(postsDirectory, `${postId}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const html = marked(matterResult.content);
    const excerpt = getPostExcerpt(html);

    // Combine the data with the id
    return {
        id: postId,
        excerpt,
        content: html,
        ...matterResult.data,
    };
};
