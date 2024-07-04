class Popup {
    popup = null;

    constructor(type, data) {
        if (type === "create") {
            this.btnStr = "추가";
            this.title = "할 일 추가하기";
            this.todo = "";
            this.completeDate = "";
            this.imgSrc = "";
        } else if (type === "update") {
            const date = new Date(data.date);
            console.log(data)
            this.btnStr = "수정";
            this.title = "할 일 변경하기";
            this.todo = data.todo;
            this.completeDate = data.date;
            this.imgSrc = data.imgsrc;
        }
        this.init();
    }
    init() {
        const _body = document.createElement("div");
        const _titleDiv = document.createElement("div");
        const _insertDiv = document.createElement("div");
        const _imgDiv = document.createElement("div");
        const _todoDiv = document.createElement("div");
        const _fileDiv = document.createElement("div");
        const _dateDiv = document.createElement("div");
        const _btnDiv = document.createElement("div");

        const _h1 = document.createElement("h1");
        const _form = document.createElement("form");

        const _imgLabel = document.createElement("label");
        const _todoLabel = document.createElement("label");
        const _dateLabel = document.createElement("label");
        const _imgSpan = document.createElement("span");

        const _todoInput = document.createElement("input");
        const _fileInput = document.createElement("input");
        const _dateInput = document.createElement("input");

        const _sumitBtn = document.createElement("button");
        const _cancelBtn = document.createElement("button");

        const _img = document.createElement("img");
        _img.id = "insertImg"
        _img.src = this.imgSrc;

        _imgSpan.innerHTML = "이미지를 넣어주세요";

        _todoLabel.innerHTML = "무엇을 하실 건가요?";
        _dateLabel.innerHTML = "언제까지 해야하나요?";

        _imgLabel.setAttribute("for", "todoImg")
        _todoLabel.setAttribute("for", "todo");
        _dateLabel.setAttribute("for", "comDate");

        _todoInput.id = "todo";
        _fileInput.id = "todoImg";
        _dateInput.id = "comDate";

        _todoInput.name = "todo";
        _fileInput.name = "todoImg";
        _dateInput.name = "comDate";

        _todoInput.type = "text";
        _fileInput.type = "file";
        _dateInput.type = "date";

        _todoInput.value = this.todo;
        _dateInput.value = this.completeDate;

        _fileInput.style.display = "none";

        _sumitBtn.innerHTML = this.btnStr;
        _cancelBtn.innerHTML = "취소"

        _sumitBtn.type = "button";
        _cancelBtn.type = "button";
        _cancelBtn.onclick = this.close;

        _sumitBtn.id = "submitBtn";
        _cancelBtn.id = "cancelBtn";

        _h1.innerHTML = this.title;

        _imgLabel.append(_img);
        _titleDiv.append(_h1);
        _btnDiv.append(_sumitBtn, _cancelBtn);
        _fileDiv.append(_imgLabel, _imgSpan, _fileInput);
        _todoDiv.append(_todoLabel, _todoInput);
        _dateDiv.append(_dateLabel, _dateInput);
        _insertDiv.append(_titleDiv, _fileDiv, _todoDiv, _dateDiv, _btnDiv);
        _form.append(_insertDiv);
        _body.append(_form);

        _imgLabel.classList.add("todo-img");

        _body.classList.add("popup-container");
        this.popup = _body;
        console.log(this.popup)
    }
    open() {
        document.body.append(this.popup);
    }

    close = () => {
        this.popup.classList.add("is-disable");
    }

    imgChanage() {
        this.popup.query.selector();
    }
}