import { Router } from "express";
const productsController = require('../controllers/products');

const router = Router();

router.get('/', productsController.getShop);

export default router; 