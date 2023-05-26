// requring express
const express = require('express');
// making router 
const router = express.Router();
// requiring passprt, for chking the authrization
const passport = require('passport');
// requring adminController file, to call the fucntion, when requied
const adminController = require('../controllers/admin_controller');

// It will assign the work to the employeess
router.get('/assignWork' , passport.checkAuthentication , adminController.assignWork);

// This helps to view the employee
router.get('/view-employee' , passport.checkAuthentication , adminController.showEmployeeList);
// To set the reviews, 
router.post('/setReviewes' , passport.checkAuthentication , adminController.setReviewrAndReviewe);
// This router will make new Admin
router.post('/newAdmin' , passport.checkAuthentication , adminController.newAdmin);
// To delete the employee
router.get('/deleteEmployee/:id', passport.checkAuthentication , adminController.deleteEmployee);
// To add the employee
router.get('/add-employee' , passport.checkAuthentication , adminController.addEmployee);

module.exports = router;