const moreData = data => {
    let pageDefault = 4;

    getId("more").addEventListener("click", function () {
        if (data.isSorted) {
            pageDefault = 8;
            data.isSorted = false;
        } else {
            pageDefault += 4;
        }
        createCard(data.spliceItems(pageDefault), "products");
        
        if(pageDefault >= data.getTotalItems()) this.classList.add("display-none");
    })
}