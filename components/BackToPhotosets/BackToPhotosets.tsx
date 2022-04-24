import Link from 'next/link';
import styled from 'styled-components';

const BackButton = styled.div`
    margin: 25px 0;
`;

const BackToPhotoset = (): JSX.Element => (
    <BackButton>
        <Link href="/photography">
            <a>&larr; Back to Photo Sets</a>
        </Link>
    </BackButton>
);

export default BackToPhotoset;
