import {Product} from './app.product.model';

export class Logic {
    private products: Array<Product>;

    constructor(){
        this.products = new Array<Product>();
    }

    getProducts(): Array<Product> {
        this.products.push(new Product(1, 'Prd001', 'Laptop', 'Electronics', 'HP', 'Gaming', 120000));
        this.products.push(new Product(2, 'Prd002', 'Iron', 'Electrical', 'Bajaj', 'Cotton Friendly', 3000));
        this.products.push(new Product(3, 'Prd003', 'Biscuts', 'Food', 'Parle', 'Glucose', 10));
        this.products.push(new Product(4, 'Prd004', 'Oil', 'Food', 'Saffola', 'Soyabean', 500));
        return this.products;
    }

    addProduct(prd: Product) : Array<Product> {
        this.products.push(prd);
        return this.products;
    }

    updateProduct(product : Product) : void {
        let productIndex = this.products.indexOf(product);
        if(productIndex !== -1)
        {
            this.products[productIndex].ProductRowId = product.ProductRowId,
            this.products[productIndex].ProductName = product.ProductName,
            this.products[productIndex].CategoryName = product.CategoryName,
            this.products[productIndex].Description = product.Description,
            this.products[productIndex].Manufacturer = product.Manufacturer,
            this.products[productIndex].BasePrice = product.BasePrice;
        }
    }

    deleteProduct(product : Product) {
        let productIndex = this.products.indexOf(product);
        if(productIndex !== -1)
        {
          this.products.splice(productIndex, 1);   
        }
    }
}
