
import express from 'express';
import path from 'path';
import * as bodyParser from 'body-parser';

import rootPath from './utils/path';
import shopRoutes from './routes/shop';
import adminRoutes from './routes/admin';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(rootPath, "public")));
app.use('/admin', adminRoutes.routes);
app.use(shopRoutes);
app.get('/', (req: any, res: any) => {
    res.send('GET request to the homepage');
});

app.listen(3000, () => console.log('App is listening on 3000'));
