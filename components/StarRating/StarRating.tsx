import StarIcon from '@components/StarIcon';

import styles from './StarRating.module.css';

interface StarRatingProps {
    rating: number;
    size?: string;
}

const StarRating = ({ rating, size }: StarRatingProps): JSX.Element => {
    const getStars = () => {
        const starsHtml = [];

        for (let i = 0; i < rating; i += 1) {
            starsHtml.push(
                <StarIcon
                    size={size}
                    filled
                    key={i}
                />,
            );
        }

        if (rating < 5) {
            for (let i = rating; i < 5; i += 1) {
                starsHtml.push(
                    <StarIcon
                        size={size}
                        filled={false}
                        key={(5 + i).toString()}
                    />,
                );
            }
        }

        return starsHtml;
    };

    return (<div className={styles.rating}>{getStars()}</div>);
};

export default StarRating;
