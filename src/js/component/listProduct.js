const listProduct = new Product();
let urlProduct = `${URL_BASE}`;

const moreData = data => {
    let page = 0;

    getId("more").addEventListener("click", function () {
        if (data.isSorted) page = 0;
        else {
            page += 4;
            createCard(data.spliceItems(page), "products");
        }
    })
}

getData(urlProduct)
    .then(res => res.json())
    .then(data => {

        listProduct.addProducts(data.content);

        getId("items").innerHTML = listProduct.getTotalItems() + " items";

        createCard(listProduct.spliceItems(), "products");

        moreData(listProduct);

        sortData(listProduct, "sort-price", "products");
    })
    .catch(err => console.log(err))
