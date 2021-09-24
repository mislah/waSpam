class send{
    #interval;
    constructor(message, count = 1) {
        var msgBox = document.querySelectorAll("[contenteditable='true']")[1];
        var type = new UIEvent('input', {bubbles: true, cancelable: true, view: window});
        this.#interval = setInterval(()=>{
            msgBox.innerHTML = message;
            msgBox.dispatchEvent(type);
            document.querySelector('span[data-icon="send"]').click();
            if(!--count){
                clearInterval(this.#interval);
            }
        },100);
    }
    stop(){
        clearInterval(this.#interval);
    }
}