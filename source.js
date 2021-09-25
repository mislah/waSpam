// Repeat message n if #n# is at the end of the string
document.addEventListener('click', () => {
    document.querySelectorAll("[contenteditable='true']")[1].addEventListener("keydown", event => {
        if(event.keyCode == 13){
            var msgBox = document.querySelectorAll("[contenteditable='true']")[1];
            msgBox.innerHTML = msgBox.innerHTML.replace('<br>','');
            if(msgBox.innerHTML.search(/(#\d+#$)/)!=-1){
                event.preventDefault();
                const type = new UIEvent('input', {bubbles: true, cancelable: true, view: window});
                const enter = new KeyboardEvent('keydown', {keyCode: 13, bubbles: true, view: window});
                var count = parseInt((msgBox.innerHTML.split(/(#\d+#$)/)[1]).slice(1,-1));
                var message = msgBox.innerHTML.replace(/#\d+#$/,'');
                while(count--) {
                    msgBox.innerHTML = message;
                    msgBox.dispatchEvent(type);
                    msgBox.dispatchEvent(enter);
                }
            }
        }
    });
});