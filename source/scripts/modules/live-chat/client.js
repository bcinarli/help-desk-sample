/**
 * @author Bilal Cinarli
 */

export const addChatScripts = () => {
    (function() {
        let i, e,
            w = window,
            o = document,
            s = "script";

        w.liveChatOptions = {
            connection: "client"
        };

        i       = o.createElement(s);
        i.async = 1;
        i.src   = "//localhost:8081/live-chat.js";
        i.id    = 'liveChat-script';
        e       = o.getElementsByTagName(s)[0];
        e.parentNode.insertBefore(i, e)
    })();
};