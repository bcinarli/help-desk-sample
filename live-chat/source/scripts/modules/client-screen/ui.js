/**
 * @author Bilal Cinarli
 */

const template = '<div class="live-chat-header">' +
                 '  <h2 class="live-chat-toggle" id="live-chat-toggle">Need Help?</h2>' +
                 '</div>' +
                 '<div class="live-chat-session">' +
                 '  <div class="live-chat-messages">' +
                 '      <ul id="live-chat-messages-list"></ul>' +
                 '  </div>' +
                 '  <div class="live-chat-message">' +
                 '      <form id="live-chat-message-form">' +
                 '          <label class="live-chat-message-input">' +
                 '              <input type="text" name="live-chat-message-input" id="live-chat-message-input" autocomplete="off" class="live-chat-message-input-item" placeholder="Type your message here" />' +
                 '          </label>' +
                 '          <button class="live-chat-message-send" id="live-chat-message-send">Send</button>' +
                 '      </form>' +
                 '  </div>' +
                 '</div>';

class ScreenUI {
    constructor() {
        this.init();
    }

    init() {
        this.render();
    }

    render() {
        let wrapper = document.createElement('div');
        wrapper.id  = 'live-chat';
        wrapper.classList.add('live-chat-wrapper');

        wrapper.innerHTML = template;

        document.body.appendChild(wrapper);
    }
}

export default ScreenUI;