function send(message, count = 1) {
    var msgBox = document.querySelectorAll("[contenteditable='true']")[1];
    var type = new UIEvent('input', {bubbles: true, cancelable: true, view: window});
    while(count--) {
        msgBox.innerHTML = message;
        msgBox.dispatchEvent(type);
        document.querySelector('span[data-icon="send"]').click();
    }
}