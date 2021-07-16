/**
 * @name AntiAttack
 * @author cron
 * @authorId 431707293692985344
 * @version 0.2
 * @description Protect your eyes from attack emojis/stamps
 * @invite aH66W3FnAr
 * @donate https://www.paypal.me/YameteYorokonjau
 * @patreon https://www.paypal.me/YameteYorokonjau
 * @website https://crberry.cron.jp
 * @source https://github.com/cronree-91/CronBetterDiscordPlugins
 * @updateUrl https://raw.githubusercontent.com/cronree-91/CronBetterDiscordPlugins/main/AntiAttack/antiattack.plugin.js
 */

 class AntiAttack {
    constructor() {
        this.initialized = false;
    }
    getName() { return "AntiAttack"; }
    getShortName() { return "AntiAttack"; }
    getDescription() { return "Protect your eyes from attack emojis/stamps"; }
    getVersion() { return "0.2"; }
    getAuthor() { return "cron"; }
    getSettingsPanel() {
        return "If you found any attack emojis which bypass this block, Please contact to me.";
    }

    // Load/Unload
    load() { }

    unload() { }

    // Start/Stop
    start() {
        var nglist = new Array();
        nglist.push("https://media.discordapp.net/stickers/859983811630465066.png?size=256");
        nglist.push("https://cdn.discordapp.com/emojis/851420801551040522.png?v=1");
        nglist.push("https://cdn.discordapp.com/emojis/851420801551040522.gif?v=1");
        nglist.push("https://media.discordapp.net/stickers/859983811630465066.png?size=64");
        nglist.push("https://media.discordapp.net/stickers/864879178784178176.png?size=256");

        setInterval(function () {
            if (BdApi.Plugins.isEnabled("AntiAttack")) {
                var elems_emoji = document.querySelectorAll('img');
                elems_emoji.forEach(function (elem) {
                    if (nglist.includes(elem.getAttribute('src'))) {

                        elem.setAttribute("src",elem.getAttribute("src").replace("gif","png"));

                        // var blocked = document.createElement("img");
                        // blocked.setAttribute("class",elem.getAttribute("class"));
                        // blocked.setAttribute("draggable",elem.getAttribute("draggable"));
                        // blocked.setAttribute("aria-label",elem.getAttribute("aria-label"));
                        // blocked.setAttribute("alt",elem.getAttribute("alt"));
                        // blocked.setAttribute("src",elem.getAttribute("src").replace("gif","png"));

                        // elem.parentNode.appendChild(blocked);
                        // elem.remove();
                        console.log("worked")
                    }
                });
            }
        }, 0.1);
    }

    stop() {
        PluginUtilities.showToast(this.getName() + " " + this.getVersion() + " has stopped.");
    };

    //  Initialize
    initialize() {
        this.initialized = true;
        PluginUtilities.showToast(this.getName() + " " + this.getVersion() + " has started.");
    }
}