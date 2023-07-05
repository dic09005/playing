

const express = require('express');
const router = express.Router();


router.use('/', require('./swagger'));
router.use('/admin', require('./admin'));
router.use('/employee', require('./employee'));
router.use('/patient', require('./patient'));
router.use('/schedule', require('./schedule'));

module.exports = router;

// const { auth, requiresAuth } = require('express-openid-connect');
// const dotenv = require('dotenv');
// dotenv.config();

// const config = {
//     authRequired: false,
//     auth0Logout: true,
//     secret: process.env.SECRET,
//     baseURL: process.env.BASE_URL,
//     clientID: process.env.CLIENT_ID,
//     issuerBaseURL: process.env.ISSUER_BASE_URL,
//   };

// const express = require('express');
// const router = express.Router();

// // auth router attaches /login, /logout, and /callback routes to the baseURL
// router.use(auth(config));
// router.get('/', (req, res) => {
//     res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
//   });

// router.get('/profile', requiresAuth(), (req, res) => {
//   res.send(JSON.stringify(req.oidc.user));
// });

// router.use('/', require('./swagger'));

// module.exports = router; 