import ProgressBar from '@components/ProgressBar';
import Head from 'next/head';

import styles from '@css/Goals.module.css';

const ProgressFor2023 = (): JSX.Element => (
    <>
        <Head><title>2023 Goal Progress - Keith Wagner</title></Head>
        <div className={styles.container}>
            <h1>2023 Goal Progress</h1>

            <p>I figured it would be a nice idea to create a page to show my progress on my goals for 2023.</p>

            <p><em>Last Updated: March 17, 2022</em></p>

            <h2>Goal #1: Learn (Re-Learn?) Guitar</h2>
            <p>My goal for 2023 teach myself guitar. I want to learn 10 &quot;modern&quot; rock songs.</p>

            <h3>Songs Learned</h3>
            <ProgressBar color="hsl(171, 100%, 23%)" fullValue={30} currentValue={0} />

            <hr />

            <h2>Goal #2: Read 30 Books</h2>
            <p>My goal for 2023 is to read 30 books.</p>

            <h3>Total Books Read</h3>
            <ProgressBar color="hsl(271, 88%, 51%)" fullValue={30} currentValue={6} />

            <hr />

            <h2>Goal #3: Write 10 Technical Blog Posts</h2>
            <p>My goal for 2023 is to write 12 technical blog posts.</p>

            <h3>Technical Blog Posts Written</h3>
            <ProgressBar color="hsl(24, 69%, 59%)" fullValue={12} currentValue={1} />

            <hr />

            <h2>Goal #4: Hit the 1,000 lbs. Club</h2>
            <p>My goal for 2023 is to hit a 1,000 total weight across deadlift, squat, &amp; bench press.</p>

            <h3>1,000 lbs. Goal</h3>
            <ProgressBar color="hsl(150, 96%, 29%)" fullValue={1000} currentValue={975} />

            <hr />

            <h2>Goal #5: Bike and Run 400 Miles Each</h2>
            <p>My goal for 2023 is to run 400 miles and bike 400 miles.</p>

            <h3>Running</h3>
            <ProgressBar color="hsl(240, 74%, 52%)" fullValue={400} currentValue={99} />

            <h3>Biking</h3>
            <ProgressBar color="hsl(167, 100%, 37%)" fullValue={400} currentValue={0} />

            <hr />

            <h2>Goal #6: Take More Photos</h2>
            <p>My goal for 2023 is to take my DSLR out 5 times for photo shoots this year.</p>

            <h3>Photo Shoots</h3>
            <ProgressBar color="hsl(15, 96%, 29%)" fullValue={5} currentValue={1} />
        </div>
    </>
);

export default ProgressFor2023;
