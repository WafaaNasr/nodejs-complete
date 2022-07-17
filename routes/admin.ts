import { Router } from 'express';
const router = Router();


const adminController = require('../controllers/admin');


router.get('/products', adminController.getProducts);
router.get('/add-product', adminController.getAddProduct);
router.post('/add-product', adminController.postAddProduct);



export default router;
