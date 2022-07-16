import { Router } from "express";
import path from "path";
import routePath from '../utils/path';

const router = Router();


router.get('/', (req, res) => {
    res.sendFile(path.join(routePath, "views", "shop.html"));
});

export default router; 