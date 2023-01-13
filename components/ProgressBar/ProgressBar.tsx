import styles from './ProgressBar.module.css';

type ProgressBarProps = {
    color: string
    currentValue: number
    fullValue: number
    format?: 'none' | 'money'
}

const ProgressBar = ({
    color,
    currentValue,
    fullValue,
    format = 'none',
}: ProgressBarProps): JSX.Element => {
    let currentPercentage = 0;

    if (currentValue > fullValue) {
        currentPercentage = 100;
    } else {
        currentPercentage = Math.round((currentValue / fullValue) * 100);
    }

    const actualPercentage = Math.round((currentValue / fullValue) * 100);

    let formattedCurrentValue: number | string = Math.round(currentValue);
    let formattedFullValue: number | string = Math.round(fullValue);

    const moneyFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });

    switch (format) {
        case 'money':
            formattedCurrentValue = moneyFormatter.format(formattedCurrentValue);
            formattedFullValue = moneyFormatter.format(formattedFullValue);
            break;

        default:
            break;
    }

    return (
        <div className={styles.container}>
            <div className={styles.bar}>
                <div className={styles.innerBar} style={{ backgroundColor: color, width: `${currentPercentage}%` }} />
            </div>
            <p className={styles.barLegend}>{formattedCurrentValue} / {formattedFullValue} ({actualPercentage}%)</p>
        </div>
    );
};

export default ProgressBar;
