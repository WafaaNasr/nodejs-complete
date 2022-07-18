import fs from 'fs';
import path from "path";
import rootPath from '../utils/path';

const productsFilePath = path.join(rootPath, 'data', 'products.json');
const readProductsFromFile = (callback: any) => {
    fs.readFile(productsFilePath, (err, content: any) => {
        if (!err)
            return callback(JSON.parse(content));

        return callback([]);
    });
};
export class Product {
    private readonly id: string = Math.random().toString();
    constructor(
        public title: string,
        public imageURL: string,
        public price: number,
        public description: string) {
    };


    save() {
        console.log(this.id);
        readProductsFromFile((products: any) => {
            products.push(this);
            fs.writeFile(productsFilePath, JSON.stringify(products), (err) => console.log);
        });
    }
    static fetchAll(callback: any) {
        readProductsFromFile(callback);
    }
    static fetchProduct(productId: any, callback: any) {
        readProductsFromFile((products: any) => {
            const product = products.find((p: any) => p.id === productId);
            callback(product);
        });
    }
}