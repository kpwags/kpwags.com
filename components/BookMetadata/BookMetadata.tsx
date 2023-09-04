import { BookNote } from '@models/BookNote';
import { formatDate } from '@lib/utilities';
import StarRating from '@components/StarRating/StarRating';

import styles from './BookMetadata.module.css';

interface BookMetadataProps {
    book: BookNote
}

const BookMetadata = ({
    book,
}: BookMetadataProps): JSX.Element => (
    <div className={styles.metadata}>
        <div className={styles.image}>
            <img src={book.coverImage} alt={`${book.author} - ${book.title}`} />
        </div>
        <div>
            <h2>{book.title}</h2>
            <h3>{book.author}</h3>

            <div className={styles.date}>{formatDate(book.dateFinished)}</div>

            <StarRating
                rating={book.rating}
            />

            <div className={styles.categories}>
                {book.categories.map((c) => <span className={styles.category} key={c}>{c}</span>)}
            </div>

            <div className={styles.links}>
                <div>Links:</div>
                {book.links.map((link) => (
                    <a
                        href={link.url}
                        target="_blank"
                        rel="noreferrer nofollow"
                        key={link.title}
                    >
                        {link.title}
                    </a>
                ))}
            </div>
        </div>
    </div>
);

export default BookMetadata;
