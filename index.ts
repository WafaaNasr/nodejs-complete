
import express from 'express';
import path from 'path';
import * as bodyParser from 'body-parser';

import rootPath from './utils/path';
import shopRoutes from './routes/shop';
import adminRoutes from './routes/admin';


const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');// by default views will route to the views folder


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(rootPath, "public")));


app.use('/admin', adminRoutes.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page not found', path: '' });
});

app.listen(3000, () => console.log('App is listening on 3000'));
