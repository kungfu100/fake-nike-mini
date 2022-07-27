const getPrevIndex = (index) => queryAll(".js-btn-prev")[index];
const getNextIndex = (index) => queryAll(".js-btn-next")[index];

const activeStyleQuery = conditionClass => (query, className) => {
    if (conditionClass) {
        query.classList.add(className);
    } else {
        query.classList.remove(className);
    }
}

const nextClick = (posStart, index, ele) => {
    if (hasClass(getPrevIndex(index), ("display-none"))) activeStyleQuery(false)(getPrevIndex(index), "display-none");

    if (feature.getPosEnd(posStart) >= feature.carousels.length) activeStyleQuery(true)(ele, "display-none");
}

const prevClick = (posStart, index, ele) => {
    if (hasClass(getNextIndex(index), ("display-none"))) activeStyleQuery(false)(getNextIndex(index), "display-none");

    if (posStart <= 0) activeStyleQuery(true)(ele, "display-none");
}

//----------------------------
// CAROUSEL CONTROL
const carouselControl = (posStart, feature, index) => {

    activeStyleQuery(true)(getPrevIndex(index), "display-none");
    
    getNextIndex(index).addEventListener("click", function () {
        posStart += 4;
        
        nextClick(posStart, index, this);

        createCard(feature.sliceData(posStart), "feature");

    })

    getPrevIndex(index).addEventListener("click", function () {
        posStart -= 4;
        
        prevClick(posStart, index, this);

        createCard(feature.sliceData(posStart), "feature");

    })
}
