import useSWR from 'swr';

const Podcasts = () => {
    const fetcher = () => fetch('/data/podcasts.json').then((res) => res.json());

    const { data, error } = useSWR('/data/podcasts.json', fetcher);

    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;

    return (
        <ul>
            {data.map(({ name, podcasts }) => (
                <li key={name}>
                    <h3>{name}</h3>
                    <ul>
                        {podcasts.map(({ name: podcastName, link }) => (
                            <li key={link}>
                                {podcastName}
                                <br />
                                {link}
                            </li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    );
};

export default Podcasts;
