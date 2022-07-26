const getId = id => document.getElementById(id);

const getClass = classEle => document.getElementsByClassName(classEle);

const queryEle = ele => document.querySelector(ele);

const queryAll = ele => document.querySelectorAll(ele);

const activeStyleId = conditionClass => (id, className) => {
    if(conditionClass) {
        getId(id).classList.add(className);
    }else {
        getId(id).classList.remove(className);
    }
}

const parseObj = obj => JSON.parse(obj);