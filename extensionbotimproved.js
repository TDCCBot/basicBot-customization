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
         if(this.type === 'exact' &amp;&amp; chat.message.length !== cmd.length) return void (0);
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
                if (this.type === 'exact' &amp;&amp; chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me Bacon!!!");
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
        chatLink: "https://rawgit.com/TDCCBot/basicBot-customisation/tree/patch-1/lang/en.json",
        maximumAfk: false,
        afkRemoval: false,
        maximumDc: 60,
        bouncerPlus: true,
        lockdownEnabled: false,
        lockGuard: false,
        maximumLocktime: 10,
        cycleGuard: false,
        maximumCycletime: 10,
        timeGuard: false,
        maximumSongLength: 10,
        autodisable: false,
        commandCooldown: 30,
        usercommandsEnabled: true,
        lockskipPosition: 3,
        lockskipReasons: [
            ["theme", "Sorry about that, the song you recently played does not fit the room theme. "],
            ["op", "This song is on the OP list. "],
            ["history", "This song is in the history. Play another one not in the history!"],
            ["mix", "You played a mix, which is against the rules. Read the room rules for more information. "],
            ["sound", "The song you played had bad sound quality or no sound. Try again with another song. "],
            ["nsfw", "The song you contained was NSFW (image or sound). Note that this is against the room rules and plug's Terms Of Service "],
            ["unavailable", "The song you played was not available for some users. Try again with another song."]
        ],
        afkpositionCheck: 15,
        afkRankCheck: "bouncer",
        motdEnabled: true,
        motdInterval: 50,
        motd: "Welcome to IndieGoogle+! Enjoy the room!",
        filterChat: true,
        etaRestriction: false,
        welcome: true,
        opLink: null,
        rulesLink: "http://goo.gl/C1ZICB",
        themeLink: null,
        fbLink: "http://facebook.com/groups/indiegoogle",
        youtubeLink: null,
        website: null,
        intervalMessages: [For awesome things, don't forget to join our Facebook group! Link: http://facebook.com/groups/IndieGoogle],
        messageInterval: 60,
        songstats: true,
        commandLiteral: "!",
        blacklists: {
            NSFW: "https://rawgit.com/TDCCBot/basicBot-customization/tree/patch-1/blacklists/ExampleNSFWlist.json",
            OP: "https://rawgit.com/TDCCBot/basicBot-customization/tree/patch-1/blacklists/ExampleOPlist.json"
        }
    }));

    //Start the bot and extend it when it has loaded.
    $.getScript('https://rawgit.com/TDCCBot/basicBot/tree/patch-2/extensionbotimproved.js', extend);

}).call(this);
