const {Router} = require('express');
const router = Router();

router.get('/',(req,res)=>{
    res.render('index',{
        image : 'https://mac-center.com/wp-content/uploads/2020/06/xr_negro-1.jpg',
        imagen1 : 'https://helados.pro/wp-content/uploads/2019/03/Helado_maracuya.jpg'
    });
});

module.exports = router;