class Carousel {
    constructor(nameId) {
        this.nameId = nameId;
        this.carousels = [];
    }

    addData(arr) {
        if (arr.length > 0) {
            this.carousels = arr;
        } else {
            console.log("empty carousel");
        }
    }

    sliceData(posStart) {
        return this.carousels.slice(posStart, this.getPosEnd(posStart));
    }
    
    getPosEnd(posStart) {
        let posEnd = 4 + posStart; // get 4 element
        return posEnd;
    }
}
