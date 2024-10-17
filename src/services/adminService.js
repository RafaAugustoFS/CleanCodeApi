const Admin = require('../models/user');

const adminService ={
    login: async(admin)=>{
        try {
            const admin = await Admin.findOne({where : { email }});
            const {email,password} = req.body;

            const token = jwt.sign({ email: user.email, nome: user.nome }, process.env.SECRET, {expiresIn: '1h'});
            const isValida = await bcrypt.compare(password, user.password);

            if(!admin){
                return null;
            };

            if(!isValida){
                return null;
            };

            
        } catch (error) {
            throw new Error('Erro ao logar como administrador');
        }
    },
    updatePassword: async(id, updatePassword) =>{
        try {
            const admin = await Admin.findByPk(id);
            if(!admin){
                return null;
            }
            await admin.update(updatePassword);
            await admin.save();
            return admin;
        } catch (error) {
            throw new Error('Erro ao atualizar administrador.')
        }
    },
    create: async (admin) =>{
        try {
            return await Admin.create(admin);
        } catch (error) {
            throw new Error('Erro ao criar o administrador');
        }
    },
    update: async (id, adminToUpdate) =>{
        try {
            const admin = await Admin.findByPk(id);
            if(!admin){
                return null;
            }
            await admin.update(adminToUpdate);
            await admin.save();
            return admin;
        } catch (error) {
            throw new Error('Erro ao atualizar administrador.')
        }
    },
    getById: async (id) =>{
        try {
            const admin = await Admin.findByPk(id)
            if(!admin){
                return null;
            }
            return admin;
        } catch (error) {
            throw new Error('Erro ao procurar administrador');
        }
    },
    getAll: async() =>{
        try {
            return await Admin.findAll();
        } catch (error) {
            throw new Error('Ocorreu um erro ao buscar todos administradores.')
        }
    },
    delete: async(id)=>{
        try {
            const admin = await Admin.findByPk(id)
            if(!admin){
                return null;
            }
            await admin.destroy();
            return admin;
        } catch (error) {
            throw new Error('Ocorreu um erro ao deletar administrador.')
        }
    }
};
module.exports = adminService;