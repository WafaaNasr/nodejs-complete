const products: any[] = [];


exports.getShop = (req: any, res: any) => {
    res.render("shop", {
        pageTitle: 'Shop',
        path: '/',
        products
    });
};

exports.getAddProduct = (req: any, res: any) => {
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product'
    });
};

exports.postAddProduct = (req: any, res: any) => {
    const product = req.body;
    console.log(product);
    products.push(product);
    res.redirect('/');
};