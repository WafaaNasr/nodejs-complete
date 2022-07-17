

import { Product } from '../models/product';

exports.getShop = (req: any, res: any) => {
    Product.fetchAll((products: any) =>
        res.render("shop/product-list", {
            pageTitle: 'Product list',
            path: '/products',
            products
        }));
};

exports.getIndex = (req: any, res: any) => {
    Product.fetchAll((products: any) =>
        res.render("shop/index", {
            pageTitle: 'Shop',
            path: '/',
            products
        }));
};

exports.getCheckout = (req: any, res: any) => {
    res.render("shop/checkout", {
        pageTitle: 'Checkout',
        path: '/',
    });
};

exports.getCart = (req: any, res: any) => {
    res.render("shop/cart", {
        pageTitle: 'Cart',
        path: '/cart',
    });
};

exports.getOrders = (req: any, res: any) => {
    res.render("shop/orders", {
        pageTitle: 'Orders',
        path: '/orders',
    });
};