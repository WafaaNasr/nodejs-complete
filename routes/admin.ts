import { Router } from 'express';
const router = Router();


const productsController = require('../controllers/products');


router.get('/add-product', productsController.getAddProduct);
router.post('/add-product', productsController.postAddProduct);



export default router;
