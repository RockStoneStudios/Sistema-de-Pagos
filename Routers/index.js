const {Router} = require('express');
const router = Router();
const stripe = require('stripe')('sk_test_51HdnxkGmDd5riCZ2KIR99MXQSPDqjiZ0pMo5Nogk3ruLWGGIYG1bmkt7DV0T0sRytSoyMEG87SaNSlzZWAiEI5CA00VaaebEli');


router.get('/',(req,res)=>{
    res.render('index',{
        image : 'https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png',
        imagen1 : 'https://helados.pro/wp-content/uploads/2019/03/Helado_maracuya.jpg'
    });
});

router.post('/checkout', async (req,res)=>{
      console.log(req.body);
     const customer = await stripe.customers.create({
          email :req.body.stripeEmail,
          source : req.body.stripeToken

      });
    const charge = await stripe.charges.create({
          amount : '3500',
          currency : 'usd',
          customer : customer.id,
          description : 'Matlab Sofware Scientific Computing'
      });
      console.log(charge.id);
      res.render('dowload');
});

module.exports = router;