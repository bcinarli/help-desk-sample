/**
 * @author Bilal Cinarli
 */


class Chat {
    constructor(options) {
        this.socket   = options.socket;
        this.messages = options.messages;
    }

    sendMessage(message, client, screenID) {
        let data = {
            message: message,
            to:      client
        };

        if(message.length === 0) {
            return;
        }

        this.socket.emit('new message', data);
        this.addMessage(data, true, screenID);
    }

    addMessage(data, mine = false, screenID) {
        let message      = false,
            messageClass = 'live-chat-message-their';

        if(mine === false && data.to === screenID || mine === true) {
            message = data.message;
        }

        if(mine === true) {
            messageClass = 'live-chat-message-mine';
        }

        if(message) {
            let msg = this.message(message, messageClass);

            this.messages.appendChild(msg);
            this.messages.parentNode.scrollTop = this.messages.parentNode.scrollHeight;
        }
    }

    addWarning(message) {
        let messageClass = 'live-chat-message-warning';

        let msg = this.message(message, messageClass);

        this.messages.appendChild(msg);
        this.messages.parentNode.scrollTop = this.messages.parentNode.scrollHeight;
    }

    message(msg, client) {
        let message = document.createElement('li');

        message.classList.add(client);
        message.innerHTML = '<span class="live-chat-message-inner">' + msg + '</span>';

        return message;
    }
}

export default Chat;