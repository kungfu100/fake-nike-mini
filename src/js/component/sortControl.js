const sortData = (data, idSelect, outEle) => {
    let valueSort = "";

    if (data.isArr(data.products)) {
        getId(idSelect).addEventListener("change", function () {
            valueSort = this.options[this.selectedIndex].value;

            if (valueSort === "high-low") {
                //createCard(data.reversePriceProducts(), outEle);
                data.reversePriceProducts();
                createCard(data.spliceItems(), outEle);
            }
            if (valueSort === "low-high") {
                data.sortPriceProducts();
                createCard(data.spliceItems(), outEle);
            }
            
            data
        })
    } else console.log("no data to sort");

}
