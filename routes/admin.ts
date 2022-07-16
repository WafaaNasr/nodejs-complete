import { Router } from 'express';


const products: any[] = [];
const router = Router();


router.get('/add-product', (req, res) => {
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product'
    });
});
router.post('/add-product', (req, res) => {
    const product = req.body;
    console.log(product);
    products.push(product);
    res.redirect('/');
});



export default { routes: router, products };
