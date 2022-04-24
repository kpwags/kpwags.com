import styled from 'styled-components';

type ProgressBarProps = {
    color: string
    currentValue: number
    fullValue: number
    format?: 'none' | 'money'
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 9fr 3fr;
  grid-column-gap: 12px;

  @media all and (max-width: 500px) {
    display: block;
  }
`;

const Bar = styled.div`
    height: 40px;
    border-width: 2px;
    border-style: solid;
    border-color: #666;
    position: relative;
    margin: 0 0 25px 0;

    @media all and (max-width: 500px) {
        margin: 0 0 10px 0;
    }
`;

const InnerBar = styled.div`
    height: 100%;
`;

const BarLegend = styled.p`
    line-height: 40px;
    margin: 0;
    padding: 0;

    @media all and (max-width: 500px) {
        line-height: 1;
        margin: 0 0 25px 0;
        text-align: center;
    }
`;

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
        <Container>
            <Bar>
                <InnerBar style={{ backgroundColor: color, width: `${currentPercentage}%` }} />
            </Bar>
            <BarLegend>{formattedCurrentValue} / {formattedFullValue} ({actualPercentage}%)</BarLegend>
        </Container>
    );
};

export default ProgressBar;
