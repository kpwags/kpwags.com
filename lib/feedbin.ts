import { FeedbinItem } from '@models/FeedbinItem';
import { XMLParser } from 'fast-xml-parser';

export const getFeedbinItems = async (): Promise<FeedbinItem[]> => {
    const items: FeedbinItem[] = [];

    const res = await fetch('https://feedbin.com/starred/a9276a5b66c7d72ffb7b7f64628f70a5.xml');
    const response = await res.text();

    const parser = new XMLParser();
    const data = parser.parse(response);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data.rss.channel.item.forEach((i: any) => {
        const domain = (new URL(i.link));

        items.push({
            title: i.title,
            link: i.link,
            domain: domain.hostname,
        });
    });

    return items;
};
