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
    constructor(public title: string) { };


    save() {
        readProductsFromFile((products: any) => {
            products.push(this);
            console.log(products);
            fs.writeFile(productsFilePath, JSON.stringify(products), (err) => console.log);
        });
    }
    static fetchAll(callback: any) {
        readProductsFromFile(callback);
    }
}