const sortData = (data, idSelect, outEle) => {
    let valueSort = "";

    if (data.isArr(data.products)) {
        getId(idSelect).addEventListener("change", function () {
            valueSort = this.options[this.selectedIndex].value;

            if (valueSort === "high-low") {
                data.reversePriceProducts();
                createCard(data.spliceItems(), outEle);
            }
            if (valueSort === "low-high") {
                data.sortPriceProducts();
                createCard(data.spliceItems(), outEle);
            }            
            
            if(hasClass(getId("more"), "display-none")) {
                getId("more").classList.remove("display-none");
            }
        })
    } else console.log("no data to sort");

}
