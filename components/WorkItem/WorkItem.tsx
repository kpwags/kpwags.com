import { ReactNode } from 'react';
import styled from 'styled-components';

const PortfolioItem = styled.div`
    display: grid;
    grid-template-columns: 2fr 3fr;
    grid-template-rows: 1fr;
    grid-column-gap: 50px;
    grid-row-gap: 0px;
    margin: 40px 0;
    padding: 40px 0;

    .image {
        div {
            box-shadow: 0 12px 12px 0 hsla(0, 0%, 0%, 0.2);
        }

        @media all and (max-width: 425px) {
            margin-bottom: 25px;
        }
    }

    @media all and (max-width: 425px) {
        display: block;
    }
`;

interface WorkItemProps {
    name: string
    image: ReactNode
    content: ReactNode
    bordered?: boolean
}

const WorkItem = ({
    name,
    image,
    content,
    bordered = true,
}: WorkItemProps): JSX.Element => (
    <PortfolioItem style={bordered ? { borderBottom: '1px solid black' } : {}}>
        <div className="image">{image}</div>
        <div>
            <h2>{name}</h2>
            <div>{content}</div>
        </div>
    </PortfolioItem>
);

export default WorkItem;
