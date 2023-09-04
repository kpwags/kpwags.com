import Link from 'next/link';
import { BookNote } from '@models/BookNote';
import { formatDate } from '@lib/utilities';
import StarRating from '@components/StarRating/StarRating';

import styles from './BookNoteListing.module.css';

interface BookNoteListingProps {
    bookNote: BookNote;
}

const BookNoteListing = ({ bookNote }: BookNoteListingProps): JSX.Element => (
    <div className={styles.bookNote}>
        <div className={styles.image}>
            <img src={bookNote.coverImage} alt={`${bookNote.author} - ${bookNote.title}`} />
        </div>
        <div>
            <h2><Link href={bookNote.url}>{bookNote.title}</Link></h2>
            <h3>{bookNote.author}</h3>

            <div className={styles.date}>{formatDate(bookNote.dateFinished)}</div>

            <StarRating
                rating={bookNote.rating}
            />

            <div className={styles.categories}>
                {bookNote.categories.map((c) => <span className={styles.category} key={c}>{c}</span>)}
            </div>
        </div>
    </div>
);

export default BookNoteListing;
