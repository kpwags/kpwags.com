import StarRating from '@components/StarRating';
import { Book } from '@models/Book';
import { useState } from 'react';
import Link from 'next/link';

import styles from './BookListing.module.css';

type BookListingProps = {
    book: Book;
}

const BookListing = ({ book }: BookListingProps): JSX.Element => {
    const [showThoughts, setShowThoughts] = useState(false);

    return (
        <div className={styles.item}>
            <div>
                <a href={book.link} target="_blank" rel="noreferrer nofollow" className={styles.externalLink}>
                    <img src={book.coverUrl} alt={book.title} className={styles.cover} height={300} width={200} />
                </a>
            </div>
            <div>
                <a href={book.link} target="_blank" rel="noreferrer nofollow" className={styles.externalLink}>
                    {book.title}
                </a>

                {book.author ? <div className={styles.meta}>{book.author}</div> : null}

                {(book.rating !== null || book.thoughts !== null) ? (
                    <>
                        {book.rating !== null ? <StarRating rating={book.rating} /> : null}

                        {book.reviewUrlSlug ? (
                            <Link href={`/books/${book.reviewUrlSlug}`} className={styles.notes}>Book Notes</Link>
                        ) : null}

                        {book.thoughts !== null && (
                            <div className={styles.viewThoughts}>
                                <button
                                    className={styles.toggleThoughts}
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setShowThoughts(!showThoughts);
                                    }}
                                >
                                    {showThoughts ? 'Hide' : 'Quick Notes'}
                                </button>
                                <div className={styles.thoughts} hidden={!showThoughts}>{book.thoughts}</div>
                            </div>
                        )}
                    </>
                ) : null}
            </div>
        </div>
    );
};

export default BookListing;
