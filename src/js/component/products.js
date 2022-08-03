class Product {
    constructor() {
        this.products = [];
        this.newProducts = [];
        this.isSorted = false;
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
        this.newProducts = [];
        this.isSorted = true;
        
        return newProducts;
    }
    
    reversePriceProducts() {
        let sortedProducts = this.sortPriceProducts();
        if(this.isSorted) {
            this.products = [...sortedProducts.reverse()];
//            return sortedProducts.reverse();
        }
    }
    
    spliceItems(page=0) {
        let splicedItems = [...this.products].splice(page, 4);
                
        this.newProducts = [
            ...this.newProducts,
            ...splicedItems
        ]        
                
        console.log(this.newProducts);
        
        return this.newProducts;
    }
}
