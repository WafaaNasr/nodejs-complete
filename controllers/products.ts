import { Product } from '../models/product';

exports.getShop = (req: any, res: any) => {
    Product.fetchAll((products: any) =>
        res.render("shop", {
            pageTitle: 'Shop',
            path: '/',
            products
        }));
};

exports.getAddProduct = (req: any, res: any) => {
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product'
    });
};

exports.postAddProduct = (req: any, res: any) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};