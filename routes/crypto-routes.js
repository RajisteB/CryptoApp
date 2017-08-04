const express = require('express');
const cryptoRouter = express.Router();
const getCrypto = require('../services/crypto/crypto-helper');
const authHelpers = require('../services/auth/auth-helpers');
const liveCrypto = require('../controllers/livecrypto-controller');


cryptoRouter.get('/dashboard', getCrypto.getPrices, getCrypto.getTweets, 
        getCrypto.getNews, liveCrypto.index);

cryptoRouter.get('/:id', liveCrypto.show)

module.exports = cryptoRouter;

