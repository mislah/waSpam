// Repeat message n if #n# is at the end of the string
document.addEventListener('click', () => {
    var msgBox = document.querySelectorAll("[contenteditable='true']")[1];
    msgBox.addEventListener("keydown", event => {
        if(event.keyCode == 13){
            msgBox.innerHTML = msgBox.innerHTML.replace('<br>','');
            if(msgBox.innerHTML.search(/#\d+#$/)!=-1){
                event.preventDefault();
                const type = new UIEvent('input', {bubbles: true, cancelable: true, view: window});
                const enter = new KeyboardEvent('keydown', {keyCode: 13, bubbles: true, view: window});
                var [message, count] = msgBox.innerHTML.split(/#(\d+)#$/);
                msgBox.innerHTML = '';
                count = parseInt(count);
                while(count--) {
                    msgBox.innerHTML = message;
                    msgBox.dispatchEvent(type);
                    msgBox.dispatchEvent(enter);
                }
            }
        }
    });
});