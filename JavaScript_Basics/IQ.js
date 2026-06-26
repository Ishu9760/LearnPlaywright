class browser {
    constructor(name) {
        this.name = name;
        this.isOpen = true;
        console.log(name + "launched");
    }

    startBrowser() {
        console.log(this.name + " started");
    }

    closeBrowser() {
        console.log(this.name + " closed");
    }
}

let chrome = new browser("chrome");
let firefox = new browser("firefox");

console.log(chrome.isOpen);