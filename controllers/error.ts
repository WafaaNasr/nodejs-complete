exports.get404 = (req: any, res: any, next: any) => {
    res.status(404).render('404', { pageTitle: 'Page not found', path: '' });
};