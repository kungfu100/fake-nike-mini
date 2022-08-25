const listProduct = new Product();
let urlProduct = "";

const getURLProduct = (() => {
    urlProduct = listProduct.sLocation 
        ? `${URL_BASE}${PATH_CATEGORY}?${PARAM_CATEGORY}${listProduct.getCategoryId()}` 
        : URL_BASE;
})();

getData(urlProduct)
    .then(data => {

        listProduct.addProducts(data.content);

        getId("items").innerHTML = listProduct.getTotalItems() + " items";

        createCard(listProduct.spliceItems(), "products");

        moreData(listProduct);

        sortData(listProduct, "sort-price", "products");
    })
    .catch(err => console.log(err))
