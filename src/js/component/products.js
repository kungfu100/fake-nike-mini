class Product {
    constructor() {
        this.products = [];
        this.sLocation = oLocation().search;
        this.isSorted = false;
    }
    
    getCategoryId() {
        return this.sLocation.split("=").at(-1);
    }
    
    isArr(arr) {
        return Array.isArray(arr) && arr.length > 0 ? true : false;
    }
    
    addProducts(arr) {
        if(this.isArr(arr)) {
            this.products = arr;
        }
        else {
            console.log("empty products");   
        }
    }
    
    getTotalItems() {
        return this.products.length;
    }
    
    sortPriceProducts() {
        let newProducts = [...this.products];
        
        newProducts.sort((a,b) => {
            let x = Number(a.price);
            let y = Number(b.price);
            return x-y;
        })
                
        this.products = [...newProducts];
        this.isSorted = true;
        
        return newProducts;
    }
    
    reversePriceProducts() {
        let sortedProducts = this.sortPriceProducts();
        if(this.isSorted) {
            this.products = [...sortedProducts.reverse()];
        }
    }
    
    spliceItems(page=4) {
        let splicedItems = [...this.products].splice(0, page);
                        
        return splicedItems;
    }
}
