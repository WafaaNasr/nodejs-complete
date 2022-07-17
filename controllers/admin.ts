
import { Product } from '../models/product';

exports.getAddProduct = (req: any, res: any) => {
    res.render('admin/add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product'
    });
};

exports.postAddProduct = (req: any, res: any) => {
    const { title, imageURL, price, description } = req.body;
    const product = new Product(title, imageURL, price, description);
    product.save();
    res.redirect('/');
};

exports.getProducts = (req: any, res: any) => {
    Product.fetchAll((products: any) =>
        res.render('admin/products', {
            pageTitle: 'Admin Products',
            path: '/admin/products',
            products
        }));

};