import Head from 'next/head';
import styled from 'styled-components';
import TableOfContentsPage from '@components/TableOfContentsPage';

const Container = styled.div`
    margin: 40px 0;
    display: flex;

    h3 {
        margin: 15px 0;
    }

    @media all and (max-width: 600px) {
        margin: 10px 0;

        ul {
            margin: 0;
        }
    }
`;

const Uses = (): JSX.Element => (
    <>
        <Head><title>Uses - Keith Wagner</title></Head>
        <main className="has-toc">
            <h1>What I Use</h1>
            <Container>
                <TableOfContentsPage>
                    <p><em>Last Updated: July 2021</em></p>
                    <h2 id="computers">Computers</h2>

                    <h3 id="PC">PC</h3>
                    <p>
                        I have a custom build desktop that I use for development and gaming. It&apos;s not the most up to date, but it still runs
                        every game I&apos;ve thrown at it. It runs an older Core i7, 16GB RAM & a GTX 1060 graphics card.
                    </p>

                    <h3 id="laptop">Laptop</h3>
                    <p>
                        I have an 13&quot; M1 MacBook Pro and while I&apos;ve only had it for a short period of time, I love it.
                    </p>

                    <h2 id="peripherals">Peripherals</h2>

                    <h3 id="monitors">Montitors</h3>
                    <p>
                        I have two desks. On my desk for gaming and personal development, I use dual
                        {' '}
                        <a href="https://www.amazon.com/gp/product/B07PGL2WVS">LG 27&quot; 4k monitors (27UL500-W)</a>
                        .
                        For work, I use a
                        {' '}
                        <a href="https://www.amazon.com/gp/product/B07FBS36W2">Samsung 34&quot; Ultrawide Monitor (LS34J550WQNXZA)</a>
                        {' '}
                        which
                        I love as well.
                    </p>

                    <h3 id="keyboard">Keyboard</h3>
                    <p>
                        I picked up the
                        {' '}
                        <a href="https://www.keychron.com/products/keychron-k4-wireless-mechanical-keyboard-version-2?variant=32287332696153">Keychron K4</a>
                        with the aluminum frame and Gateron Red switches. I love its Bluetooth connectivity between my MacBook and my PC as well as its compact
                        frame and number keypad.
                    </p>

                    <h3 id="mouse">Mouse</h3>
                    <p>
                        I have the
                        {' '}
                        <a href="https://www.logitech.com/en-us/products/mice/mx-master-3.910-005620.html">Logitech MX Master 3</a>
                        . Has the added bonus of being able to connect to 3 computers.
                    </p>

                    <h2 id="mobile-devices">Mobile Devices</h2>
                    <p>
                        I&apos;m currently using an iPhone 12 Pro with an Apple Watch Series 5.
                    </p>
                    <p>
                        My tablet is a the 6th generation iPad. I wanted a tablet to read the news and whatnot, and this does the trick.
                        The Apple Pencil support is an added bonus.
                    </p>
                    <p>
                        While the iPad does a good job for reading the news, I love my Kindle Paper White for reading books and long
                        pieces. The screen is easy on the eyes, good in the sun, and in darker rooms.
                    </p>

                    <h2 id="headphones">Headphones</h2>
                    <p>
                        <strong>
                            <a href="https://www.apple.com/airpods-pro/">Apple AirPods Pro</a>:
                        </strong>
                        &nbsp;It took a little bit of persuading and a sale, but I picked a pair of these up and the integration into the iPhone
                        and iPad ecosystem is pretty awesome. The battery and sound quality is top notch.
                    </p>
                    <p>
                        <strong>
                            <a href="https://www.anker.com/store/liberty-air-2/A3910011">Anker Liberty Air 2</a>:
                        </strong>
                        &nbsp;Originally, I couldn&apos;t justify the price for Apple&apos;s AirPods Pro, so I went with these and have not been disappointed. Good sound
                        quality and the pure wireless factor is nice.
                    </p>
                    <p>
                        <strong>
                            <a href="https://www.sony.com/electronics/headband-headphones/wh-ch710n">Sony WH-CH710N</a>:
                        </strong>
                        &nbsp;I got these for their noise cancelling and Bluetooth connectivity. The sound quality is good and the battery
                        life makes them perfect for full days in the office working.
                    </p>
                    <p>
                        <strong>
                            <a href="https://en-us.sennheiser.com/audio-headphones-high-end-hd-558">Sennheiser HD 558</a>
                            :
                        </strong>
                        I got these a long while ago and still use them while working at my desk quite a bit.
                    </p>

                    <h2 id="cameras">Cameras</h2>
                    <p>
                        My main camera is a Canon 60D. For a prosumer camera model, it takes great shots. I love taking it out and
                        capturing the world. I have the following lenses for it:
                    </p>

                    <ul>
                        <li>Tamron Lens</li>
                        <li>Canon Telephoto</li>
                        <li>Canon Wide Angle</li>
                        <li>Canon Kit Lens</li>
                    </ul>

                    <p>
                        I also have a Canon G1X for when I don&apos;t want to lug around my big DSLR. It&apos;s not quite compact enough that I
                        can stick it in my pocket, but it&apos;s still a little easier to pack and carry around.
                    </p>
                    <p>
                        I have 2 GoPro Hero 3&apos;s that I occasionally use to record my hockey games when I&apos;m in net. It helps me see where
                        I need to improve.
                    </p>

                    <h2 id="software">Software and Services</h2>
                    <p>I&apos;m not going to bother to list everything since there&apos;s so much, but here&apos;s a basic run down.</p>
                    <ul className="uses">
                        <li>
                            <strong>Web Browsing:</strong>
                            {' '}
                            I&apos;ve been using the Brave Web Browser. Built in ad blocking is nice.
                        </li>
                        <li>
                            <strong>Email:</strong>
                            {' '}
                            I use Fastmail with a custom domain as my primary email. I use Thunderbird on
                            Windows 10 and Linux, and the standard Mail app on MacOS and iOS.
                        </li>
                        <li>
                            <strong>Productivity:</strong>
                            {' '}
                            I sync files using Dropbox. For notes, I use Visual Studio Code and a synched
                            folder on Dropbox. On my iPhone and iPad, I use
                            {' '}
                            <a href="https://1writerapp.com/">1Writer</a>
                            {' '}
                            as it as a
                            nice feature of being able to link to a folder on various cloud services. For tasks, I&apos;ve been going back
                            and forth between Apple&apos;s default reminders app and Things 3.
                        </li>
                        <li>
                            <strong>RSS:</strong>
                            {' '}
                            I use
                            {' '}
                            <a href="https://www.feedbin.com">Feedbin</a>
                            {' '}
                            to subscribe to my RSS feeds. On
                            iOS, I use Reeder to read them.
                        </li>
                        <li>
                            <strong>Development:</strong>
                            {' '}
                            I do most of my at-home development in
                            <a href="https://code.visualstudio.com/">Visual Studio Code</a>
                            .
                        </li>
                        <li>
                            <strong>Photo Editing:</strong>
                            {' '}
                            I subscribe to the
                            <a href="https://www.adobe.com/creativecloud.html">Adobe Photography Creative Cloud</a>
                            {' '}
                            package. It includes
                            Lightroom and Photoshop which are perfect for managing and editing my photos.
                        </li>
                        <li>
                            <strong>Gym:</strong>
                            {' '}
                            I use the
                            {' '}
                            <a href="https://www.strong.app/" title="Strong App">Strong App</a>
                            {' '}
                            and an Excel
                            spreadsheet to track my progress.

                        </li>
                        <li>
                            <strong>Runs:</strong>
                            {' '}
                            I use my Apple Watch and the built in Workouts app to track my runs.
                        </li>
                        <li>
                            <strong>Music:</strong>
                            {' '}
                            I use
                            {' '}
                            <a href="https://www.spotify.com">Spotify</a>
                            {' '}
                            to stream music.
                        </li>
                        <li>
                            <strong>Podcasts:</strong>
                            {' '}
                            I use
                            {' '}
                            <a href="https://www.pocketcasts.com/">Pocket Casts</a>
                            {' '}
                            to subscribe and listen to the many podcasts I listen to.
                        </li>
                    </ul>

                    <h2 id="gaming">Gaming Systems</h2>
                    <ul className="uses">
                        <li>Xbox Series X</li>
                        <li>PlayStation 4</li>
                    </ul>

                    <h2 id="other">Other</h2>
                    <ul className="uses">
                        <li>Apple TV (3rd Gen)</li>
                        <li>Google Home & 2 Home Minis</li>
                    </ul>
                </TableOfContentsPage>
            </Container>
        </main>
    </>
);

export default Uses;
