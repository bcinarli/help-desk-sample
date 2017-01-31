/**
 * @author Bilal Cinarli
 */

import ScreenUI from './ui';
import Chat from '../chat';

class AgentScreen {
    constructor(options) {
        this.screenID        = 'backoffice';
        this.socket          = options.socket;
        this.activeChats     = {};
        this.activeChatIndex = 1;

        this.init();
    }

    init() {
        this.wrapper();
        this.socketEvents();
        this.bindUI();
    }

    wrapper() {
        let wrapper = document.createElement('div');

        wrapper.id = 'live-chat-backoffice';
        wrapper.classList.add('live-chat-backoffice');
        wrapper.innerHTML = '<div id="live-chat-backoffice-tabs" class="live-chat-backoffice-tabs"></div><div id="live-chat-backoffice-chats" class="live-chat-backoffice-chats"></div>';

        document.body.appendChild(wrapper);

        this.tabs  = document.getElementById('live-chat-backoffice-tabs');
        this.chats = document.getElementById('live-chat-backoffice-chats');
    }

    socketEvents() {
        this.socket.on('new message', (data) => {
            if(typeof this.activeChats[data.from] === 'undefined') {
                this.addNewClient(data.from);
            }

            this.addMessage(data);
        });

        this.socket.on('user left', (data) => {
            if(typeof this.activeChats[data.username] !== 'undefined') {
                this.addWarning(this.activeChats[data.username]);
            }
        });
    }

    bindUI() {
        this.tabs.addEventListener('click', (e) => {
            e.preventDefault();
            let el = e.target;

            if(el.classList.contains('live-chat-backoffice-tab')) {
                this.changeTab(el.href.split('#')[1], el);
            }
        });
    }

    bindUIs(screen) {
        screen.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.sendMessage(screen);
        });
    }

    changeTab(target, tab) {
        let activeChat = this.chats.querySelector('.live-chat-session-active'),
            activeTab  = this.tabs.querySelector('.live-chat-tab-active');

        activeChat.classList.remove('live-chat-session-active');
        activeTab.classList.remove('live-chat-tab-active');

        document.getElementById(target).classList.add('live-chat-session-active');
        tab.classList.add('live-chat-tab-active');
        tab.querySelector('.live-chat-unread').innerHTML = '';
        tab.querySelector('.live-chat-unread').classList.remove('live-chat-has-unread');
    }

    addNewClient(client) {
        let screenID = client;

        this.activeChats[screenID] = {
            screenID,
            index:  this.activeChatIndex,
            screen: new ScreenUI({screenID: screenID, index: this.activeChatIndex})
        };

        let wrapper  = document.getElementById('live-chat-' + screenID),
            messages = wrapper.querySelector('.live-chat-messages-list'),
            form     = wrapper.querySelector('.live-chat-message-form'),
            input    = form.querySelector('.live-chat-message-input-item');

        this.activeChats[screenID] = Object.assign({},
            this.activeChats[screenID], {
                chat: new Chat({socket: this.socket, messages: messages}),
                form,
                input
            }
        );

        this.bindUIs(this.activeChats[screenID]);
        this.activeChatIndex++;
    }

    sendMessage(screen) {
        screen.chat.sendMessage(screen.input.value, screen.screenID, 'backoffice');
        screen.input.value = '';
    }

    addMessage(data, mine = false) {
        let from   = data.from,
            tab    = document.getElementById('live-chat-tab-' + from),
            unread = tab.querySelector('.live-chat-unread');

        this.activeChats[from].chat.addMessage(data, mine, 'backoffice');

        if(!tab.classList.contains('live-chat-tab-active')) {
            unread.innerHTML = (unread.innerHTML * 1) + 1;
            unread.classList.add('live-chat-has-unread');
        }
    }

    addWarning(screen) {
        screen.chat.addWarning('Client has left the conversation');
    }
}

export default AgentScreen;