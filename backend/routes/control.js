const express =require('express');
const router = express.Router();
const mysqlConnection= require('../db/db');

router.post('/usuarios', (req,res) => {
    console.log(req.body)
    const {nombre_usuario,correo,contraseña,perfil}=req.body;

    let user =[nombre_usuario,correo,contraseña,perfil];

    let query = `INSERT INTO tbl_propietario(nombre_usuario,correo,contraseña,perfil)
    VALUES(?,?,?,?)`
    mysqlConnection.query(query, user, (err, results) => {
        if(err){
            console.log(err)
        }
        return res.json({message:"user has been created"})
    })
})






module.exports=router;