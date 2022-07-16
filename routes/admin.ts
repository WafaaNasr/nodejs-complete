import { Router } from 'express';
import path from 'path';
import rootPath from '../utils/path';


const products: any[] = [];
const router = Router();


router.get('/add-product', (req, res) => {
    res.sendFile(path.join(rootPath, 'views', 'add-product.html'));
});
router.post('/add-product', (req, res) => {
    const product = req.body;
    console.log(product);
    products.push(product);
});



export default { routes: router, products };
