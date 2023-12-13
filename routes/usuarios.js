const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;

// mysql.getConnection((error,conn)=>{
//     conn.query(
//         "SELECT * FROM database1.Carboidratos WHERE nome = 'Alimento1'"
//     )
// })

router.get('/all',(req,res,next) => {
    mysql.getConnection((error,conn) =>{
        if(error){
            console.log(error)
        }
        conn.query(
        "SELECT * FROM database1.Usuarios",
        (error,result,field) => {
            conn.release();

            if(error){
                return res.status(404).send({
                    error: error
                })
            }
            res.status(201).json(result)
        })
    })
});

router.post('/', (req,res,next)=> {

    mysql.getConnection((error,conn)=>{
        conn.query(
            "INSERT INTO Usuarios (nome,peso,altura,idade,sexo,dieta,calcm,calal,callt,calja) VALUES (?,?,?,?,?,?,?,?,?,?)",
            [   req.body.nome,
                req.body.peso,
                req.body.altura,
                req.body.idade,
                req.body.sexo,
                req.body.dieta,
                req.body.calcm,
                req.body.calal,
                req.body.callt,
                req.body.calja
             ],
             (error,result,field) => {
                conn.release();

                if(error){
                    return res.status(500).send({
                        error: error,
                        response: null
                    });
                }
                res.status(201).send({
                    msg: "Usuário Cadastrado!",
                    usuario: result.insertId
                })
             }
        )
    })
})

router.patch('/alter/:email',(req,res,next) => {
    mysql.getConnection((error,conn) =>{
        if(error){
            console.log(error)
        }
        conn.query(
        "UPDATE database1.Usuarios SET nome = ?, idade = ?, peso = ?, sexo = ?, altura = ? WHERE email = ? ",[req.body.nome,req.body.idade,req.body.peso,req.body.sexo,req.body.altura,req.params.email],
        (error,result,field) => {
            conn.release();
            if(error){
                return res.status(404).send({
                    error: error
                })
            }
            res.status(201).send({msg:'Usuario Alterado'})
        })
    })
});

router.patch('/cal',(req,res,next) => {
    mysql.getConnection((error,conn) =>{
        if(error){
            console.log(error)
        }
        conn.query(
        "UPDATE database1.Usuarios SET calcm = ?, calal = ?, callt = ?, calja = ? WHERE email = ? ",[req.body.calcm,req.body.calal,req.body.callt,req.body.calja,req.body.email],
        (error,result,field) => {
            conn.release();
            if(error){
                return res.status(404).send({
                    error: error
                })
            }
            res.status(201).send({msg:'Calorias alteradas'})
        })
    })
});

router.patch('/diet',(req,res,next) => {
    mysql.getConnection((error,conn) =>{
        if(error){
            console.log(error)
        }
        conn.query(
        "UPDATE database1.Usuarios SET dieta = ? WHERE email = ? ",[req.body.dieta,req.body.email],
        (error,result,field) => {
            conn.release();
            if(error){
                return res.status(404).send({
                    error: error
                })
            }
            res.status(201).send({msg:'Dieta alterada'})
        })
    })
});

router.post('/usuario',(req,res,next) => {
    mysql.getConnection((error,conn) =>{
        if(error){
            console.log(error)
        }
        conn.query(
        "SELECT * FROM database1.Usuarios WHERE email = ?",[req.body.email],
        (error,result,field) => {
            conn.release();

            if(error){
                return res.status(404).send({
                    error: error
                })
            }
           return res.status(201).json(result)
        })
    })
});


module.exports = router