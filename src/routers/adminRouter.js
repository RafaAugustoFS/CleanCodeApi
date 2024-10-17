const { Router } = require('express');
const adminController = require("../controllers/adminController");
const {validateAdmin, validateAdminId} = require('../middlewares/validateAdmin');

const router = Router();

router.post('/', validateAdmin, (req, res) =>{
    adminController.create(req, res)
})
 
router.get('/', (req, res) =>{
    adminController.getAll(req, res)
})
 
router.delete('/:id', validateAdminId, (req, res) =>{
    adminController.delete(req, res)
})
 
router.put('/:id', validateAdminId, validateAdmin, (req, res) =>{
    adminController.update(req, res)
})
 
router.get('/:id', validateAdminId, (req, res) =>{
    adminController.getOne(req, res)
})

module.exports = router;