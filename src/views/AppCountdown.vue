<script>
import { mapStores } from 'pinia';
import { useVarStore } from '../stores/VarStore';


export default {
    components: {

    },
    computed: {
        ...mapStores(useVarStore)
    },
    data() {
        return {
            isBefore: false,
            countdown: {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            },
            displayCountdownTime: '00:00:00:00',
            parallaxStyle: {
                backgroundPosition: '50% 50%',
                transition: 'background-size 0.1s, background-position 0.1s',
            },
            faq: [
                {
                    question: "What version is the server on?",
                    answer: "The server is running on Minecraft JE version 1.21.1, the latest stable release - we might migrate to future versions if there is a need for that.<br><br>The server also supports Bedrock connections, make sure to use the latest version available to connect from your mobile device or console!",
                    open: false
                },
                {
                    question: "Is it Java or Bedrock?",
                    answer: "As mentioned above, the server is running on Java but supports connections from Bedrock players as well - when connecting you will be prompted to connect your Microsoft account, and you will play as your Java profile.<br><br>This also allows you to connect to your Java profile from your mobile device or console when you're not at your PC.",
                    open: false
                },
                {
                    question: "How to join Maevetopia?",
                    answer: "You can join by connecting to the server address: <code>mc.maevetopia.fun</code> using your Minecraft client. The port is default and doesn't need to be specified.<br><br>Although the server is not whitelisted, it is recommended you join our <a href=\"#discord\">Discord Server</a> and meet other Settlers and Citizens before you embark on your adventure on Maevetopia!",
                    open: false
                },
                {
                    question: "How to join from Bedrock?",
                    answer: "Joining from Bedrock is simple! Just open Minecraft, and add the server with the address: <code>mc.maevetopia.fun</code> and the port: <code>21866</code> you will be prompted to connect your Microsoft account, and you will play as your Java profile.<br><br>Although the server is not whitelisted, it is recommended you join our <a href=\"#discord\">Discord Server</a> and meet other Settlers and Citizens before you embark on your adventure on Maevetopia!",
                    open: false
                }
            ],
            rules: [
                {
                    heading: "Respect other Settlers",
                    content: "I have worked hard to create a great place to have fun and make friends, so please respect others and their creations.<br><br>Any form of harassment, bullying, or discrimination (racism, homophobia, transphobia, sexism) will not be tolerated and will result in a temporary Correctional Facility sentence, and repeated offences will result in a permanent suspension. If you are being harassed, please report it to me, Maeve, immediately."
                },
                {
                    heading: "Cheats, hacks, exploits and overpowered QOL mods are not allowed",
                    content: "We have an absolute zero-tolerance policy for cheating, hacking, exploiting or using mods that give you an unfair advantage over other players. This includes x-ray texture packs and other exploits.<br><br>Punishments for breaking this rule are severe and will likely result in a permanent suspension."
                },
                {
                    heading: "Griefing, stealing and other malicious activities are illegal",
                    content: "Ill behaviour such as griefing, stealing, scamming, or any other malicious activities are strictly prohibited. If you have been a victim of such behaviour, please report it to me, Maeve, immediately.<br><br>Breaking this rule will result in a temporary Correctional Facility sentence, and repeated offences will result in a permanent suspension."
                },
                {
                    heading: "Everyone is equal",
                    content: "Repeatedly asking for special treatment, free items, operator perms or other advantages is not allowed and might result in limiting of your access to chat and voice call features."
                },
                {
                    heading: "Have fun!",
                    content: "The most important rule of all is to have fun! Maevetopia is a place to relax, make friends, and have a great time. If you have any questions or need help, feel free to ask me, Maeve, or any other Citizen of Maevetopia."
                }
            ]
            // mapUrl: '/api/proxy/?worldname=maevetopia&mapname=surface&zoom=6&x=-60&y=64&z=-13'
        }
    },
    mounted() {
        // take timestamp and if it's before 12pm utc on september 21st 2024, return AppCountdown, else return AppHome
        const before = new Date("2024-09-21T12:00:00Z").getTime();
        const now = new Date().getTime();
        this.isBefore = now < before;
        this.updateCountdown();
        setInterval(() => {
            this.updateCountdown();
            if (this.countdown.days === 0 && this.countdown.hours === 0 && this.countdown.minutes === 0 && this.countdown.seconds === 0) {
                clearInterval();
                router.reload();
            }
        }, 1000);
        this.$refs.page.addEventListener('scroll', this.handleScroll);
        this.handleScroll()

    },
    methods: {
        updateCountdown() {
            const countDownDate = new Date("2024-09-21T12:00:00Z").getTime();
            const now = new Date().getTime();
            const distance = countDownDate - now;

            this.countdown.days = Math.floor(distance / (1000 * 60 * 60 * 24));
            this.countdown.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            this.countdown.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            this.countdown.seconds = Math.floor((distance % (1000 * 60)) / 1000);

            this.displayCountdownTime = `${this.countdown.days.toString().padStart(2, '0')}:${this.countdown.hours.toString().padStart(2, '0')}:${this.countdown.minutes.toString().padStart(2, '0')}:${this.countdown.seconds.toString().padStart(2, '0')}`;
        },
        parallaxEffect(e) {
            const target = e.target;
            const rect = target.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const xPercent = (x / rect.width) * 100;
            const yPercent = (y / rect.height) * 100;

            // Update position without transition
            this.parallaxStyle = {
                backgroundPosition: `${xPercent}% ${yPercent}%`,
                // transition: 'background-size 0.2s ease-out', // Disable transition during mouse movement
                backgroundSize: '110%', // Apply zoom on hover
            };
        },
        resetParallax() {
            // Smooth reset
            this.parallaxStyle = {
                backgroundPosition: '50% 50%',
                transition: 'background-position 0.5s ease-out, background-size 0.5s ease-out', // Smooth transition for reset
                backgroundSize: '100%', // Reset zoom
            };
        },
        handleScroll() {
            let st = this.$refs.page.scrollTop;
            if (st > 100) {
                this.varStore.setScrolled(true);
            } else {
                this.varStore.setScrolled(false);
            }
        }
    }
}

