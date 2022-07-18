import { Router } from "express";
const shopController = require('../controllers/shop');

const router = Router();

router.get('/', shopController.getIndex);
router.get('/products', shopController.getShop);
router.get('/products/:productId', shopController.getProductDetails);
router.get('/cart', shopController.getCart);
router.post('/cart', shopController.postCart);
router.get('/orders', shopController.getOrders);
router.get('/checkout', shopController.getCheckout);

export default router; 