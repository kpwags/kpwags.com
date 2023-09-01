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
                <StarIcon
                    filled
                    key={i}
                />,
            );
        }

        if (rating < 5) {
            for (let i = rating; i < 5; i += 1) {
                starsHtml.push(
                    <StarIcon
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
