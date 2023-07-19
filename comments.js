// Create web server

// Import express
const express = require('express');
const router = express.Router();

// Import controller
const commentsController = require('../controllers/commentsController');

// Import validator
const validate = require('../validators/validate');

// Import middleware
const auth = require('../middleware/auth');

// Create route
router.get('/', commentsController.getAll);
router.get('/:id', commentsController.getOne);
router.post('/', auth, validate.validateComment, commentsController.create);
router.put('/:id', auth, validate.validateComment, commentsController.update);
router.delete('/:id', auth, commentsController.delete);

// Export module
module.exports = router;

