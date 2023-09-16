import { ReactNode } from 'react';
import Image from 'next/image';

import styles from './BookRead.module.css';

type BookReadProps = {
    title: string
    author: string
    coverImageSrc: string
    width: number
    height: number
    thoughts: string | ReactNode
    link?: string
}

const BookRead = ({
    title,
    author,
    coverImageSrc,
    width,
    height,
    thoughts,
    link,
}: BookReadProps): JSX.Element => (
    <div className={styles.book}>
        <div className="book-image">
            <Image
                src={coverImageSrc}
                alt={`${title} by ${author}`}
                width={width}
                height={height}
            />
        </div>
        <div className={styles.description}>
            <h2>{link ? <a href={link} target="_blank" rel="noreferrer" title="Buy on bookshop.org">{title}</a> : title}</h2>
            <p className="meta">by {author}</p>
            <p className="thoughts">{thoughts}</p>
        </div>
    </div>
);

export default BookRead;
