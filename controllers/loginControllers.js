const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//VERIFICA SE EXISTE UM EMAIL ESTÁ CADASTRADO
exports.getLoginEmail = (req,res) => {
    mysql.getConnection((error,conn) =>{
        if(error){
            return res.status(500).send({ error: error})
        }
        conn.query(
            'SELECT * FROM database1.Usuarios WHERE email = ? ',[req.params.email.trim()],(error,result) =>{
                if(error){
                    return res.status(500).send({ error: error })
                }
                if (result.length > 0){
                    return res.status(200).send({ error: 'Email já cadastrado', value: 1})
                }
                else{
                    return res.status(200).send({ msg: 'Email disponível para cadastrado', value: 0})
                }
            }
        )
    })
}

//VERIFICA EMAIL E SENHA (LOGIN)
exports.postLogin = (req,res,next)=> {
    mysql.getConnection((error,conn) =>{
        if (error){
            return res.status(500).send({ error: error })
        }
        const query = `SELECT * FROM database1.Usuarios WHERE EMAIL = ?`;
        conn.query(query,[req.body.email],(error,result,fields) =>{
            conn.release()
            if (result.length<1){
                return res.status(401).send({ msg: "Email ou Senha inválida" })
            }
            bcrypt.compare(req.body.pass,result[0].pass, (error,bresult) => {
                if (error) {
                    return res.status(401).send({ msg: "Email ou Senha inválida" })                   
                }
                if (bresult){
                    let token = jwt.sign({
                        id_user: result[0].id,
                        email: result[0].email
                    },process.env.JWT_TOKEN,{
                        expiresIn: "5d"
                    } )
                    return res.status(200).json({token : token})
                    
                }
                else{
                    return res.status(401).send({ msg: "Email ou Senha inválida" })
                    
                }
            })
        })
    })
}

//CRIAR UM LOGIN (EMAIL E SENHA)
exports.createLogin = (req,res,next) => {
    mysql.getConnection((error,conn) =>{
        if(error){
            return res.status(500).send({ error: error})
        }
        conn.query(
            'SELECT * FROM database1.Usuarios WHERE email = ? ',[req.body.email.trim()],(error,result) =>{
                if(error){
                    return res.status(500).send({ error: error })
                }
                if (result.length > 0){
                    return res.status(401).send({ error: 'Email já cadastrado'})
                }
                else{
                    bcrypt.hash(req.body.pass,6,(errorBcrypt, hash) =>{
                        if(errorBcrypt){
                            return res.status(500).send({ error: errorBcrypt })
                        }
                        conn.query(
                            `INSERT INTO database1.Usuarios (email,pass,nome,peso,altura,idade,sexo) VALUES (?,?,?,?,?,?,?) `,[req.body.email, hash,req.body.nome,req.body.peso,req.body.altura,req.body.idade,req.body.sexo],
                            (error,result)=>{
                                conn.release();
                                if(error){
                                    return res.status(500).send({ error: error })
                                }
                                return res.status(201).send ({ msg: 'Usuário cadastrado', id: result.insertId})
                            }
                        )
                    })
                }
            }
        )
    })
}