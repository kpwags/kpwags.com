import { BookList } from '@data/bookshelf';
import MediaListing from '@components/MediaListing';

import styles from './BookshelfContainer.module.css';

interface BookshelfContainerProps {
    books: BookList;
}

const BookshelfContainer = ({
    books,
}: BookshelfContainerProps): JSX.Element => (
    <div className={styles.container}>
        <h1>My Bookshelf</h1>

        <p className="lastUpdate">
            Last Updated:
            {' '}
            {books.lastUpdate}
        </p>

        {books.years.map((year) => (
            <div key={year.year}>
                <h2>{year.year} ({year.books.length})</h2>

                <div className={styles.bookGrid}>
                    {year.books.map((book) => (
                        <MediaListing
                            media={book}
                            key={book.cover}
                            includeReview
                        />
                    ))}
                </div>
            </div>
        ))}
    </div>
);

export default BookshelfContainer;