</script>

<template>
    <div class="page countdown" ref="page">
        <div id="top"></div>
        <h1>The Official Server of Maevetopia</h1>
        <h2>is finally here!</h2>
        <div v-if="isBefore" class="form">
            <h3>Server will open for Settlement in:</h3>
            <div class="timer" id="about">
                <span class="digit-block" v-for="(digit, index) in displayCountdownTime.split(':')" :key="index">
                    <Transition name="timer">
                        <div class="digit" :key="digit">
                            <span>{{ digit }}</span>
                        </div>
                    </Transition>
                    <span class="colon" v-if="index < 3">:</span>
                </span>
            </div>
        </div>

        <div id="about"></div>

        <div class="form about">
            <h3>What is Maevetopia?</h3>
            <p>Maevetopian Settlement is a unique Minecraft server made by Maeve personally, as is this website! It's
                made for my wonderful community of Citizens of Maevetopia, the Discord server unlike the others.</p>
            <p>But what makes Maevetopia so special?</p>
            <p>This server is the result of weeks of tireless work by me, programmer and maintainer, and my friends
                helping me build the wonderful and lively neighbourhood that is Central Maevetopia.</p>
            <img src="/screenshot_2.webp" alt="Central Maevetopia at night">
            <span class="caption">Screenshot by Maeve <a href="https://twitter.com/ytrav_v"
                    target="_blank">@ytrav_v</a></span>
            <p>Maevetopia has an engaging and realistic economy system you won't find on any other server - it's akin to
                one you would see in the real world, and I have ensured it doesn't disrupt vanilla gameplay for those
                looking for a classic experience</p>
            <p>Players can trade currency, buy and sell resources when needed, and even have their own stores sanctioned
                by the Central Government, like cafés, restaurants, bookstores and more!</p>
            <img src="/screenshot_1.webp" alt="Sunrise in Maevetopia">
            <span class="caption">Screenshot by Maeve <a href="https://twitter.com/ytrav_v"
                    target="_blank">@ytrav_v</a></span>
            <h3>Cool screenshots, right?</h3>
            <p id="pack">Well did you know that *your* screenshot could be featured on the Maevetopian Settlement's
                website?? Yes
                yes, it's true!</p>
            <p>Post your coolest screenshots on Twitter with the hashtag #maevetopia for a chance to be featured! It's
                that cool indeed :3</p>

        </div>

        <div class="form pack">
            <h4>Resource Pack</h4>
            <h3>Download the Maevetopia Resource Pack</h3>
            <p>Exclusively for the Settlers of Maevetopia I have made this optional Resource pack that adds a custom and
                unique title screen, as well as two new interesting language I added as a little Easter egg, hehe.</p>
            <a v-wave="{
                duration: 0.2,
                color: 'currentColor',
                initialOpacity: 0.2,
                easing: 'ease-out'
            }" href="/maevetopia_pack.zip" download="maevetopia_pack.zip" class="cta">Download the Resource Pack</a>
            <img src="/screenshot_3.webp"
                alt="Screenshot of the Minecraft title screen with the Maevetopian Resource pack">
            <span id="rules" class="caption">Title screen with the Resource pack</span>
        </div>

        <div class="form rules">
            <h4>Rules</h4>
            <h3>The Constitution of Maevetopia</h3>
            <div class="rule" v-for="(rule, index) in rules" :key="index">
                <h3>{{ rule.heading }}</h3>
                <p v-html="rule.content"></p>
            </div>
            <span id="map" class="caption">By joining the server you agree to follow these rules and respect the
                Citizens of
                Maevetopia</span>
        </div>

        <div class="form map">
            <h4>World Map</h4>
            <h3>Discover the world of Maevetopia</h3>
            <!-- <iframe src="http://88.99.95.99:21617?worldname=maevetopia&mapname=surface&zoom=6&x=-60&y=64&z=-13" frameborder="0"></iframe> -->
            <a @mousemove="parallaxEffect" @mouseleave="resetParallax" :style="parallaxStyle"
                href="http://88.99.95.99:21617?worldname=maevetopia&mapname=surface&zoom=6&x=-60&y=64&z=-13"
                target="_blank" v-wave="{
                    duration: 0.4,
                    color: '#606c38',
                    initialOpacity: 0.2,
                    easing: 'ease-out'
                }">
                <!-- <img src="/map.png" alt="Map"> -->
            </a>
            <a v-wave="{
                duration: 0.2,
                color: '#606c38',
                initialOpacity: 0.4,
                easing: 'ease-out'
            }" href="http://88.99.95.99:21617?worldname=maevetopia&mapname=surface&zoom=6&x=-60&y=64&z=-13"><span
                    class="caption">Click the map to open</span><svg xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <title>open-in-new</title>
                    <path
                        d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                </svg></a>
            <div style="margin-top: -15px;" id="faq"></div>
        </div>

        <div class="form faq">
            <h4>Frequently Asked Questions</h4>
            <div class="question" v-for="(question, index) in faq" :key="index" :class="{ open: question.open }">
                <h3 v-wave="{
                    duration: 0.2,
                    color: 'currentColor',
                    initialOpacity: 0.2,
                    easing: 'ease-out'
                }" @click="faq[index].open = !faq[index].open">{{ question.question }}</h3>
                <p class="answer" v-html="question.answer"></p>
            </div>
            <span class="caption">Still have questions? Join our Discord Server and I will assist you in all matters you
                might have, including joining the Server from Bedrock on console!</span>
        </div>

        <div class="form discord" id="discord">
            <h4>Discord Server</h4>
            <h3>This page will keep being updated so visit later for more stuff!</h3>
            <p>Join our Discord server to become a Citizen of Maevetopia, chat with your fellow Settlers and see
                lots of cool things we do there :3</p>
            <a v-wave="{
                duration: 0.2,
                color: 'currentColor',
                initialOpacity: 0.2,
                easing: 'ease-out'
            }" href="http://discord.maevetopia.fun" class="discord-button"><img src="/discord.png"
                    alt="discord logo">Become a Citizen today</a>
        </div>

        <footer>
            <span>developed by maeve, property of maevetopian government</span>
            <span>v1.3.2 - Rules, Resource pack and UI update</span>
        </footer>
    </div>
</template>