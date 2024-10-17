const { Router } = require('express');
const userController = require("../controllers/userController");
const {validateUser, validateUserId} = require('../middlewares/validateUser');

const router = Router();

router.post('/', validateUser, (req, res) =>{
    userController.create(req, res)
})
 
router.get('/', (req, res) =>{
    userController.getAll(req, res)
})
 
router.delete('/:id', validateUserId, (req, res) =>{
    userController.delete(req, res)
})
 
router.put('/:id', validateUserId, validateUser, (req, res) =>{
    userController.update(req, res)
})
 
router.get('/:id', validateUserId, (req, res) =>{
    userController.getOne(req, res)
})

module.exports = router;