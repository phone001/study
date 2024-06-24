class Popup {
    popup = null;
    text = ""
    constructor(text) {
        this.text = text;
        this.init();
    }
    init() {
        const bg = document.createElement("div");
        const popupWrap = document.createElement("div");
        const popupBody = document.createElement("div");
        const popupHeader = document.createElement("div");
        const popupBtnLine = document.createElement("div");
        const popupContent = document.createElement("p");
        const popupBtn01 = document.createElement("button");
        const popupBtn02 = document.createElement("button");
        bg.append(popupWrap);
        popupWrap.append(popupHeader, popupBody, popupBtnLine);
        popupBody.append(popupContent);
        popupBtn01.innerHTML = "확인"
        popupBtn02.innerHTML = "취소"
        popupBtnLine.append(popupBtn01, popupBtn02);
        bg.classList.add("popup-background");
        popupBody.classList.add("popup-body")
        popupHeader.classList.add("popup-header")
        popupBtnLine.classList.add("popup-btn-line")
        popupWrap.classList.add("popup-wrap");
        popupContent.innerHTML = this.text;
        document.body.append(bg);
        this.popup = bg;

    }
    open() {
        if (!this.popup.classList.contains("is-active"))
            this.popup.classList.add("is-active");
    }
    addEventListener(handler01, handler02) {
        const [btn01, btn02] = this.popup.querySelectorAll(".popup-btn-line > button");
        btn01.onclick = () => { handler01(); this.close() };
        btn02.onclick = () => { handler02(); this.close() };

    }

    close = () => {
        if (this.popup.classList.contains("is-active"))
            this.popup.classList.remove("is-active");
    }
}