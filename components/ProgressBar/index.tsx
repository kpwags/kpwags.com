import styled from 'styled-components';

type ProgressBarProps = {
    color: string
    currentValue: number
    fullValue: number
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 9fr 2fr;
  grid-column-gap: 12px;
`;

const Bar = styled.div`
    height: 40px;
    border-width: 2px;
    border-style: solid;
    border-color: #666;
    position: relative;
    margin: 0 0 25px 0;
`;

const InnerBar = styled.div`
    height: 100%;
`;

const BarLegend = styled.p`
    line-height: 40px;
    margin: 0;
    padding: 0;
`;

const ProgressBar = ({
    color,
    currentValue,
    fullValue,
}: ProgressBarProps): JSX.Element => {
    let currentPercentage = 0;

    if (currentValue > fullValue) {
        currentPercentage = 100;
    } else {
        currentPercentage = Math.round((currentValue / fullValue) * 100);
    }

    const actualPercentage = Math.round((currentValue / fullValue) * 100);

    return (
        <Container>
            <Bar>
                <InnerBar style={{ backgroundColor: color, width: `${currentPercentage}%` }} />
            </Bar>
            <BarLegend>{Math.round(currentValue)} / {fullValue} ({actualPercentage}%)</BarLegend>
        </Container>
    );
};

export default ProgressBar;
