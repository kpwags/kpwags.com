/* eslint-disable max-len */
import Head from 'next/head';
import Image from 'next/image';
import WorkItem from '@components/WorkItem';

const Work = (): JSX.Element => (
    <main>
        <div className="work">
            <Head><title>Work - Keith Wagner</title></Head>
            <h1>Work</h1>

            <WorkItem
                name="Where Do You Want to Eat 2"
                image={(
                    <Image
                        src="/images/work/wheredoyouwanttoeat2/wheredoyouwanttoeat2.jpg"
                        alt="A screenshot of Where Do You Want to Eat 2"
                        width={1199}
                        height={670}
                    />
                )}
                content={(
                    <>
                        <p>Several years ago, I built a little website. It was a simple little app that tied into Google&apos;s
                            Geolocation API to find a restaurant near you, or by a specified Zip Code for you to eat at. It
                            randomly chose it to help friends or couples choose their next meal.
                        </p>
                        <p>Google changed their API and started charging for it (which is completely fair, I&apos;m not going to
                            complain.). But because the site had no revenue and since there&apos;d be the chance for a spike of
                            usage upping the API costs, I opted to sunset it. You can still view the <a href="https://github.com/kpwags/Where-Do-You-Want-To-Eat">GitHub Repository.</a>
                        </p>
                        <p>This is the spiritual successor. Where Do You Want to Eat 2 is a web app that
                            chooses where you go out to eat. We&apos;ve all been there with friends and/or family. Trying to find a
                            place to go and no one can decide or agree. This web app allows you to create an account, add
                            restaurants, tag them, and let it choose where to go grab food.
                        </p>
                        <p>It is built using ASP.NET Core MVC. It uses Bootstrap for the UI.</p>
                    </>
                )}
            />

            <WorkItem
                name="Where Do You Want to Eat"
                image={(
                    <Image
                        src="/images/work/wheredoyouwanttoeat/where-do-you-want-to-eat.jpg"
                        alt="A screenshot of Where Do You Want to Eat?"
                        width={1600}
                        height={1000}
                    />
                )}
                content={(
                    <>
                        <p>
                            Ever have the back and forth with someone trying to figure out where you want to get food? Yeah,
                            thought so.
                        </p>
                        <p>
                            This random restaurant chooser was built using the Google Maps and Places API to get restaurants in
                            the local area and choose one for the user to go to.
                        </p>
                        <p>
                            Unfortunately, Google changed their policies for their API and I had to deactivate it. You can view
                            the source on <a href="https://github.com/kpwags/Where-Do-You-Want-To-Eat">GitHub</a>.
                        </p>
                    </>
                )}
            />

            <WorkItem
                name="OpenVoter"
                image={(
                    <Image
                        src="/images/work/openvoter/openvoter.png"
                        alt="A screenshot of OpenVoter"
                        width={469}
                        height={367}
                    />
                )}
                content={(
                    <>
                        <p>
                            OpenVoter was a social media CMS written in PHP with a MySQL database backend. For the front-end, it
                            utilized HTML/CSS, Javascript, and jQuery. It allowed users to run their own Digg or Reddit-like
                            site. It was discontinued in 2012.
                        </p>
                    </>
                )}
                bordered={false}
            />
        </div>
    </main>
);

export default Work;
