import { BlogContext } from '@contexts/BlogContext';
import { useContext } from 'react';
import styles from './StarRating.module.css';

type StarRatingProps = {
    rating: number
};

const StarRating = ({ rating }: StarRatingProps): JSX.Element => {
    const { currentTheme, currentColor } = useContext(BlogContext);

    const getStars = () => {
        const starsHtml = [];

        for (let i = 0; i < rating; i += 1) {
            starsHtml.push(
                <img
                    className={styles.star}
                    src={`/images/rating-star-${currentTheme}-${currentColor}.png`}
                    alt="star"
                    key={i}
                />,
            );
        }

        return starsHtml;
    };

    return (<div className={styles.rating}>{getStars()}</div>);
};

export default StarRating;
