/**
 * @author Bilal Cinarli
 */

class Resources {
    static addResources() {
        this.addSocket();
        this.addStyles();
    }

    static addSocket() {
        let io  = document.createElement('script'),
            lcs = document.getElementById('liveChat-script');

        io.src = '//localhost:8090/socket.io/socket.io.js';

        lcs.parentNode.insertBefore(io, lcs);
    }

    static addStyles() {
        let link = document.createElement('link');
        let port = '8090';

        if(__DEV__) {
            port = '8081';
        }

        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = '//localhost:' + port + '/live-chat.css';

        document.getElementsByTagName('head')[0].appendChild(link);
    }
}

export default Resources;