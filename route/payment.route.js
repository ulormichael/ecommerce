const express = require('express');
const router = express.Router();
const paymentController = require('../controller/payment.controller');

router.post('/pay', paymentController.initiatePayment);

router.get('/payment-callback', paymentController.paymentCallback);

module.exports = router;