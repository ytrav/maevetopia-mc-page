<script>
export default {
    data() {
        return {
            countdown: {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            },
            displayCountdownTime: '00:00:00:00',
            // mapUrl: '/api/proxy/?worldname=maevetopia&mapname=surface&zoom=6&x=-60&y=64&z=-13'
        }
    },
    mounted() {
        this.updateCountdown();
        setInterval(() => {
            this.updateCountdown();
            if (this.countdown.days === 0 && this.countdown.hours === 0 && this.countdown.minutes === 0 && this.countdown.seconds === 0) {
                clearInterval();
                router.reload();
            }
        }, 1000);
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
        }
    }
}

</script>

<template>
    <div class="page countdown">
        <div id="top"></div>
        <h1>The Official Server of Maevetopia!</h1>
        <h2>is almost here</h2>
        <div class="form">
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
            <h3 id="map">Cool screenshots, right?</h3>
            <p>Well did you know that *your* screenshot could be featured on the Maevetopian Settlement's website?? Yes
                yes, it's true!</p>
            <p>Post your coolest screenshots on Twitter with the hashtag #maevetopia for a chance to be featured! It's
                that cool indeed :3</p>

        </div>

        <div class="form map">
            <h4>World Map</h4>
            <h3>Discover the world of Maevetopia</h3>
            <iframe src="/api/proxy/?worldname=maevetopia&mapname=surface&zoom=6&x=-60&y=64&z=-13" frameborder="0"></iframe>

            <div style="margin-top: -15px;" id="faq"></div>
        </div>

        <div class="form faq">
            <h4>Frequently Asked Questions</h4>
            <p>This section is still under construction, please check back later!</p>
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
        </footer>
    </div>
</template>