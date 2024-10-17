const adminService = require("../services/adminService");

const adminController ={
    login: async (req, res) =>{
        try {
            const admin = await adminService.login(req.body);

            if(!admin){
                return res.status(400).json({
                    msg: "Email ou senha incorretos!!"
                })
            }
 
            if(!isValida){
                return res.status(400).json({
                    msg: "Email ou senha incorretos!!"
                })
            }   

            return res.status(200).json({
                msg:"Login realizado!",
                token
            })
        } catch (error) {
            console.error(error);
            return res.status(500).json({msg: "Acione o suporte!"});
        }
    },
    updatePassword: async (req, res) =>{
        try {
            const admin = await adminService.updatePassword(req.params.id, req.body);
            if(!admin){
                return res.status(400).json({
                    msg: 'Administrador não encontrado!'
                })
            }
            return res.status(200).json({
                msg: 'Administrador atualizado com sucesso',
                admin
            })
        } catch (error) {
            return res.status(500).json({
                msg: 'Erro ao tentar o atualizar o administrador.'
            })
        }
    },
    create: async(req,res) =>{
        try {
            const admin = await adminService.create(req.body);
            return res.status(201).json({
                msg: 'Administrador criado com sucesso.',
                admin
            })
        } catch (error) {
            return res.status(500).json({
                msg: 'Erro ao tentar criar o administrador.'
            })
        }
    },
    update: async(req, res) =>{
        try {
            const admin = await adminService.update(req.params.id, req.body);
            if(!admin){
                return res.status(400).json({
                    msg: 'Administrador não encontrado!'
                })
            }
            return res.status(200).json({
                msg: 'Administrador atualizado com sucesso',
                admin
            })
        } catch (error) {
            return res.status(500).json({
                msg: 'Erro ao tentar o atualizar o administrador.'
            })
        }
    },
    getAll: async(req, res) =>{
        try {
            const admin = await adminService.getAll() 
            return res.status(200).json({
                msg: 'Administradores:',
                admin
            })
        } catch (error) {
            return res.status(500).json({
                msg: 'Erro ao buscar os administradores.'
            }) 
        }
    },
    getOne: async(req,res) =>{
        try {
            const admin = await adminService.getById(req.params.id)
            if(!admin){
                return res.status(400).json({
                    msg: 'Administrador não encontrado!'
                })
            }
            return res.status(200).json({
                msg: "Administrador encontrado",
                admin
            })
        } catch (error) {
            return res.status(500).json({
                msg: 'Erro ao buscar o administrador.'
            }) 
        }
    },
    delete: async(req, res) =>{
        try {
            const admin = await adminService.delete(req.params.id)
            if(!admin){
                return res.status(400).json({
                    msg: 'Administrador não encontrado.',
                })
            }
            return res.status(200).json({
                msg: 'Administrador deletado.',
            })
        } catch (error) {
            return res.status(500).json({
                msg: 'Erro ao deletar o administrador.'
            })
        }
    }
}
module.exports = adminController;