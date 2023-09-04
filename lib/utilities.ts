import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

export const formatDate = (value: string|Date): string => {
    const date = dayjs(value);
    const timeZone = dayjs.tz.guess();
    date.tz(timeZone);
    return date.format('MMMM D, YYYY');
};

export const formatDateTime = (value: string|Date): string => {
    const date = dayjs(value);
    const timeZone = dayjs.tz.guess();
    date.tz(timeZone);

    return `${dayjs(date).format('MMMM D, YYYY')} at ${dayjs(date).format('h:mm A')}`;
};

export const buildUrlFromId = (id: string): string => {
    const arr = id.split('-');
    const stub = arr.splice(3).join('-');

    return `/posts/${arr[0]}/${arr[1]}/${arr[2]}/${stub}`;
};

export const removeAnchorLink = (str: string): string => str.replace(/<a.*?>/ig, '').replace(/<\/a>/ig, '');

export const getPostExcerpt = (html: string): string => {
    const endParagraphIndex = html.indexOf('</p>');
    const snippet = html.substring(0, endParagraphIndex);

    return snippet.replace('<p>', '');
};
