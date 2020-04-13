const express = require('express');
const router = express.Router(); // Nos facilita exportar rutas


router.get('/', (req, res) => {
    //res.sendFile(path.join(__dirname, 'views/index.html'));
    //res.render es como senfile pero con extensión ejs. Para hacer la transfromación de ejs a html
    res.render('index.html', { title: 'Página principal'}); // Le pasamos a la vista index un dato llamado title (es opcional)
});

router.get('/contact', (req, res) => {
    res.render('contact.html', {title: 'Página de contacto'});
});


module.exports = router;