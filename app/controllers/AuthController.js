const {registro_aspirante} = require('../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth')

module.exports = {
    //Inicio de sesión
    signIn(req, res) {

        let {n_control, password} = req.body;
        
        //Buscar usuario
        registro_aspirante.findOne({
            where: {
                n_control: n_control
            }
        }).then(registro_aspirante => {

            if(!registro_aspirante){
                res.status(404).json({msg: 'Este usuario no existe'});
            }else{
                if(bcrypt.compareSync(password, registro_aspirante.password)){
                    let  token = jwt.sign({ registro_aspirante: registro_aspirante}, authConfig.secret, {
                        expiresIn: authConfig.expires
                    });
                    res.json({
                        registro_aspirante: registro_aspirante,
                        token: token
                    })
                }else{
                    res.status(401).json({msg: 'Contraseña incorrecta'});
                }
            }

        }).catch(err => {
            res.status(500).json(err);
        })
    },
    //Registro
    signUp(req, res) {
        let password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds));

        //const today = new Date();
        //const year = today.getFullYear().toString().slice(-2);
        //registro_aspirante.count({
            //col: 'id',
        //}).then(function(count) {

        //})
        n_control = "añauwuanya";
        //Crear usuario
        registro_aspirante.create({
            nombre_s: req.body.nombre_s,
            primer_apellido: req.body.primer_apellido,
            segundo_apellido: req.body.segundo_apellido,
            fecha_nacimiento: req.body.fecha_nacimiento,
            sexo: req.body.sexo,
            entidad_federativa_nacimiento: req.body.entidad_federativa_nacimiento,
            municipio_nacimiento: req.body.municipio_nacimiento,
            email: req.body.email,
            password: password,
            pregunta_secreta: req.body.pregunta_secreta,
            respuesta_pregunta: req.body.respuesta_pregunta,
            n_control: n_control,
            estatus: req.body.estatus,
            fecha_registro: req.body.fecha_registro
        }).then(registro_aspirante => {
            
            let  token = jwt.sign({ registro_aspirante: registro_aspirante}, authConfig.secret, {
                expiresIn: authConfig.expires
            });

            res.json({
                registro_aspirante: registro_aspirante,
                token: token
            });
        }).catch(err => {
            res.status(500).json(err)
        })
    }
}
