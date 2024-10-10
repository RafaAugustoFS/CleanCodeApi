const userService = require("../services/userService");

const userController ={
    create: async(req, res) =>{
        try {
            const user = await userService.create(req.body);
            return res.status(201).json({
                msg: 'Usuário criado com sucesso',
                user
            })
        } catch (error) {
            return res.status(500).json({
                msg: 'Erro ao tentar criar o usuário'
            })
        }
    },
    update: async(req, res) =>{
        try {
            const user = await userService.update(req.params.id, req.body);
            if(!user){
                return res.status(400).json({
                    msg: 'User não encontrado!'
                })
            }
            return res.status(200).json({
                msg: 'User atualizado com sucesso',
                user
            })
        } catch (error) {
            return res.status(500).json({
                msg: 'Erro ao tentar o atualizar o usuário.'
            })
        }
    },
    getAll: async(req, res) =>{
        try {
            const user = await userService.getAll() 
            return res.status(200).json({
                msg: 'Usuários:',
                user
            })
        } catch (error) {
            return res.status(500).json({
                msg: 'Erro ao buscar os usuários.'
            }) 
        }
    },
    getOne: async(req,res) =>{
        try {
            const user = await userService.getById(req.params.id)
            if(!user){
                return res.status(400).json({
                    msg: 'User não encontrado!'
                })
            }
            return res.status(200).json({
                msg: "Usuário encontrado",
                user
            })
        } catch (error) {
            return res.status(500).json({
                msg: 'Erro ao buscar o usuário.'
            }) 
        }
    },
    delete: async(req, res) =>{
        try {
            const user = await userService.delete(req.params.id)
            if(!user){
                return res.status(400).json({
                    msg: 'Usuário não encontrado.',
                })
            }
            return res.status(200).json({
                msg: 'Usuário deletado.',
            })
        } catch (error) {
            return res.status(500).json({
                msg: 'Erro ao deletar o usuário.'
            })
        }
    }

}
module.exports = userController;