/* eslint-disable max-len */
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import TableOfContentsPage from '@components/TableOfContentsPage';
import PostImage from '@components/PostImage';

const Container = styled.div`
    margin: 40px 0;
    display: flex;

    h3 {
        margin: 15px 0;
    }

    ul.vscode-plugins {
        margin:0 0 30px 0;
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
        <main>
            <h1>What I Use</h1>
            <Container>
                <TableOfContentsPage>
                    <p><em>Last Updated: September 2021</em></p>
                    <h2 id="computers">Computers</h2>

                    <h3 id="desktop">Desktop</h3>
                    <p>
                        I have an older custom build desktop that I use for development and gaming. It&apos;s starting to show
                        its age though with some of the newer games. I haven&apos;t decided how much PC gaming I&apos;m going
                        to be doing, so I&apos;m not certain if I&apos;ll end up rebuilding it or getting rid of it. It still
                        does run well though, so its got some life left to it. It runs an older Core i7, 16GB RAM & a
                        GTX 1060 graphics card.
                    </p>

                    <h3 id="laptop">Laptop</h3>
                    <p>
                        Back in June, my old 2015 MacBook Pro made some popping noises which scared me into upgrading my laptop.
                        I was hoping to hold off and wait for Apple to release a 15 or 16&quot; MacBook Pro with the M1 chip, but
                        since I couldn&apos;t trust my laptop to not catch fire, I decided the smaller 13&quot; MacBook Pro would
                        work for me. It took a little bit of time to get used to the smaller screen, but so far it&apos;s been a
                        fantastic machine. I keep it plugged into a docking station most of the time so I&apos;m able to use it with
                        my dual 27&quot; monitors. The battery life on it is amazing.
                    </p>

                    <h2 id="displays">Displays</h2>

                    <h3 id="personal-office">Personal Office</h3>

                    <PostImage
                        src="/images/uses/personal-desk.jpg"
                        alt="My personal desk setup with dual 27'' 4k monitors"
                        width={1920}
                        height={1167}
                        centered
                        shadowed
                    />

                    <p>
                        In my personal office where I have my MacBook and PC, I run dual 27&quot;
                        <a href="https://www.amazon.com/gp/product/B07PGL2WVS" target="_blank" rel="noreferrer nofollow">LG 4k monitors</a> on arms.
                        The screens are absolutely stunning and it&apos;s nice to have a browser open on one window, and
                        Visual Studio Code open on the other when I&apos;m developing.
                    </p>

                    <h3 id="work-office">Work Office</h3>

                    <PostImage
                        src="/images/uses/work-desk.jpg"
                        alt="My work desk setup with an ultrwide 34'' flanked by a vertical 21'' monitor on either side"
                        width={1920}
                        height={1440}
                        centered
                        shadowed
                    />

                    <p>
                        In my basement, I have a desk for working my day job. There I use a
                        <a href="https://www.amazon.com/gp/product/B07FBS36W2" target="_blank" rel="noreferrer nofollow">Samsung 34&quot; Ultrawide Monitor</a> with two ASUS
                        21&quot; monitors my job provided me. I consistently go back and forth with whether I like an ultrawide or dual
                        monitors as both have their advantages &amp; disadvantages. Either way, the ultrawide is really nice for viewing
                        multiple code files at once side by side.
                    </p>

                    <h2 id="peripherals">Peripherals</h2>

                    <h3 id="keyboard">Keyboard</h3>
                    <p>
                        I picked up the&nbsp;
                        <a
                            href="https://www.keychron.com/products/keychron-k4-wireless-mechanical-keyboard-version-2?variant=32287332696153"
                            target="_blank"
                            rel="noreferrer nofollow"
                        >
                            Keychron K4
                        </a>
                        &nbsp;with the aluminum frame and Gateron Red switches. I love its Bluetooth connectivity between my MacBook and my PC as well as its compact
                        frame and number keypad.
                    </p>
                    <p>
                        For my work office, I use the&nbsp;
                        <a
                            href="https://www.amazon.com/gp/product/B071PC4D84/ref=ppx_yo_dt_b_asin_title_o05_s00?ie=UTF8&psc=1"
                            target="_blank"
                            rel="noreferrer nofollow"
                        >
                            Vortexgear
                        </a>
                        &nbsp;compact mechanical keyboard. I kind of miss having the number pad, but the tactile feedback I get from the keypresses
                        is totally worth it.
                    </p>

                    <h3 id="mouse">Mouse</h3>
                    <p>
                        I have the&nbsp;
                        <a
                            href="https://www.logitech.com/en-us/products/mice/mx-master-3.910-005620.html"
                            target="_blank"
                            rel="noreferrer nofollow"
                        >
                            Logitech MX Master 3
                        </a>
                        &nbsp;for both my personal and work desk.
                    </p>

                    <h2 id="mobile-devices">Mobile Devices</h2>

                    <h3 id="phone">Phone</h3>
                    <p>
                        I&apos;m currently using an iPhone 12 Pro. The screen is absolutely stunning and it takes fantastic photos.
                    </p>

                    <h3 id="smart-watch">Smart Watch</h3>
                    <p>
                        To go along with my iPhone, I have the Apple Watch Series 5. The watch is awesome for keeping track of my
                        fitness when running &amp; working out. The trick with the watch is to be selective about what alerts you want shared
                        between your phone and your wrist. In my case, most alerts are off on the watch because let&apos;s face it, how many
                        notifications need to be responded to immediately? The occasional phone call I take on the watch makes me feel like
                        Dick Tracy.
                    </p>

                    <h3 id="tablet">Tablet</h3>
                    <p>
                        I recently upgraded to the 2021 model of the 11&quot; iPad Pro. The screen is beautiful and the pencil magnetically
                        attaching to the side of the tablet is awesome. It makes a great RSS &amp; news reader as well as a device to watch
                        videos now and again.
                    </p>

                    <h3 id="ereader">E-Reader</h3>
                    <p>
                        While the iPad does a good job for reading the news, I love my Kindle Paper White for reading books and long
                        pieces. The screen is easy on the eyes, good in the sun, and in darker rooms.
                    </p>
                    <p>
                        I also found out that&nbsp;
                        <a
                            href="https://libbyapp.com/welcome"
                            target="_blank"
                            rel="noreferrer nofollow"
                        >
                            Libby
                        </a>
                        &nbsp;works through my township&apos;s library, so I can borrow books for my Kindle as well as use the Amazon
                        store. I&apos;m not a super huge fan of being tied to Amazon, but I can&apos;t help but love the convenience
                        of it. I do utilize&nbsp;
                        <a
                            href="https://calibre-ebook.com/"
                            target="_blank"
                            rel="noreferrer nofollow"
                        >
                            Calibre
                        </a>
                        &nbsp;from time to time to help organize my library.
                    </p>

                    <h2 id="headphones">Headphones</h2>
                    <p>
                        I use several different pairs of headphones depending on where I am and what I&apos;m doing, or in some cases, what
                        the battery situation of the different pairs is.
                    </p>
                    <p>
                        <strong>
                            <a href="https://www.apple.com/airpods-pro/">Apple AirPods Pro</a>:
                        </strong>
                        &nbsp;It took a little bit of persuading and a sale, but I picked a pair of these up and the integration into the iPhone
                        and iPad ecosystem is pretty awesome. The battery and sound quality is top notch. I use these primarily with my iPhone when
                        I&apos;m running or listening to podcasts. I do use them from time to time when I&apos;m out on the porch with my MacBook Pro.
                    </p>
                    <p>
                        <strong>
                            <a href="https://www.anker.com/store/liberty-air-2/A3910011">Anker Liberty Air 2</a>:
                        </strong>
                        &nbsp;Originally, I couldn&apos;t justify the price for Apple&apos;s AirPods Pro, so I went with these and have not been disappointed. Good sound
                        quality and the pure wireless factor is nice. I don&apos;t use these as much anymore, but they&apos;re still nice to have.
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
                    <h3 id="primary-camera">Primary Camera</h3>
                    <p>
                        My primary camera is the&nbsp;
                        <a
                            href="https://www.usa.canon.com/internet/portal/us/home/products/details/cameras/eos-dslr-and-mirrorless-cameras/dslr/eos-60d"
                            target="_blank"
                            rel="noreferrer nofollow"
                        >
                            Canon EOS 60D
                        </a>
                        . I don&apos;t take it out as much as I&apos;d like to, but I love what I can do
                        with it. I still have so much more to learn and I&apos;m sure what I can do is only a small subset of what is possible.
                        As an added bonus, my wife has the same camera, so we can share lenses.
                    </p>

                    <h3 id="secondary-camera">Secondary Camera</h3>
                    <p>
                        My secondary camera is the&nbsp;
                        <a
                            href="https://www.usa.canon.com/internet/portal/us/home/products/details/cameras/point-and-shoot-digital-cameras/advanced-cameras/powershot-g1-x-mark-iii"
                            target="_blank"
                            rel="noreferrer nofollow"
                        >
                            Canon PowerShot G1X
                        </a>
                        . I got this to have a smaller camera with some pretty powerful features. It&apos;s not quite pocket-size, but it is
                        easier to carry around than the 60D.
                    </p>

                    <h3 id="lenses">Lenses</h3>
                    <p>
                        To go with my 60D, I have several lenses for various uses.
                    </p>
                    <p>
                        <strong>
                            Tamron:
                        </strong>
                        &nbsp;A former co-worker recommended this lens to me as a modest upgrade to the kit lens that came with my camera.
                        It&apos;s become my general go-to lens.
                    </p>
                    <p>
                        <strong>
                            Canon Telphoto:
                        </strong>
                        &nbsp;When I bought the camera from Best Buy, it came with this lens. It&apos;s not a bad option for taking photos
                        of far away objects.
                    </p>
                    <p>
                        <strong>
                            Canon Wide Angle:
                        </strong>
                        &nbsp;Lauren got this for me for Christmas one year and it adds a nice way for me to get more in my shots.
                    </p>
                    <p>
                        <strong>
                            Canon Kit Lens:
                        </strong>
                        &nbsp;Just the standard lens that came with the 60D.
                    </p>

                    <h3 id="other-cameras">Other Cameras</h3>
                    <p>
                        I have 2 GoPro Hero 3&apos;s that I occasionally use to record my hockey games when I&apos;m in net. It helps me see where
                        I need to improve.
                    </p>
                    <p>
                        I also have an older Sony point-and-shoot digital camera that I keep lying around in case I find a good use for it.
                    </p>

                    <h2 id="development">Development</h2>

                    <h3 id="code-editors">Code Editors</h3>
                    <p>
                        <strong>
                            <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer nofollow">Visual Studio Code</a>:
                        </strong>
                        &nbsp;My primary editor for my development.
                    </p>
                    <p>
                        <strong>
                            <a href="https://visualstudio.microsoft.com/vs/" target="_blank" rel="noreferrer nofollow">Visual Studio 2019</a>:
                        </strong>
                        &nbsp;On my desktop, I will sometimes use Visual Studio 2019 for some of the backend work for my .NET Core projects.
                    </p>

                    <h3 id="database">Database</h3>
                    <p>
                        For my .NET Core apps, I stick with the Microsoft stack and use Microsoft SQL Server.
                    </p>
                    <p>
                        <strong>
                            <a
                                href="https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver15"
                                target="_blank"
                                rel="noreferrer nofollow"
                            >
                                SQL Management Studio
                            </a>:
                        </strong>
                        &nbsp;On my desktop, I keep it simple and just use Microsoft SQL Management Studio to manage my database.
                    </p>
                    <p>
                        <strong>
                            <a
                                href="https://docs.microsoft.com/en-us/sql/azure-data-studio/download-azure-data-studio?view=sql-server-ver15"
                                target="_blank"
                                rel="noreferrer nofollow"
                            >
                                Azure Data Studio
                            </a>:
                        </strong>
                        &nbsp;On my MacBook Pro, I use this to connect and query my SQL database.
                    </p>
                    <p>
                        <strong>
                            <a
                                href="https://docs.microsoft.com/en-us/sql/linux/quickstart-install-connect-docker?view=sql-server-ver15&pivots=cs1-bash"
                                target="_blank"
                                rel="noreferrer nofollow"
                            >
                                Docker
                            </a>:
                        </strong>
                        &nbsp;I also use Docker to run a SQL Server image on my MacBook Pro for local development.
                    </p>

                    <h3 id="terminal">Terminal</h3>

                    <PostImage
                        src="/images/uses/iterm.jpg"
                        alt="My iTerm setup on my MacBook Pro"
                        width={600}
                        height={297}
                        centered
                        shadowed
                    />

                    <p>
                        <strong>
                            MacOS:
                        </strong>
                        &nbsp;On my MacBook Pro, I use&nbsp;
                        <a
                            href="https://iterm2.com/"
                            target="_blank"
                            rel="noreferrer nofollow"
                        >
                            iTerm
                        </a>
                        &nbsp;with&nbsp;
                        <a
                            href="https://ohmyz.sh/"
                            target="_blank"
                            rel="noreferrer nofollow"
                        >
                            Oh My Zsh
                        </a>
                    </p>
                    <p>
                        <strong>
                            Windows:
                        </strong>
                        &nbsp;On my Destop, I use&nbsp;
                        <a
                            href="https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701"
                            target="_blank"
                            rel="noreferrer nofollow"
                        >
                            Windows Terminal
                        </a>
                        &nbsp;with PowerShell and&nbsp;
                        <a
                            href="https://ohmyz.sh/"
                            target="_blank"
                            rel="noreferrer nofollow"
                        >
                            Oh My Zsh
                        </a>
                    </p>

                    <h3 id="vscode-plugins">Code Plugins</h3>
                    <p>
                        Visual Studio Code has an amazing suite of plugins to make development easier and faster.
                    </p>
                    <ul className="vscode-plugins">
                        <li><a href="https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag" target="_blank" rel="noreferrer nofollow">Auto Close Tag</a></li>
                        <li><a href="https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag" target="_blank" rel="noreferrer nofollow">Auto Rename Tag</a></li>
                        <li><a href="https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp" target="_blank" rel="noreferrer nofollow">C#</a></li>
                        <li><a href="https://marketplace.visualstudio.com/items?itemName=jchannon.csharpextensions" target="_blank" rel="noreferrer nofollow">C# Extensions</a></li>
                        <li><a href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint" target="_blank" rel="noreferrer nofollow">ESLint</a></li>
                        <li><a href="https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens" target="_blank" rel="noreferrer nofollow">GitLens</a></li>
                        <li><a href="https://marketplace.visualstudio.com/items?itemName=firsttris.vscode-jest-runner" target="_blank" rel="noreferrer nofollow">Jest Runner</a></li>
                        <li><a href="https://marketplace.visualstudio.com/items?itemName=cmstead.jsrefactor" target="_blank" rel="noreferrer nofollow">JS Refactor</a></li>
                        <li><a href="https://marketplace.visualstudio.com/items?itemName=eriklynd.json-tools" target="_blank" rel="noreferrer nofollow">JSON tools</a></li>
                        <li><a href="https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script" target="_blank" rel="noreferrer nofollow">npm</a></li>
                        <li><a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode" target="_blank" rel="noreferrer nofollow">Prettier</a></li>
                        <li><a href="https://marketplace.visualstudio.com/items?itemName=xabikos.ReactSnippets" target="_blank" rel="noreferrer nofollow">Reactjs Code Snippets</a></li>
                        <li><a href="https://marketplace.visualstudio.com/items?itemName=DotJoshJohnson.xml" target="_blank" rel="noreferrer nofollow">XML Tools</a></li>
                    </ul>

                    <h2 id="software">Software</h2>
                    <p>I&apos;m not going to bother to list everything since there&apos;s so much, but here&apos;s a basic run down.</p>

                    <h3 id="web-browsing">Web Browsing</h3>
                    <p>
                        I&apos;ve been using&nbsp;
                        <a
                            href="https://brave.com/"
                            target="_blank"
                            rel="noreferrer nofollow"
                        >
                            Brave
                        </a>
                        &nbsp; to browse the web. I don&apos;t use the Brave Rewards functionality, but the browser is fast and the blocking
                        of trackers and ads is important to me.
                    </p>

                    <h3 id="email">Email</h3>
                    <p>
                        My primary email is hosted through&nbsp;
                        <a
                            href="https://www.fastmail.com/"
                            target="_blank"
                            rel="noreferrer nofollow"
                        >
                            FastMail
                        </a>
                        &nbsp;with my kpwags.com domain. I appreciate having control of my own email without tracking. I use&nbsp;
                        I&apos;ve been using&nbsp;
                        <a
                            href="https://www.thunderbird.net/en-US/"
                            target="_blank"
                            rel="noreferrer nofollow"
                        >
                            Thunderbird
                        </a>
                        &nbsp; and Apple&apos;s default mail app as clients.
                    </p>

                    <h3 id="notes">Notes</h3>
                    <p>
                        I&apos;ve started using&nbsp;
                        <a
                            href="https://www.notion.so"
                            target="_blank"
                            rel="noreferrer nofollow"
                        >
                            Notion
                        </a>
                        &nbsp;for my notes. I&apos;m not entirely sure how I feel about it. It is definitely powerful, but I might
                        go back to using a synched folder on Dropbox for my notes.
                    </p>

                    <h3 id="tasks">Tasks &amp; To-Dos</h3>
                    <p>
                        I&apos;ve always jumped around between apps tracking what I want to accomplish. Currently I&apos;m using&nbsp;
                        <a
                            href="https://culturedcode.com/things/"
                            target="_blank"
                            rel="noreferrer nofollow"
                        >
                            Things
                        </a>
                        &nbsp;to keep track of my tasks. I have it on my iPhone and iPad. I still need to decide if I want to pay the additional
                        money to get a copy of it on my MacBook Pro. Its only downside for me is that I can&apos;t mark recurring tasks complete
                        early.
                    </p>

                    <h3 id="rss">RSS</h3>
                    <p>
                        I&apos;m a big proponent of RSS feeds. I feel like they&apos;re so much better than social media. Others can
                        probably describe the benefits better than I can, but every site, especially blogs should have one. I use&nbsp;
                        <a
                            href="https://www.feedbin.com"
                            target="_blank"
                            rel="noreferrer nofollow"
                        >
                            Feedbin
                        </a>
                        &nbsp;to manage my feeds. It has a lot of nice features to improve the experience. I use&nbsp;
                        <a
                            href="https://www.reederapp.com/"
                            target="_blank"
                            rel="noreferrer nofollow"
                        >
                            Reeder
                        </a>
                        &nbsp;on my iOS devices to read my feeds.
                    </p>

                    <h3 id="photo-editing">Photo Editing</h3>
                    <p>
                        I currently use Adobe Lightroom and Photoshop to process and edit my photography. I&apos;m considering
                        switching to an older version of Lightroom or to&nbsp;
                        <a
                            href="https://darkroom.co/"
                            target="_blank"
                            rel="noreferrer nofollow"
                        >
                            Darkroom
                        </a>
                        &nbsp;to allow me to cancel the Creative Cloud subscription.
                    </p>

                    <h3 id="fitness">Fitness</h3>
                    <p>
                        I use two apps to track my fitness.
                    </p>
                    <p>
                        <strong>
                            Weight Lifting:
                        </strong>
                        &nbsp;I use&nbsp;
                        <a
                            href="https://www.strong.app/"
                            target="_blank"
                            rel="noreferrer nofollow"
                        >
                            Strong
                        </a>
                        &nbsp;to track my lifts. It&apos;s plate calculator is useful when I forget how to do math. The rest
                        timer helps keep me on track as it can be too easy sometimes for time to slip away.
                    </p>
                    <p>
                        <strong>
                            Running/Biking:
                        </strong>
                        &nbsp;I use Apple&apos;s built in Activity app and my Apple Watch to keep track of my runs and bike rides.
                    </p>

                    <h3 id="music">Music</h3>
                    <p>
                        While I still do buy music, I primarily use&nbsp;
                        <a
                            href="https://www.spotify.com/"
                            target="_blank"
                            rel="noreferrer nofollow"
                        >
                            Spotify
                        </a>
                        &nbsp;to listen to music. The ability to listen to such a huge library, combined with it&apos;s amazing
                        discovery modes, make it a tough deal to beat.
                    </p>

                    <h3 id="podcasts">Podcasts</h3>
                    <p>
                        I&apos;ve been a long-time user of&nbsp;
                        <a
                            href="https://www.pocketcasts.com/"
                            target="_blank"
                            rel="noreferrer nofollow"
                        >
                            PocketCasts
                        </a>
                        &nbsp;for subscribing to and listening to my overly large <Link href="/listening"><a>podcast subscription list</a></Link>.
                    </p>

                    <h2 id="gaming">Gaming Systems</h2>

                    <h3 id="xbox">XBOX Series X</h3>
                    <p>
                        I was lucky enough to get the XBOX Series X on launch and it&apos;s been a fantastic gaming system. It&apos;s full
                        backwards compatability is awesome and Microsoft&apos;s GamePass is an amazing deal.
                    </p>

                    <h3 id="playstation-4">PlayStation 4</h3>
                    <p>
                        I still keep my PS4 around to play online with friends and play some of the PS4-exclusive titles.
                    </p>

                    <h3 id="other-gaming">Other Systems</h3>
                    <p>
                        I also have the Nintendo Wii, PS3, GameCube, N64, &amp; Super Nintendo lying around for when my nostalgia
                        itch comes and goes.
                    </p>

                    <h2 id="video-streaming">Video Streaming</h2>

                    <h3 id="apple-tv">Apple TV</h3>
                    <p>
                        For our living room TV, we use a 3rd generation Apple TV for streaming.
                    </p>

                    <h3 id="roku">Roku</h3>
                    <p>
                        For our bedroom TV, we use a Roku for access to our streaming services.
                    </p>

                    <h2 id="smart-home">Smart Home</h2>

                    <h3 id="google-home">Google Home</h3>
                    <p>
                        We use a Google Home &amp; 2 Google Home Minis to listen to music and control our smart lights.
                    </p>

                    <h3 id="philips-hue">Hue</h3>
                    <p>
                        We use&nbsp;
                        <a
                            href="https://www.philips-hue.com/en-us"
                            target="_blank"
                            rel="noreferrer nofollow"
                        >
                            Philips Hue
                        </a>
                        &nbsp;for much of our smart lighting. We have under cabinet lights and light bulbs in our living room
                        that allow for integration into the Google ecosystem.
                    </p>
                </TableOfContentsPage>
            </Container>
        </main>
    </>
);

export default Uses;
