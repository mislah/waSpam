function send(message, count = 1, contact = '') {
    if (contact) {
        var select = new MouseEvent('mousedown', { bubbles: true, cancelable: true });
        document.querySelector('[title="' + contact + '"]').dispatchEvent(select);
    }
    var msgBox = document.querySelectorAll("[contenteditable='true']")[1];
    var type = new UIEvent('input', {bubbles: true, cancelable: true, view: window})
    sende = new MouseEvent('click', {bubbles: true, cancelable: true, view: window});
    while(count--) {
        msgBox.innerHTML = message;
        msgBox.dispatchEvent(type);
        document.querySelector('span[data-icon="send"]').dispatchEvent(sende);
    }
}