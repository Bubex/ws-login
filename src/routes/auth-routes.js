const express = require('express');

const authController = require('../controllers/auth-controller');

const router = express.Router();

router.post('/login', async (req, res) => {
    try {
        const result = await authController.login(req.body);
        res.json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
