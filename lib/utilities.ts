import dayjs from 'dayjs';

export const formatDate = (value: string|Date): string => dayjs(new Date(value)).format('MMMM D, YYYY');

export const formatDateTime = (dateVal: string|Date): string => `${dayjs(dateVal).format('MMMM D, YYYY')} at ${dayjs(dateVal).format('h:mm A')}`;

export const buildUrlFromId = (id: string): string => {
    const arr = id.split('-');
    const stub = arr.splice(3).join('-');

    return `posts/${arr[0]}/${arr[1]}/${arr[2]}/${stub}`;
};
