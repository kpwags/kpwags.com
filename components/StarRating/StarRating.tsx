import StarIcon from '@components/StarIcon';

import styles from './StarRating.module.css';

type StarRatingProps = {
    rating: number
};

const StarRating = ({ rating }: StarRatingProps): JSX.Element => {
    const getStars = () => {
        const starsHtml = [];

        for (let i = 0; i < rating; i += 1) {
            starsHtml.push(
                <StarIcon key={i} />,
            );
        }

        return starsHtml;
    };

    return (<div className={styles.rating}>{getStars()}</div>);
};

export default StarRating;
