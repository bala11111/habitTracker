const express = require('express');
const router = express.Router();

const homeController = require('../controller/home_controller');
const detailsController = require('../controller/details_controller');

router.get('/',homeController.home);//route for normal home page
router.get('/go_back',homeController.homes);//route to go back to home page
router.post('/create-habit',homeController.createHabit);//route to create habit
router.get('/delete-habit/:id',homeController.deleteHabit);//route to delete habit
router.get('/details/:id', detailsController.details);//route to get the details of an habit
router.post('/save/:id',detailsController.updating);//route to update the changes

module.exports = router;