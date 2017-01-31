/**
 * @author Bilal Cinarli
 */

import ScreenUI from './ui';
import Chat from '../chat';

class ClientScreen {
    constructor(options) {
        this.screenID = options.screenID;
        this.socket   = options.socket;

        this.toggleClientScreen = this.toggleClientScreen.bind(this);
        this.init();
    }

    init() {
        this.screenUI = new ScreenUI();
        this.getScreenElement();

        this.chat = new Chat({socket: this.socket, messages: this.messages});

        this.socket.emit('add user', this.screenID);

        this.bindEvents();
    }

    getScreenElement() {
        this.wrapper  = document.getElementById('live-chat');
        this.toggle   = this.wrapper.querySelector('#live-chat-toggle');
        this.unread   = this.wrapper.querySelector('.live-chat-unread');
        this.messages = this.wrapper.querySelector('#live-chat-messages-list');
        this.form     = this.wrapper.querySelector('#live-chat-message-form');
        this.input    = this.form.querySelector('#live-chat-message-input');
    }

    bindEvents() {
        this.toggle.addEventListener('click', this.toggleClientScreen);
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.sendMessage();
        });

        this.socket.on('new message', (data) => {
            this.addMessage(data);
        });
    }

    toggleClientScreen() {
        this.wrapper.classList.contains('live-chat-toggled')
            ? this.wrapper.classList.remove('live-chat-toggled')
            : this.wrapper.classList.add('live-chat-toggled');

        this.unread.innerHTML = '';
        this.unread.classList.remove('live-chat-has-unread');
    }

    sendMessage() {
        this.chat.sendMessage(this.input.value, 'backoffice', this.screenID);
        this.input.value = '';
    }

    addMessage(data, mine = false) {
        this.chat.addMessage(data, mine, this.screenID);

        if(!this.wrapper.classList.contains('live-chat-toggled')) {
            this.unread.innerHTML = (this.unread.innerHTML * 1) + 1;
            this.unread.classList.add('live-chat-has-unread');
        }
    }
}

export default ClientScreen;