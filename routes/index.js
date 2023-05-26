const express = require('express'); // requiring expresss
const router = express.Router(); // router
const homeController = require('../controllers/home_controller'); // requeiring homeController

console.log(`router is loaded : {200}`);

// It will redirect you to the home page and other requiers
router.get('/' , homeController.home);
router.use('/users' , require('./users'));

router.use('/admin' , require('./admin'));
 
router.use('/reviews', require('./reviews'));

module.exports = router;