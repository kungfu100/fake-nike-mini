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

    sliceData() {
        return this.carousels
    }
}
