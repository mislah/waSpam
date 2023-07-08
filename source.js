// Repeat message n if #n# is at the end of the string
document.addEventListener('click', () => {
    let msg = '';
    let msgBox = document.querySelectorAll("[contenteditable='true']")[1];
    msgBox.addEventListener("keyup", event => {
        if (event.keyCode == 13 && msg.search(/#\d+#$/) != -1) {
            let [message, count] = msg.split(/#(\d+)#$/);
            count = parseInt(count);
            (async () => {
                while (count--) {
                    await new Promise((resolve) => {
                        msgBox.dispatchEvent(new InputEvent("beforeinput", {
                            inputType: "insertText",
                            data: message,
                            bubbles: true,
                            cancelable: true
                        }));
                        resolve();
                    });
                    msgBox.dispatchEvent(
                        new KeyboardEvent('keydown', {
                            key: "Enter",
                            code: "Enter",
                            which: 13,
                            keyCode: 13,
                            bubbles: true,
                            view: window
                        })
                    )
                    await new Promise(resolve => setTimeout(resolve, 10));
                }
            })();
        }
        msg = msgBox.innerText;
    });
});