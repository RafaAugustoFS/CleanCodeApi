const Admin = require("../models/admin");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
const adminService = require("../services/adminService");

const adminController = {
  login: async (req, res) => {
    try {
      const {email,senha} = req.body;

      const admin = await Admin.findOne({where : { email }});

      if(!admin){
          return res.status(400).json({
              msg: "Email ou senha incorretos!!"
          })
      }

      const isValida = await bcrypt.compare(senha, admin.senha);
       if(!isValida){
          return res.status(400).json({
              msg: "Email ou senha incorretos!!"
          })
       }   

       const token = jwt.sign({ email: admin.email, nome: admin.nome }, process.env.SECRET, {expiresIn: '1h'});

      return res.status(200).json({
        msg: "Login realizado!",
        token,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o suporte!" });
    }
  },
  updatePassword: async (req, res) => {
    const { id } = req.params;
    const { senha } = req.body;
    console.log(senha);

    try {
      const novaSenha = await Admin.findByPk(id);
      if (novaSenha == null) {
        return res.status(404).json({
          msg: "Admin não encontrado",
        });
      }
      const hashSenha = await bcrypt.hash(senha, 10);
      const update = await novaSenha.update({
        senha:hashSenha
      });

      if (update) {
        return res.status(200).json({
          msg: "Senha atualizada com sucesso",
        });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o suporte" });
    }
  },
  create: async (req, res) => {
    try {
        const admin = await adminService.create(req.body)

        return res.status(200).json({
          msg: "Admin criado com sucesso!",
          adm: admin,
        });

      } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Acione o suporte" });
      }
  },
  update: async (req, res) => {
    try {
      const admin = await adminService.update(req.params.id, req.body);
      if (!admin) {
        return res.status(400).json({
          msg: "Administrador não encontrado!",
        });
      }
      return res.status(200).json({
        msg: "Administrador atualizado com sucesso",
        admin,
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Erro ao tentar o atualizar o administrador.",
      });
    }
  },
  getAll: async (req, res) => {
    try {
      const admin = await adminService.getAll();
      return res.status(200).json({
        msg: "Administradores:",
        admin,
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Erro ao buscar os administradores.",
      });
    }
  },
  getOne: async (req, res) => {
    try {
      const admin = await adminService.getById(req.params.id);
      if (!admin) {
        return res.status(400).json({
          msg: "Administrador não encontrado!",
        });
      }
      return res.status(200).json({
        msg: "Administrador encontrado",
        admin,
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Erro ao buscar o administrador.",
      });
    }
  },
  delete: async (req, res) => {
    try {
      const admin = await adminService.delete(req.params.id);
      if (!admin) {
        return res.status(400).json({
          msg: "Administrador não encontrado.",
        });
      }
      return res.status(200).json({
        msg: "Administrador deletado.",
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Erro ao deletar o administrador.",
      });
    }
  },
};
module.exports = adminController;
