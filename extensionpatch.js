(function () {

    //Define our function responsible for extending the bot.
    function extend() {
        //If the bot hasn't been loaded properly, try again in 1 second(s).
        if (!window.bot) {
            return setTimeout(extend, 1 * 1000);
        }

        //Precaution to make sure it is assigned properly.
        var bot = window.bot;

        //Load custom settings set below
        bot.retrieveSettings();

        /*
         Extend the bot here, either by calling another function or here directly.
         Model code for a bot command:

         bot.commands.commandCommand = {
         command: 'cmd',
         rank: 'user/bouncer/mod/manager',
         type: 'startsWith/exact',
         functionality: function(chat, cmd){
         if(this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
         if( !bot.commands.executable(this.rank, chat) ) return void (0);
         else{
         //Commands functionality goes here.
         }
         }
         }

         */

        bot.commands.baconCommand = {
            command: 'bacon',  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me Bacon!!!");
                }
            }
        };

        bot.commands.helloCommand = {
            command: 'hello',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API. sendChat("/me Hello there. Welcome to IndieGoogle! Enjoy!");
                }
            }
        };
        
        //Load the chat package again to account for any changes
        bot.loadChat();

    }

    //Change the bots default settings and make sure they are loaded on launch

    localStorage.setItem("basicBotsettings", JSON.stringify({
        botName: "TDCCBot",
        language: "english",
        chatLink: "https://rawgit.com/Yemasthui/basicBot/master/lang/en.json",
        maximumAfk: 5000,
        afkRemoval: false,
        maximumDc: 60,
        bouncerPlus: true,
        lockdownEnabled: false,
        lockGuard: false,
        maximumLocktime: 10,
        cycleGuard: false,
        maximumCycletime: 10,
        timeGuard: false,
        maximumSongLength: 15,
        autodisable: false,
        commandCooldown: 30,
        usercommandsEnabled: true,
        lockskipPosition: 1,
        lockskipReasons: [
            ["fridayonly", "Sorry, but this song only fits on a Friday. Try again."],
            ["dubstep", "Sorry, but this is dubstep/Hard-EDM, which is STRICTLY prohbibited here."],
            ["op", "Apologies, this song is on the OP list. "],
            ["history", "Check the DJ History, please. This song is in the DJ history. "],
            ["mix", "Head's up! You played a mix. This is against the rules. "],
            ["sound", "Apparently, the song you played had bad sound quality or no sound. "],
            ["nsfw", "The song you contained was not safe for work. Note that some people may be working! "],
            ["unavailable", "The song you played was not available for some users. Pick a song that's available worldwide."],
            ["pop", "This song was skipped since it is of Top 40/100 Pop. Please play this on a Friday"]
        ],
        afkpositionCheck: 25,
        afkRankCheck: "bouncer",
        motdEnabled: false,
        motdInterval: 30,
        motd: "Temporary Message of the Day",
        filterChat: false,
        etaRestriction: false,
        welcome: false,
        opLink: null,
        rulesLink: "http://goo.gl/C1ZICB",
        themeLink: null,
        fbLink: "https://www.facebook.com/groups/indiegoogle/",
        youtubeLink: null,
        website: null,
        intervalMessages: [],
        messageInterval: 5,
        songstats: false,
        commandLiteral: "!",
        blacklists: {
            NSFW: "https://rawgit.com/TDCCBot/basicBot-customization/master/blacklists/ExampleNSFWlist.json",
            OP: "https://rawgit.com/TDCCBot/basicBot-customization/master/blacklists/ExampleOPlist.json"
        }
    }));

    //Start the bot and extend it when it has loaded.
    $.getScript('https://rawgit.com/Yemasthui/basicBot/master/basicBot.js', extend);

}).call(this);
