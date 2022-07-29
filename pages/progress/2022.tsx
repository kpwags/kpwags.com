import ProgressBar from '@components/ProgressBar';
import Head from 'next/head';
import styled from 'styled-components';

const Container = styled.div`
    width: 1024px;
    margin: 50px auto 30px auto;

    h1 {
        margin-bottom: 24px;
    }

    h3 {
        margin-bottom: 8px;
    }

    p {
        font-size: 1.2rem;
    }

    hr {
        width: 250px;
        margin: 40px auto;
        border-bottom: 1px solid hsl(0, 0%, 87.1%);
        background-color: transparent;
    }

    @media all and (max-width: 1200px) {
        width: 800px;
    }

    @media all and (max-width: 850px) {
        width: 100%;
        margin: 25px 0;
    }
`;

const ProgressFor2022 = (): JSX.Element => (
    <>
        <Head><title>2022 Goal Progress - Keith Wagner</title></Head>
        <Container>
            <h1>2022 Goal Progress</h1>

            <p>I figured it would be a nice idea to create a page to show my progress on my goals for 2022.</p>

            <p><em>Last Updated: July 29, 2022</em></p>

            <h2>Goal #1: Running and Biking More</h2>
            <p>My goal for 2022 is 400 miles running and 500 miles biking.</p>

            <h3>Running</h3>
            <ProgressBar color="hsl(240, 74%, 52%)" fullValue={400} currentValue={191.35} />

            <h3>Biking</h3>
            <ProgressBar color="hsl(167, 100%, 37%)" fullValue={500} currentValue={8.9} />

            <hr />

            <h2>Goal #2: Bench Press, Squat & Deadlift PRs</h2>
            <p>My goal for 2022 is to hit a 400 lbs. Deadlift, 350 lbs. Squat, &amp; 250 lbs. Bench Press. Despite how close I am, it still feels pretty far...</p>

            <h3>Deadlift Max</h3>
            <ProgressBar color="hsl(150, 96%, 29%)" fullValue={400} currentValue={385} />

            <h3>Squat Max</h3>
            <ProgressBar color="hsl(19, 100%, 37%)" fullValue={350} currentValue={365} />

            <h3>Bench Press Max</h3>
            <ProgressBar color="hsl(229, 81%, 35%)" fullValue={250} currentValue={235} />

            <hr />

            <h2>Goal #3: Max Out Retirement Contributions</h2>
            <p>My goal for 2022 is to max out both my IRA &amp; my 401k.</p>

            <h3>Total Contributions</h3>
            <ProgressBar color="hsl(315, 88%, 51%)" fullValue={26500} currentValue={15805} format="money" />

            <h3>IRA Contributions</h3>
            <ProgressBar color="hsl(194, 88%, 51%)" fullValue={6000} currentValue={6000} format="money" />

            <h3>401k Contributions</h3>
            <ProgressBar color="hsl(64, 85%, 35%)" fullValue={20500} currentValue={9805} format="money" />

            <hr />

            <h2>Goal #4: Read 30 Books</h2>
            <p>My goal for 2022 is to read 30 books, with at least 15 being some form of non-fiction.</p>

            <h3>Total Books Read</h3>
            <ProgressBar color="hsl(271, 88%, 51%)" fullValue={30} currentValue={11} />

            <h3>Non-Fiction Books Read</h3>
            <ProgressBar color="hsl(93, 87%, 39%)" fullValue={15} currentValue={8} />

            <hr />

            <h2>Goal #5: Write 10 Technical Blog Posts</h2>
            <p>My goal for 2022 is to write 10 technical blog posts.</p>

            <h3>Technical Blog Posts Written</h3>
            <ProgressBar color="hsl(24, 69%, 59%)" fullValue={10} currentValue={3} />
        </Container>
    </>
);

export default ProgressFor2022;
