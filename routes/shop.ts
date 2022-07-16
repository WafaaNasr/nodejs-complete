import { Router } from "express";
import admin from './admin';

const router = Router();
const { products } = admin;

router.get('/', (req, res) => {
    res.render("shop", {
        pageTitle: 'Shop',
        path: '/',
        products
    });
});

export default router; 