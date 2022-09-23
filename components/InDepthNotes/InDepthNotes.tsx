import { ReactNode } from 'react';
import styled from 'styled-components';

const InDepthArticle = styled.article`
    margin-bottom: 2rem;

    span.source {
        color: var(--text);
    }
`;

type InDepthNotesProps = {
    url: string;
    title: string;
    source: string;
    children: ReactNode;
}

const InDepthNotes = ({
    source,
    url,
    title,
    children,
}: InDepthNotesProps): JSX.Element => (
    <InDepthArticle>
        <h3><span className="source">{source}:</span> <a href={url}>{title}</a></h3>
        {children}
    </InDepthArticle>
);

export default InDepthNotes;
