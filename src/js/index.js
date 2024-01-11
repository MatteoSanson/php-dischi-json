const { createApp } = Vue;

createApp({
    data() {
        return {
            dischi: [
                {
                    "album": "New Jersey",
                    "author": "Bon Jovi",
                    "released": "1988"
                },
                {
                    "album": "Live at Wembley 86",
                    "author": "Queen",
                    "released": "1992"
                },
                {
                    "album": "Ten's Summoner's Tales",
                    "author": "Sting",
                    "released": "1993"
                },
                {
                    "album": "Steve Gadd Band",
                    "author": "Steve Gadd Band",
                    "released": "2018"
                },
                {
                    "album": "Brave New World",
                    "author": "Iron Maiden",
                    "released": "2000"
                },
                {
                    "album": "One more car, one more",
                    "author": "Eric Clapton",
                    "released": "2002"
                }
            ],
        }
    }
}).mount('#app');