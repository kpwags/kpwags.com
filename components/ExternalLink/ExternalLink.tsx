import { ReactNode } from 'react';

type ExternalLinkProps = {
    href: string
    title?: string
    children: ReactNode
}

const ExternalLink = ({
    href,
    title,
    children,
}: ExternalLinkProps): JSX.Element => (
    <a href={href} title={title} target="_blank" rel="noreferrer nofollow">{children}</a>
);

export default ExternalLink;
