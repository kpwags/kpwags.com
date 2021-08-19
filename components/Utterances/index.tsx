import { useEffect } from 'react';

interface UtterancesProps {
    issueNumber: number
}

const Utterances = ({ issueNumber }: UtterancesProps): JSX.Element => {
    useEffect(() => {
        const script = document.createElement('script');
        const anchor = document.getElementById('comments');
        script.setAttribute('src', 'https://utteranc.es/client.js');
        script.setAttribute('crossorigin', 'anonymous');
        script.setAttribute('async', 'true');
        script.setAttribute('repo', 'kpwags/new.kpwags.com');
        script.setAttribute('issue-number', issueNumber.toString());
        script.setAttribute('theme', 'preferred-color-scheme');
        anchor.appendChild(script);
        return () => {
            anchor.innerHTML = '';
        };
    }, []);

    return (
        <div className="utterances-frame" id="comments" />
    );
};

export default Utterances;
