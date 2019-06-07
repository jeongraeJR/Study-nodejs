const express = require('express');
const app = express();
const router = express.Router();
const controller = require('./user.controller');
var methodOverride = require('method-override');
app.use(methodOverride('_method'));

router.get('/',controller.index);
router.get('/:id',controller.show);
router.delete('/:id',controller.destroy);
router.post('/',controller.create);
router.put('/:id',controller.update);
module.exports = router;