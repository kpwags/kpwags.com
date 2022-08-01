import { FeedbinItem } from '@models/FeedbinItem';
import { XMLParser } from 'fast-xml-parser';

export const getFeedbinItems = async (): Promise<FeedbinItem[]> => {
    const items: FeedbinItem[] = [];

    const res = await fetch('https://feedbin.com/starred/a9276a5b66c7d72ffb7b7f64628f70a5.xml');

    if (!res.ok) {
        return [];
    }

    const response = await res.text();

    const parser = new XMLParser();
    const data = parser.parse(response);

    data.rss.channel.item.forEach((i: { title: string, link: string }) => {
        const domain = (new URL(i.link));

        items.push({
            title: i.title,
            link: i.link,
            domain: domain.hostname.startsWith('www.') ? domain.hostname.replace('www.', '') : domain.hostname,
        });
    });

    return items;
};
