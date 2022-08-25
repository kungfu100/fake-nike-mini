// DETAIL CLASS
"use strict";
class Detail {
    constructor() {
        this.data = null;
    }

    addData(data) {
        if (data) this.data = data;
        else console.log("empty detail data");
    }

    loadDetail() {
        try {
            inforDetail(this.data);
            imgDetail(this.data);
            sizeDetail(this.data.size);
            descriptionDetail(this.data);
        } catch (err) {
            console.log(err);
        }
    }

    errorMessage(id, mess) {
        getId(id).textContent = mess;
    }

    validateInput() {
        let hasError = false;
        let mess = "";

        if (getRadioInput() == null) {
            mess = "Please select a size.";
            hasError = true;
        }

        this.errorMessage("detailError", mess);

        return !hasError;
    }
}

// GET RADIO INPUT CHECKED
function getRadioInput() {
    return queryEle("#detailSize div > input[name='size']:checked");
}

// UI DETAIL ELEMENT 
function inforDetail(data) {
    const inforArr = getClass("js-detail-infor");

    for (infor of inforArr) {
        infor.innerHTML = inforUI(data);
    }
}

function imgDetail(data) {
    getId("detailImg").innerHTML = imgUI(data);
}

function sizeDetail(data) {
    getId("detailSize").innerHTML = sizeUI(data);
}

function descriptionDetail(data) {
    getId("detailDescription").innerHTML = descriptionUI(data);
}

// UI
function inforUI(data) {
    return `
        <h1>${data.name}</h1>
        <p>${data.price}</p>
    `
}

function imgUI(data) {
    return `<img src=${data.image} alt=${data.name} width="568" height="568">`
}

function sizeUI(sizes) {
    let content = "";

    for (size of sizes) {
        content += `
            <div class="input-group-radio">
                <input type="radio" name="sizeNumber" id=${size} value=${size}>
                <label for=${size} tabindex="-1">${size}</label>
            </div>
        `
    }

    return content;
}

function descriptionUI(data) {
    return `
        <p>${data.description}</p>
        <p>${data.shortDescription}</p>
    `
}
