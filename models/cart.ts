import fs from 'fs';
import path from 'path';
import rootPath from '../utils/path';

const cartPath: string = path.join(rootPath, "data", "cart.json");



export class Cart {
    private static instance: Cart;
    // @ts-ignore
    private products: { [productId: string]: number; };
    // @ts-ignore
    private totalAmount: number;

    private constructor() {
        this.products = {};
        this.totalAmount = 0;
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new Cart();
        }
        return this.instance;
    }


    static async addProduct(productId: string, productPrice: number) {
        if (!productId || !productPrice) return;
        fs.readFile(cartPath, (err, fileContent: any) => {
            let cart = this.getInstance();
            if (!err && Object.keys(fileContent).length) {
                cart = JSON.parse(fileContent);
            }
            cart.products[productId] = (cart.products[productId] || 0) + 1;
            cart.totalAmount += productPrice;
            fs.writeFile(cartPath, JSON.stringify(cart), (err: any) => {
                console.log(err);
            });
        });
    }
}