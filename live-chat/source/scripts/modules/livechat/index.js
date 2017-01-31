/**
 * @author Bilal Cinarli
 */

const uuid = require('uuid/v4');

import Resources from './resources';
import ClientScreen from '../client-screen';
import AgentScreen from '../agent-screen';

class LiveChat {
    constructor() {
        this.options  = window.liveChatOptions;
        this.screenID = uuid();
        this.socket   = false;

        this.init();
    }

    init() {
        Resources.addResources();
        setTimeout(() => {
            this.initializeSocket()
        }, 1000);
    }

    initializeSocket() {
        this.socket = window.io('//localhost:8090');

        if(this.options.connection === 'client') {
            this.screen = new ClientScreen({socket: this.socket, screenID: this.screenID});
        }

        if(this.options.connection === 'backoffice') {
            this.screen = new AgentScreen({socket: this.socket});
        }
    }
}

export default LiveChat;