/* eslint-disable max-len */
import Head from 'next/head';
import Link from 'next/link';
import PostImage from '@components/PostImage';
import ExternalLink from '@components/ExternalLink';
import styles from '@css/Uses.module.css';

const Uses = (): JSX.Element => (
    <>
        <Head><title>Uses - Keith Wagner</title></Head>
        <h1>What I Use</h1>
        <div className={styles.container}>
            <p><em>Last Updated: July 2022</em></p>
            <h2 id="computers">Computers</h2>

            <h3 id="desktop">Desktop</h3>
            <p>
                I have a custom build PC. It runs an AMD Ryzen 7 5800X 8-Core 3.8GHz Processor with 32 GB of RAM and an older, but still decent nVidia GTX 1060 graphics card.
            </p>

            <h3 id="laptop">Laptop</h3>
            <p>
                I use a 13&quot; M1 MacBook Pro as my daily driver. It took a little bit of time to get used to the smaller screen, but so far it&apos;s been a
                fantastic machine. I keep it plugged into a docking station most of the time so I&apos;m able to use it with my dual 27&quot; monitors. The battery life on it is amazing.
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
                In my personal office where I have my MacBook and PC, I run dual 27&quot; <ExternalLink href="https://www.amazon.com/gp/product/B07PGL2WVS">LG 4k monitors</ExternalLink> on arms.
                The screens are absolutely stunning and it&apos;s nice to have a browser open on one window, and Visual Studio Code open on the other when I&apos;m developing.
            </p>

            <h3 id="work-office">Work Office</h3>

            <PostImage
                src="/images/uses/work-desk.jpg"
                alt="My work desk setup with an ultrwide 34'' flanked by a vertical 24'' monitor on the left"
                width={1920}
                height={1461}
                centered
                shadowed
            />

            <p>
                I have a second setup to keep my personal separate from work. For work, I use a <ExternalLink href="https://www.amazon.com/gp/product/B07FBS36W2">Samsung 34&quot; Ultrawide Monitor</ExternalLink> with
                a <ExternalLink href="https://www.amazon.com/gp/product/B00PC9HFNY/ref=ppx_yo_dt_b_asin_title_o01_s00?ie=UTF8&psc=1">Dell 24&quot; 4k</ExternalLink> monitor vertical next to it.
            </p>

            <h2 id="peripherals">Peripherals</h2>

            <h3 id="keyboard">Keyboard</h3>
            <p>
                I use the <ExternalLink href="https://www.keychron.com/products/keychron-k4-wireless-mechanical-keyboard-version-2?variant=32287332696153">Keychron K4</ExternalLink> with the aluminum frame and Gateron Red switches on both my work and personal
                machines. I love its Bluetooth connectivity between my MacBook and my PC as well as its compact frame and number keypad.
            </p>

            <h3 id="mouse">Mouse</h3>
            <p>
                I have the&nbsp;
                <ExternalLink href="https://www.logitech.com/en-us/products/mice/mx-master-3.910-005620.html">Logitech MX Master 3</ExternalLink> for both my personal and work desk.
            </p>

            <h2 id="mobile-devices">Mobile Devices</h2>

            <h3 id="phone">Phone</h3>
            <p>
                I&apos;m currently using an iPhone 14 Pro Max. The screen is absolutely stunning and it takes fantastic photos.
            </p>

            <h3 id="smart-watch">Smart Watch</h3>
            <p>
                To go along with my iPhone, I have the Apple Watch Series 8 with cell service. The watch is awesome for keeping track of my
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
                I also found out that <ExternalLink href="https://libbyapp.com/welcome">Libby</ExternalLink> works through my township&apos;s library, so
                I can borrow books for my Kindle as well as use the Amazon store. I&apos;m not a super huge fan of being tied to Amazon, but I can&apos;t
                help but love the convenience of it. I do utilize <ExternalLink href="https://calibre-ebook.com/">Calibre</ExternalLink> from time to
                time to help organize my library.
            </p>

            <h2 id="headphones">Headphones</h2>
            <p>
                I use several different pairs of headphones depending on where I am and what I&apos;m doing, or in some cases, what
                the battery situation of the different pairs is.
            </p>
            <p>
                <ExternalLink href="https://www.apple.com/airpods-pro/">Apple AirPods Pro</ExternalLink>:
                It took a little bit of persuading and a sale, but I picked a pair of these up and the integration into the iPhone
                and iPad ecosystem is pretty awesome. The battery and sound quality is top notch. I use these primarily with my iPhone when
                I&apos;m running or listening to podcasts. I do use them from time to time when I&apos;m out on the porch with my MacBook Pro.
            </p>
            <p>
                <ExternalLink href="https://en-us.sennheiser.com/audio-headphones-high-end-hd-558">Sennheiser HD 558</ExternalLink>:
                I got these a long while ago and still use them while working at my desk quite a bit.
            </p>
            <p>
                <ExternalLink href="https://electronics.sony.com/audio/headphones/headband/p/wh1000xm4-b">Sony WH-1000XM4</ExternalLink>:
                I got these just before Christmas 2021 on a Woot refurbished deal and they are fantastic.
            </p>

            <h2 id="cameras">Cameras</h2>
            <h3 id="primary-camera">Primary Camera</h3>
            <p>
                My primary camera is the <ExternalLink href="https://www.usa.canon.com/internet/portal/us/home/products/details/cameras/eos-dslr-and-mirrorless-cameras/dslr/eos-60d">Canon EOS 60D</ExternalLink>. I
                don&apos;t take it out as much as I&apos;d like to, but I love what I can do with it. I still have so much more to learn and I&apos;m sure what I can do is only a small subset of what is possible.
                As an added bonus, my wife has the same camera, so we can share lenses.
            </p>

            <h3 id="secondary-camera">Secondary Camera</h3>
            <p>
                My secondary camera is the <ExternalLink href="https://www.usa.canon.com/internet/portal/us/home/products/details/cameras/point-and-shoot-digital-cameras/advanced-cameras/powershot-g1-x-mark-iii">Canon PowerShot G1X</ExternalLink>. I got
                this to have a smaller camera with some pretty powerful features. It&apos;s not quite pocket-size, but it is easier to carry around than the 60D.
            </p>

            <h3 id="lenses">Lenses</h3>
            <p>
                To go with my 60D, I have several lenses for various uses.
            </p>
            <p>
                <strong>Tamron AF 28-75mm</strong>: A former co-worker recommended this lens to me as a modest upgrade to the kit lens that came with my camera.
                It&apos;s become my general go-to lens.
            </p>
            <p>
                <strong>Canon Telphoto EFS 55-250mm</strong>: When I bought the camera from Best Buy, it came with this lens. It&apos;s not a bad option for taking photos of far away objects.
            </p>
            <p>
                <strong>Canon Wide Angle EFS 10-18mm</strong>: Lauren got this for me for Christmas one year and it adds a nice way for me to get more in my shots.
            </p>
            <p>
                <strong>Canon Kit Lens EFS 18-135mm</strong>: Just the standard lens that came with the 60D.
            </p>

            <h3 id="other-cameras">Other Cameras</h3>
            <p>
                I have 2 GoPro Hero 3&apos;s that I occasionally use to record my hockey games when I&apos;m in net. It helps me see where I need to improve.
            </p>
            <p>
                I also have an older Sony point-and-shoot digital camera that I keep lying around in case I find a good use for it.
            </p>

            <h2 id="development">Development</h2>

            <h3 id="code-editors">Code Editors</h3>
            <p>
                <ExternalLink href="https://code.visualstudio.com/">Visual Studio Code</ExternalLink>: My primary editor for my development.
            </p>
            <p>
                <ExternalLink href="https://www.jetbrains.com/rider/">JetBrains Rider</ExternalLink>: I needed a good IDE on my Mac for my .NET projects and Rider is awesome. Might even switch to it on Windows too.
            </p>
            <p>
                <ExternalLink href="https://visualstudio.microsoft.com/vs/">Visual Studio 2022</ExternalLink>: On my desktop, I will sometimes use Visual Studio 2022 for some of the backend work for my .NET projects.
            </p>

            <h3 id="database">Database</h3>
            <p>
                For my .NET apps, I stick with the Microsoft stack and use Microsoft SQL Server.
            </p>
            <p>
                <ExternalLink href="https://docs.microsoft.com/en-us/sql/azure-data-studio/download-azure-data-studio?view=sql-server-ver15">Azure Data Studio</ExternalLink>: I found this when I needed to connect to SQL from my MacBook, now I use it over SSMS.
            </p>
            <p>
                <ExternalLink href="https://docs.microsoft.com/en-us/sql/linux/quickstart-install-connect-docker?view=sql-server-ver15&pivots=cs1-bash">Docker</ExternalLink>: I also use Docker to run a SQL Server image on my MacBook Pro for local development.
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
                <strong>MacOS</strong>:
                On my MacBook Pro, I use <ExternalLink href="https://iterm2.com/">iTerm</ExternalLink> with <ExternalLink href="https://ohmyz.sh/">Oh My Zsh</ExternalLink>.
            </p>
            <p>
                <strong>Windows</strong>:
                On my Destop, I use <ExternalLink href="https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701">Windows Terminal</ExternalLink> with PowerShell and <ExternalLink href="https://ohmyz.sh/">Oh My Zsh</ExternalLink>.
            </p>

            <h3 id="vscode-plugins">Code Plugins</h3>
            <p>
                Visual Studio Code has an amazing suite of plugins to make development easier and faster.
            </p>
            <ul className={styles.vscodePlugins}>
                <li><ExternalLink href="https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag">Auto Close Tag</ExternalLink></li>
                <li><ExternalLink href="https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag">Auto Rename Tag</ExternalLink></li>
                <li><ExternalLink href="https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp">C#</ExternalLink></li>
                <li><ExternalLink href="https://marketplace.visualstudio.com/items?itemName=jchannon.csharpextensions">C# Extensions</ExternalLink></li>
                <li><ExternalLink href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint">ESLint</ExternalLink></li>
                <li><ExternalLink href="https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens">GitLens</ExternalLink></li>
                <li><ExternalLink href="https://marketplace.visualstudio.com/items?itemName=firsttris.vscode-jest-runner">Jest Runner</ExternalLink></li>
                <li><ExternalLink href="https://marketplace.visualstudio.com/items?itemName=cmstead.jsrefactor">JS Refactor</ExternalLink></li>
                <li><ExternalLink href="https://marketplace.visualstudio.com/items?itemName=eriklynd.json-tools">JSON tools</ExternalLink></li>
                <li><ExternalLink href="https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script">npm</ExternalLink></li>
                <li><ExternalLink href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode">Prettier</ExternalLink></li>
                <li><ExternalLink href="https://marketplace.visualstudio.com/items?itemName=xabikos.ReactSnippets">Reactjs Code Snippets</ExternalLink></li>
                <li><ExternalLink href="https://marketplace.visualstudio.com/items?itemName=DotJoshJohnson.xml">XML Tools</ExternalLink></li>
            </ul>

            <h2 id="software">Software</h2>
            <p>I&apos;m not going to bother to list everything since there&apos;s so much, but here&apos;s a basic run down.</p>

            <h3 id="web-browsing">Web Browsing</h3>
            <p>
                I&apos;ve been using <ExternalLink href="https://arc.net/">Arc</ExternalLink> and while it took a little bit to get used to, but I&apos;m liking it so far.
            </p>

            <h3 id="email">Email</h3>
            <p>
                My primary email is hosted through&nbsp;
                <ExternalLink href="https://www.fastmail.com/">FastMail</ExternalLink> with my kpwags.com domain. I appreciate having control of my own email without tracking.
            </p>
            <p>
                For clients I use <ExternalLink href="https://www.thunderbird.net/en-US/">Thunderbird</ExternalLink> on Windows and the default Mail app on iOS and MacOS.
            </p>

            <h3 id="notes">Notes</h3>
            <p>
                I&apos;ve gone back and forth quite a bit on notes. I currently use a Dropbox-Synced folder full of markdown files to keep notes.
            </p>

            <h3 id="tasks">Tasks &amp; To-Dos</h3>
            <p>
                I&apos;ve always jumped around between apps tracking what I want to accomplish. Currently I&apos;m
                using <ExternalLink href="https://culturedcode.com/things/">Things</ExternalLink> to keep track of my tasks.
                I have it on my iPhone, iPad, & MacBook.
            </p>

            <h3 id="rss">RSS</h3>
            <p>
                I&apos;m a big proponent of RSS feeds. I feel like they&apos;re so much better than social media. Others can
                probably describe the benefits better than I can, but every site, especially blogs should have one. I
                use <ExternalLink href="https://www.feedbin.com">Feedbin</ExternalLink> to manage my feeds. It has a lot of
                nice features to improve the experience. I use <ExternalLink href="https://www.reederapp.com/">Reeder</ExternalLink> on iOS to read my feeds.
            </p>

            <h3 id="photo-editing">Photo Editing</h3>
            <p>
                I currently use Adobe Lightroom and Photoshop to process and edit my photography.
            </p>

            <h3 id="fitness">Fitness</h3>
            <p>
                I use Apple&apos;s built in Activity app and my Apple Watch to keep track of my runs and bike rides.
            </p>

            <h3 id="music">Music</h3>
            <p>
                While I still do buy music, I primarily use <ExternalLink href="https://www.spotify.com/">Spotify</ExternalLink> to
                listen to music. The ability to listen to such a huge library, combined with it&apos;s amazing discovery modes, make it a tough deal to beat.
            </p>

            <h3 id="podcasts">Podcasts</h3>
            <p>
                I&apos;ve been a long-time user of <ExternalLink href="https://www.pocketcasts.com/">PocketCasts</ExternalLink> for subscribing to and listening to my overly large <Link href="/listening"><a>podcast subscription list</a></Link>.
            </p>

            <h2 id="gaming">Gaming Systems</h2>

            <h3 id="xbox">XBOX Series X</h3>
            <p>
                I was lucky enough to get the XBOX Series X on launch and it&apos;s been a fantastic gaming system. It&apos;s full
                backwards compatability is awesome and Microsoft&apos;s GamePass is an amazing deal.
            </p>

            <h3 id="playstation-5">PlayStation 5</h3>
            <p>
                I recently managed to get my hands on the PlayStation 5.
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
                We use <ExternalLink href="https://www.philips-hue.com/en-us">Philips Hue</ExternalLink> for
                much of our smart lighting. We have under cabinet lights and light bulbs in our living room
                that allow for integration into the Google ecosystem.
            </p>
        </div>
    </>
);

export default Uses;
