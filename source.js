document.addEventListener('click', () => {
    document.querySelectorAll("[contenteditable='true']")[1].addEventListener("keydown", event => {
        if (event.key === "#") {
            var msgBox = document.querySelectorAll("[contenteditable='true']")[1];
            if(msgBox.innerText.search(/#\d+#$/)!=-1){
                window.store = msgBox.innerHTML.repeat(1);
                msgBox.innerHTML = msgBox.innerHTML.replace(/#\d+#/,'')
            }
        }
        if (event.key === "Enter") {
            window.store = window.store.replace(/#\d+#/,"");
            const type = new UIEvent('input', {bubbles: true, cancelable: true, view: window});
            const enter = new KeyboardEvent('keydown', {keyCode: 13, bubbles: true, view: window});
            
            var msgBox = document.querySelectorAll("[contenteditable='true']")[1];
            var count = window.store.innerText.split(/#(\d+)#$/)[1];
            message = window.store;
            
            msgBox.innerHTML = '';
            count = parseInt(count);
            while(count--) {
                msgBox.innerHTML = message;
                msgBox.dispatchEvent(type);
                msgBox.dispatchEvent(enter);
            }
        }
    });
});