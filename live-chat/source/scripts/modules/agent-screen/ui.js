/**
 * @author Bilal Cinarli
 */

const template = '<div class="live-chat-session">' +
                 '  <div class="live-chat-messages">' +
                 '      <ul class="live-chat-messages-list"></ul>' +
                 '  </div>' +
                 '  <div class="live-chat-message">' +
                 '      <form class="live-chat-message-form">' +
                 '          <label class="live-chat-message-input">' +
                 '              <input type="text" name="live-chat-message-input" class="live-chat-message-input-item" autocomplete="off" placeholder="Type your message here" />' +
                 '          </label>' +
                 '          <button class="live-chat-message-send">Send</button>' +
                 '      </form>' +
                 '  </div>' +
                 '</div>';

class ScreenUI {
    constructor(options) {
        this.screenID = options.screenID;
        this.index    = options.index;
        this.init();
    }

    init() {
        this.render();
        this.addTab();
    }

    render() {
        let chats       = document.getElementById('live-chat-backoffice-chats'),
            wrapper     = document.createElement('div'),
            activeChats = chats.querySelector('.live-chat-backoffice-wrapper');
        wrapper.id      = 'live-chat-' + this.screenID;
        wrapper.classList.add('live-chat-backoffice-wrapper');

        if(activeChats === null) {
            wrapper.classList.add('live-chat-session-active');
        }

        wrapper.innerHTML = template;

        chats.appendChild(wrapper);
    }

    addTab() {
        let tabs       = document.getElementById('live-chat-backoffice-tabs'),
            tab        = document.createElement('a'),
            activeTabs = tabs.querySelector('.live-chat-backoffice-tab');

        tab.classList.add('live-chat-backoffice-tab');

        if(activeTabs === null) {
            tab.classList.add('live-chat-tab-active');
        }

        tab.href      = '#live-chat-' + this.screenID;
        tab.id        = 'live-chat-tab-' + this.screenID;
        tab.innerHTML = 'Client ' + this.index + '<span class="live-chat-unread"></span>';

        tabs.appendChild(tab);
    }
}

export default ScreenUI;