import styled from 'styled-components';
import TableOfContents from '@components/TableOfContents';

const Container = styled.div`
    display: flex;

    .main-content {
        max-width: 60%;

        h2, h3 {
            scroll-margin-top: 16px;
        }

        /* Safari-only */
        @supports (-webkit-hyphens:none) {
            h2, h3 {
                padding-top: 16px;
                margin-top: -16px;
            }
        }

        @media all and (max-width: 600px) {
            max-width: 100%;
        }
    }
`;

type TableOfContentsPageProps = {
    children: React.ReactNode
}

const TableOfContentsPage = ({ children }: TableOfContentsPageProps): JSX.Element => (
    <Container>
        <TableOfContents />
        <div className="main-content">
            {children}
        </div>
    </Container>
);

export default TableOfContentsPage;
