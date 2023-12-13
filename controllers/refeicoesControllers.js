const express = require('express');
const mysql = require('../mysql').pool;
/*const bcrypt = require('bcrypt')
const router = express.Router();
const jwt = require('jsonwebtoken')*/

//GETS
    //RECEBE O CAFÉ DA MANHÃ ESCOLHIDO 
    exports.getCafeDaManha = (req,res) => {
        mysql.getConnection((error,conn) =>{
            conn.release()
            if(error){
                return res.status(500).send({ error: error})
            }
            query = 'SELECT carb_id,carb_qtd, Carboidratos.nome as carb_name, prot_id, prot_qtd, Proteinas.nome as prot_name,legum_id,legum_qtd, Legumes.nome as legum_name,liquid_id,liquid_qtd,Liquidos.nome as liquid_name,fruit_id,fruit_qtd, Frutas.nome as fruit_name FROM database1.CafeDaManha join database1.Carboidratos on database1.CafeDaManha.carb_id = database1.Carboidratos.id join database1.Proteinas on database1.CafeDaManha.prot_id = database1.Proteinas.id join database1.Legumes on database1.CafeDaManha.legum_id = database1.Legumes.id join database1.Liquidos on database1.CafeDaManha.liquid_id = database1.Liquidos.id join database1.Frutas on database1.CafeDaManha.fruit_id = database1.Frutas.id where email = ?';
            conn.query(
                query,[req.params.email.trim()],(error,result) =>{
                    if(error){
                        return res.status(500).send({ error: error })
                    }
                    if (result.length > 0){
                        return res.status(200).json(result)
                    }
                    else{
                        query = 'SELECT carb_id,carb_qtd, Carboidratos.nome as carb_name, prot_id,prot_qtd, Proteinas.nome as prot_name,liquid_id,liquid_qtd, Liquidos.nome as liquid_name,fruit_id,fruit_qtd, Frutas.nome as fruit_name FROM database1.CafeDaManha join database1.Carboidratos on database1.CafeDaManha.carb_id = database1.Carboidratos.id join database1.Proteinas on database1.CafeDaManha.prot_id = database1.Proteinas.id join database1.Liquidos on database1.CafeDaManha.liquid_id = database1.Liquidos.id join database1.Frutas on database1.CafeDaManha.fruit_id = database1.Frutas.id where email = ?';
                        conn.query(
                            query,[req.params.email.trim()],(error,result) =>{
                                if(error){
                                    return res.status(500).send({ error: error })
                                }
                                if (result.length > 0){
                                    return res.status(200).json(result)
                                }
                                else{
                                    query = 'SELECT carb_id,carb_qtd Carboidratos.nome as carb_name, prot_id,prot_qtd, Proteinas.nome as prot_name,liquid_id,Liquidos.nome as liquid_name FROM database1.CafeDaManha join database1.Carboidratos on database1.CafeDaManha.carb_id = database1.Carboidratos.id join database1.Proteinas on database1.CafeDaManha.prot_id = database1.Proteinas.id join database1.Liquidos on database1.CafeDaManha.liquid_id = database1.Liquidos.id where email = ?';
                                    conn.query(
                                        query,[req.params.email.trim()],(error,result) =>{
                                            if(error){
                                                return res.status(500).send({ error: error })
                                            }
                                            if (result.length > 0){
                                                return res.status(200).json(result)
                                            }
                                            else{
                                                return res.status(500).send({ msg: 'Usuario nao tem essa refeição'})
                                            }
                                        }
                                    )
                                }
                            }
                        )
                    }
                }
            )
        })
    }
    //RECEBE O ALMOCO ESCOLHIDO 
    exports.getAlmoco = (req,res) => {
        mysql.getConnection((error, conn) => {
            conn.release()
            if (error) {
                return res.status(500).send({ error: error })
            }
            query = 'SELECT carb_id,carb_qtd, Carboidratos.nome as carb_name, prot_id,prot_qtd, Proteinas.nome as prot_name,legum_id,legum_qtd, Legumes.nome as legum_name,liquid_id,liquid_qtd,Liquidos.nome as liquid_name,fruit_id,fruit_qtd, Frutas.nome as fruit_name FROM database1.Almoco join database1.Carboidratos on database1.Almoco.carb_id = database1.Carboidratos.id join database1.Proteinas on database1.Almoco.prot_id = database1.Proteinas.id join database1.Legumes on database1.Almoco.legum_id = database1.Legumes.id join database1.Liquidos on database1.Almoco.liquid_id = database1.Liquidos.id join database1.Frutas on database1.Almoco.fruit_id = database1.Frutas.id where email = ?';
            conn.query(
                query, [req.params.email.trim()], (error, result) => {
                    if (error) {
                        return res.status(500).send({ error: error })
                    }
                    if (result.length > 0) {
                        return res.status(200).json(result)
                    }
                    else {
                        query = 'SELECT carb_id,carb_qtd, Carboidratos.nome as carb_name, prot_id,prot_id, Proteinas.nome as prot_name,liquid_id,Liquidos.nome as liquid_name,fruit_id,fruit_qtd, Frutas.nome as fruit_name FROM database1.Almoco join database1.Carboidratos on database1.Almoco.carb_id = database1.Carboidratos.id join database1.Proteinas on database1.Almoco.prot_id = database1.Proteinas.id join database1.Liquidos on database1.Almoco.liquid_id = database1.Liquidos.id join database1.Frutas on database1.Almoco.fruit_id = database1.Frutas.id where email = ?';
                        conn.query(
                            query, [req.params.email.trim()], (error, result) => {
                                if (error) {
                                    return res.status(500).send({ error: error })
                                }
                                if (result.length > 0) {
                                    return res.status(200).json(result)
                                }
                                else {
                                    query = 'SELECT carb_id,carb_qtd, Carboidratos.nome as carb_name, prot_id,prot_qtd, Proteinas.nome as prot_name,liquid_id,Liquidos.nome as liquid_name FROM database1.Almoco join database1.Carboidratos on database1.Almoco.carb_id = database1.Carboidratos.id join database1.Proteinas on database1.Almoco.prot_id = database1.Proteinas.id join database1.Liquidos on database1.Almoco.liquid_id = database1.Liquidos.id where email = ?';
                                    conn.query(
                                        query, [req.params.email.trim()], (error, result) => {
                                            if (error) {
                                                return res.status(500).send({ error: error })
                                            }
                                            if (result.length > 0) {
                                                return res.status(200).json(result)
                                            }
                                            else {
                                                return res.status(500).send({ msg: 'Usuario nao tem essa refeição' })
                                            }
                                        }
                                    )
                                }
                            }
                        )
                    }
                }
            )
        })
    }
    //RECEBE O LANCHE DA TARDE ESCOLHIDO 
    exports.getLancheDaTarde = (req,res) => {
        mysql.getConnection((error,conn) =>{
            conn.release()
            if(error){
                return res.status(500).send({ error: error})
            }
            query = 'SELECT carb_id,carb_qtd, Carboidratos.nome as carb_name, prot_id,prot_qtd, Proteinas.nome as prot_name,legum_id,legum_qtd, Legumes.nome as legum_name,liquid_id,liquid_qtd, Liquidos.nome as liquid_name,fruit_id,fruit_qtd, Frutas.nome as fruit_name FROM database1.LancheDaTarde join database1.Carboidratos on database1.LancheDaTarde.carb_id = database1.Carboidratos.id join database1.Proteinas on database1.LancheDaTarde.prot_id = database1.Proteinas.id join database1.Legumes on database1.LancheDaTarde.legum_id = database1.Legumes.id join database1.Liquidos on database1.LancheDaTarde.liquid_id = database1.Liquidos.id join database1.Frutas on database1.LancheDaTarde.fruit_id = database1.Frutas.id where email = ?';
            conn.query(
                query,[req.params.email.trim()],(error,result) =>{
                    if(error){
                        return res.status(500).send({ error: error })
                    }
                    if (result.length > 0){
                        return res.status(200).json(result)
                    }
                    else{
                        query = 'SELECT carb_id,carb_qtd, Carboidratos.nome as carb_name, prot_id,prot_qtd, Proteinas.nome as prot_name, liquid_id,liquid_qtd,Liquidos.nome as liquid_name,fruit_id,fruit_qtd, Frutas.nome as fruit_name FROM database1.LancheDaTarde join database1.Carboidratos on database1.LancheDaTarde.carb_id = database1.Carboidratos.id join database1.Proteinas on database1.LancheDaTarde.prot_id = database1.Proteinas.id join database1.Liquidos on database1.LancheDaTarde.liquid_id = database1.Liquidos.id join database1.Frutas on database1.LancheDaTarde.fruit_id = database1.Frutas.id where email = ?';
                        conn.query(
                            query,[req.params.email.trim()],(error,result) =>{
                                if(error){
                                    return res.status(500).send({ error: error })
                                }
                                if (result.length > 0){
                                    return res.status(200).json(result)
                                }
                                else{
                                    return res.status(500).send({ msg: 'Usuario nao tem essa refeição'})
                                }
                            }
                        )
                    }
                }
            )
        })
    }
    //RECEBE A JANTA ESCOLHIDA 
    exports.getJanta = (req,res) => {
        mysql.getConnection((error,conn) =>{
            conn.release()
            if(error){
                return res.status(500).send({ error: error})
            }
            query = 'SELECT carb_id,carb_qtd, Carboidratos.nome as carb_name,carb_qtd, prot_id,prot_qtd, Proteinas.nome as prot_name,legum_id,legum_qtd, Legumes.nome as legum_name,liquid_id,liquid_qtd,Liquidos.nome as liquid_name,fruit_id,fruit_qtd, Frutas.nome as fruit_name FROM database1.Janta join database1.Carboidratos on database1.Janta.carb_id = database1.Carboidratos.id join database1.Proteinas on database1.Janta.prot_id = database1.Proteinas.id join database1.Legumes on database1.Janta.legum_id = database1.Legumes.id join database1.Liquidos on database1.Janta.liquid_id = database1.Liquidos.id join database1.Frutas on database1.Janta.fruit_id = database1.Frutas.id where email = ?';
            conn.query(
                query,[req.params.email.trim()],(error,result) =>{
                    if(error){
                        return res.status(500).send({ error: error })
                    }
                    if (result.length > 0){
                        return res.status(200).json(result)
                    }
                    else{
                        return res.status(500).send({ msg: 'Usuario nao tem essa refeição'})
                    }
                }
            )
        })
    }
    //RECEBE CALORIAS DOS ITENS DO CAFE DA MANHA
    exports.getCalCafeDaManha = (req,res) => {
        mysql.getConnection((error,conn) =>{
            conn.release()
            if(error){
                return res.status(500).send({ error: error})
            }
            query = 'SELECT carb_id,database1.Carboidratos.cal as carb_cal, prot_id,database1.Proteinas.cal as prot_cal,liquid_id,database1.Liquidos.cal as liquid_cal,fruit_id,database1.Frutas.cal as fruit_cal from database1.CafeDaManha join database1.Carboidratos on carb_id = database1.Carboidratos.id join database1.Proteinas on prot_id = database1.Proteinas.id join database1.Liquidos on liquid_id = database1.Liquidos.id join database1.Frutas on fruit_id = database1.Frutas.id where email = ?';
            conn.query(
                query,[req.params.email.trim()],(error,result) =>{
                    if(error){
                        return res.status(500).send({ error: error })
                    }
                    if (result.length > 0){
                        return res.status(200).json(result)
                    }
                    else{
                        query = 'SELECT carb_id,database1.Carboidratos.cal as carb_cal, prot_id,database1.Proteinas.cal as prot_cal,liquid_id,database1.Liquidos.cal as liquid_cal from database1.CafeDaManha join database1.Carboidratos on carb_id = database1.Carboidratos.id join database1.Proteinas on prot_id = database1.Proteinas.id join database1.Liquidos on liquid_id = database1.Liquidos.id where email = ?';
                        conn.query(
                            query,[req.params.email.trim()],(error,result) =>{
                                if(error){
                                    return res.status(500).send({ error: error })
                                }
                                if (result.length > 0){
                                    return res.status(200).json(result)
                                }
                            }
                        )
                    }
                }
            )
        })
    }
    //RECEBE CALORIAS DOS ITENS DO CAFE DA MANHA
    exports.getCalCafeDaManha = (req,res) => {
        mysql.getConnection((error,conn) =>{
            conn.release()
            if(error){
                return res.status(500).send({ error: error})
            }
            query = 'SELECT carb_id,database1.Carboidratos.cal as carb_cal, prot_id,database1.Proteinas.cal as prot_cal,liquid_id,database1.Liquidos.cal as liquid_cal,fruit_id,database1.Frutas.cal as fruit_cal from database1.CafeDaManha join database1.Carboidratos on carb_id = database1.Carboidratos.id join database1.Proteinas on prot_id = database1.Proteinas.id join database1.Liquidos on liquid_id = database1.Liquidos.id join database1.Frutas on fruit_id = database1.Frutas.id where email = ?';
            conn.query(
                query,[req.params.email.trim()],(error,result) =>{
                    if(error){
                        return res.status(500).send({ error: error })
                    }
                    if (result.length > 0){
                        return res.status(200).json(result)
                    }
                    else{
                        query = 'SELECT carb_id,database1.Carboidratos.cal as carb_cal, prot_id,database1.Proteinas.cal as prot_cal,liquid_id,database1.Liquidos.cal as liquid_cal from database1.CafeDaManha join database1.Carboidratos on carb_id = database1.Carboidratos.id join database1.Proteinas on prot_id = database1.Proteinas.id join database1.Liquidos on liquid_id = database1.Liquidos.id where email = ?';
                        conn.query(
                            query,[req.params.email.trim()],(error,result) =>{
                                if(error){
                                    return res.status(500).send({ error: error })
                                }
                                if (result.length > 0){
                                    return res.status(200).json(result)
                                }
                            }
                        )
                    }
                }
            )
        })
    }
    //RECEBE CALORIAS DOS ITENS DO CAFE DA MANHA
    exports.getCalCafeDaManha = (req,res) => {
        mysql.getConnection((error,conn) =>{
            conn.release()
            if(error){
                return res.status(500).send({ error: error})
            }
            query = 'SELECT carb_id,database1.Carboidratos.cal as carb_cal, prot_id,database1.Proteinas.cal as prot_cal,liquid_id,database1.Liquidos.cal as liquid_cal,fruit_id,database1.Frutas.cal as fruit_cal from database1.CafeDaManha join database1.Carboidratos on carb_id = database1.Carboidratos.id join database1.Proteinas on prot_id = database1.Proteinas.id join database1.Liquidos on liquid_id = database1.Liquidos.id join database1.Frutas on fruit_id = database1.Frutas.id where email = ?';
            conn.query(
                query,[req.params.email.trim()],(error,result) =>{
                    if(error){
                        return res.status(500).send({ error: error })
                    }
                    if (result.length > 0){
                        return res.status(200).json(result)
                    }
                    else{
                        query = 'SELECT carb_id,database1.Carboidratos.cal as carb_cal, prot_id,database1.Proteinas.cal as prot_cal,liquid_id,database1.Liquidos.cal as liquid_cal from database1.CafeDaManha join database1.Carboidratos on carb_id = database1.Carboidratos.id join database1.Proteinas on prot_id = database1.Proteinas.id join database1.Liquidos on liquid_id = database1.Liquidos.id where email = ?';
                        conn.query(
                            query,[req.params.email.trim()],(error,result) =>{
                                if(error){
                                    return res.status(500).send({ error: error })
                                }
                                if (result.length > 0){
                                    return res.status(200).json(result)
                                }
                            }
                        )
                    }
                }
            )
        })
    }
    //RECEBE CALORIAS DOS ITENS DO ALMOCO
    exports.getCalAlmoco = (req,res) => {
        mysql.getConnection((error,conn) =>{
            conn.release()
            if(error){
                return res.status(500).send({ error: error})
            }
            query = 'SELECT carb_id,database1.Carboidratos.cal as carb_cal, prot_id,database1.Proteinas.cal as prot_cal,prot_id,legum_id,database1.Legumes.cal as legum_cal,liquid_id,database1.Liquidos.cal as liquid_cal,fruit_id,database1.Frutas.cal as fruit_cal from database1.Almoco join database1.Carboidratos on carb_id = database1.Carboidratos.id join database1.Proteinas on prot_id = database1.Proteinas.id join database1.Legumes on legum_id = database1.Legumes.id join database1.Liquidos on liquid_id = database1.Liquidos.id join database1.Frutas on fruit_id = database1.Frutas.id where email = ?';
            conn.query(
                query,[req.params.email.trim()],(error,result) =>{
                    if(error){
                        return res.status(500).send({ error: error })
                    }
                    if (result.length > 0){
                        return res.status(200).json(result)
                    }
                }
            )
        })
    }
    //RECEBE CALORIAS DOS ITENS DO LANCHE DA TARDE
    exports.getCalLancheTarde = (req,res) => {
        mysql.getConnection((error,conn) =>{
            conn.release()
            if(error){
                return res.status(500).send({ error: error})
            }
            query = 'SELECT carb_id,database1.Carboidratos.cal as carb_cal, prot_id,database1.Proteinas.cal as prot_cal,liquid_id,database1.Liquidos.cal as liquid_cal,fruit_id,database1.Frutas.cal as fruit_cal from database1.CafeDaManha join database1.Carboidratos on carb_id = database1.Carboidratos.id join database1.Proteinas on prot_id = database1.Proteinas.id join database1.Liquidos on liquid_id = database1.Liquidos.id join database1.Frutas on fruit_id = database1.Frutas.id where email = ?';
            conn.query(
                query,[req.params.email.trim()],(error,result) =>{
                    if(error){
                        return res.status(500).send({ error: error })
                    }
                    if (result.length > 0){
                        return res.status(200).json(result)
                    }
                    else{
                        query = 'SELECT carb_id,database1.Carboidratos.cal as carb_cal, prot_id,database1.Proteinas.cal as prot_cal,liquid_id,database1.Liquidos.cal as liquid_cal from database1.CafeDaManha join database1.Carboidratos on carb_id = database1.Carboidratos.id join database1.Proteinas on prot_id = database1.Proteinas.id join database1.Liquidos on liquid_id = database1.Liquidos.id where email = ?';
                        conn.query(
                            query,[req.params.email.trim()],(error,result) =>{
                                if(error){
                                    return res.status(500).send({ error: error })
                                }
                                if (result.length > 0){
                                    return res.status(200).json(result)
                                }
                            }
                        )
                    }
                }
            )
        })
    }
    //RECEBE CALORIAS DOS ITENS DA JANTA
    exports.getCalJanta = (req,res) => {
        mysql.getConnection((error,conn) =>{
            conn.release()
            if(error){
                return res.status(500).send({ error: error})
            }
            query = 'SELECT carb_id,database1.Carboidratos.cal as carb_cal, prot_id,database1.Proteinas.cal as prot_cal,prot_id,legum_id,database1.Legumes.cal as legum_cal,liquid_id,database1.Liquidos.cal as liquid_cal,fruit_id,database1.Frutas.cal as fruit_cal from database1.Almoco join database1.Carboidratos on carb_id = database1.Carboidratos.id join database1.Proteinas on prot_id = database1.Proteinas.id join database1.Legumes on legum_id = database1.Legumes.id join database1.Liquidos on liquid_id = database1.Liquidos.id join database1.Frutas on fruit_id = database1.Frutas.id where email = ?';
            conn.query(
                query,[req.params.email.trim()],(error,result) =>{
                    if(error){
                        return res.status(500).send({ error: error })
                    }
                    if (result.length > 0){
                        return res.status(200).json(result)
                    }
                }
            )
        })
    }



//POSTS
    //POSTA O CAFE DA MANHA ESCOLHIDO
    exports.setCafeDaManha = (req,res) => {
        mysql.getConnection((error,conn) =>{
            conn.release()
            if(error){
                return res.status(500).send({ error: error})
            }
            query = 'SELECT * FROM CafeDaManha WHERE email = ?'
            conn.query(
                query,[req.params.email.trim()],(error,result) => {
                    if(error){
                        return res.status(500).send({ error: error })
                    }
                    if(result.length>0){
                        return res.status(500).send({ msg: 'Usuário já possui esta refeição' })
                    }
                    else{
                        query = 'INSERT INTO CafeDaManha (email,carb_id,carb_qtd,prot_id,prot_qtd,legum_id,legum_qtd,liquid_id,liquid_qtd,fruit_id,fruit_qtd) VALUES (?,?,?,?,?,?,?,?,?,?,?)';
                        conn.query(
                            query,[req.params.email.trim(),req.params.id_carb,req.params.carb_qtd,req.params.id_prot,req.params.prot_qtd,req.params.id_legum,req.params.legum_qtd,req.params.id_liquid,req.params.legum_qtd,req.params.id_fruit,req.params.fruit_qtd],(error,result) =>{
                                if(error){
                                    return res.status(500).send({ error: error })
                                }
                                else{
                                    
                                }
                            }
                        )
                    }
                })
            })
    }
    //POSTA O ALMOCO ESCOLHIDO 
    exports.setAlmoco = (req,res) => {
        mysql.getConnection((error,conn) =>{
            conn.release()
            if(error){
                return res.status(500).send({ error: error})
            }
            query = 'SELECT * FROM Almoco WHERE email = ?'
            conn.query(
                query,[req.params.email.trim()],(error,result) => {
                    if(error){
                        return res.status(500).send({ error: error })
                    }
                    if(result.length>0){
                        return res.status(500).send({ msg: 'Usuário já possui esta refeição' })
                    }
                    else{
                        query = 'INSERT INTO Almoco (email,carb_id,carb_qtd,prot_id,prot_qtd,legum_id,legum_qtd,liquid_id,liquid_qtd,fruit_id,fruit_qtd) VALUES (?,?,?,?,?,?,?,?,?,?,?)';
                        conn.query(
                            query,[req.params.email.trim(),req.params.id_carb,req.params.carb_qtd,req.params.id_prot,req.params.prot_qtd,req.params.id_legum,req.params.legum_qtd,req.params.id_liquid,req.params.legum_qtd,req.params.id_fruit,req.params.fruit_qtd],(error,result) =>{
                                if(error){
                                    return res.status(500).send({ error: error })
                                }
                                else{
                                    
                                }
                            }
                        )
                    }
                })
            })
    }
    //POSTA O LANCHE DA TARDE ESCOLHIDO 
    exports.setLancheDaTarde = (req,res) => {
        mysql.getConnection((error,conn) =>{
            conn.release()
            if(error){
                return res.status(500).send({ error: error})
            }
            query = 'SELECT * FROM LancheDaTarde WHERE email = ?'
            conn.query(
                query,[req.params.email.trim()],(error,result) => {
                    if(error){
                        return res.status(500).send({ error: error })
                    }
                    if(result.length>0){
                        return res.status(500).send({ msg: 'Usuário já possui esta refeição' })
                    }
                    else{
                        query = 'INSERT INTO LancheDaTarde (email,carb_id,carb_qtd,prot_id,prot_qtd,legum_id,legum_qtd,liquid_id,liquid_qtd,fruit_id,fruit_qtd) VALUES (?,?,?,?,?,?,?,?,?,?,?)';
                        conn.query(
                            query,[req.params.email.trim(),req.params.id_carb,req.params.carb_qtd,req.params.id_prot,req.params.prot_qtd,req.params.id_legum,req.params.legum_qtd,req.params.id_liquid,req.params.legum_qtd,req.params.id_fruit,req.params.fruit_qtd],(error,result) =>{
                                if(error){
                                    return res.status(500).send({ error: error })
                                }
                                else{
                                    
                                }
                            }
                        )
                    }
                })
            })
    }
    //POSTA A JANTA
    exports.setJanta = (req,res) => {
        mysql.getConnection((error,conn) =>{
            conn.release()
            if(error){
                return res.status(500).send({ error: error})
            }
            query = 'SELECT * FROM Janta WHERE email = ?'
            conn.query(
                query,[req.params.email.trim()],(error,result) => {
                    if(error){
                        return res.status(500).send({ error: error })
                    }
                    if(result.length>0){
                        return res.status(500).send({ msg: 'Usuário já possui esta refeição' })
                    }
                    else{
                        query = 'INSERT INTO Janta (email,carb_id,carb_qtd,prot_id,prot_qtd,legum_id,legum_qtd,liquid_id,liquid_qtd,fruit_id,fruit_qtd) VALUES (?,?,?,?,?,?,?,?,?,?,?)';
                        conn.query(
                            query,[req.params.email.trim(),req.params.id_carb,req.params.carb_qtd,req.params.id_prot,req.params.prot_qtd,req.params.id_legum,req.params.legum_qtd,req.params.id_liquid,req.params.legum_qtd,req.params.id_fruit,req.params.fruit_qtd],(error,result) =>{
                                if(error){
                                    return res.status(500).send({ error: error })
                                }
                                else{
                                    
                                }
                            }
                        )
                    }
                })
            })
    }

//PATCHS
    //MUDA O CAFÉ DA MANHA
    exports.patchCafeDaManha = (req,res) => {
        mysql.getConnection((error,conn) =>{
            conn.release()
            if(error){
                return res.status(500).send({ error: error})
            }
            query = 'SELECT * FROM CafeDaManha WHERE email = ?'
            conn.query(
                query,[req.params.email.trim()],(error,result) => {
                    if(error){
                        return res.status(500).send({ error: error })
                    }
                    if(result.length<=0){
                        return res.status(500).send({ msg: 'Usuário não possui esta refeição' })
                    }
                    else{
                        query = 'UPDATE CafeDaManha SET carb_id = ?,carb_qtd =?, prot_id = ?,prot_qtd =?,legum_id = ?,legum_qtd =?,liquid_id = ?,liquid_qtd =?,fruit_id = ?,fruit_qtd =? WHERE email = ?';
                        conn.query(
                            query,[req.params.id_carb,req.params.carb_qtd,req.params.id_prot,req.params.prot_qtd,req.params.id_legum,req.params.legum_qtd,req.params.id_liquid,req.params.liquid_qtd,req.params.id_fruit,req.params.fruit_qtd,req.params.email.trim()],(error,result) =>{
                                if(error){
                                    return res.status(500).send({ error: error })
                                }
                                else{
                                    return res.status(201).send({msg: 'ok'})
                                }
                            }
                        )
                    }
                })
            })
    }
    //MUDA O ALMOÇO
    exports.patchAlmoco = (req,res) => {       
        mysql.getConnection((error,conn) =>{
            conn.release()
            if(error){
                return res.status(500).send({ error: error})
            }
            query = 'SELECT * FROM Almoco WHERE email = ?'
            conn.query(
                query,[req.params.email.trim()],(error,result) => {
                    if(error){
                        return res.status(500).send({ error: error })
                    }
                    if(result.length<=0){
                        return res.status(500).send({ msg: 'Usuário não possui esta refeição' })
                    }
                    else{
                        query = 'UPDATE Almoco SET carb_id = ?,carb_qtd =?, prot_id = ?,prot_qtd =?,legum_id = ?,legum_qtd =?,liquid_id = ?,liquid_qtd =?,fruit_id = ?,fruit_qtd =? WHERE email = ?';
                        conn.query(
                            query,[req.params.id_carb,req.params.carb_qtd,req.params.id_prot,req.params.prot_qtd,req.params.id_legum,req.params.legum_qtd,req.params.id_liquid,req.params.liquid_qtd,req.params.id_fruit,req.params.fruit_qtd,req.params.email.trim()],(error,result) =>{
                                if(error){
                                    return res.status(500).send({ error: error })
                                }
                                else{
                                    return res.status(201).send({msg: 'ok'})
                                }
                            }
                        )
                    }
                })
            })
    }
    //MUDA O LANCHE DA TARDE
    exports.patchLancheDaTarde = (req,res) => {
        
        mysql.getConnection((error,conn) =>{
            conn.release()
            if(error){
                return res.status(500).send({ error: error})
            }
            query = 'SELECT * FROM LancheDaTarde WHERE email = ?'
            conn.query(
                query,[req.params.email.trim()],(error,result) => {
                    if(error){
                        return res.status(500).send({ error: error })
                    }
                    if(result.length<=0){
                        return res.status(500).send({ msg: 'Usuário não possui esta refeição' })
                    }
                    else{
                        query = 'UPDATE LancheDaTarde SET carb_id = ?,carb_qtd =?, prot_id = ?,prot_qtd =?,legum_id = ?,legum_qtd =?,liquid_id = ?,liquid_qtd =?,fruit_id = ?,fruit_qtd =? WHERE email = ?';
                        conn.query(
                            query,[req.params.id_carb,req.params.carb_qtd,req.params.id_prot,req.params.prot_qtd,req.params.id_legum,req.params.legum_qtd,req.params.id_liquid,req.params.liquid_qtd,req.params.id_fruit,req.params.fruit_qtd,req.params.email.trim()],(error,result) =>{
                                if(error){
                                    return res.status(500).send({ error: error })
                                }
                                else{
                                    return res.status(201).send({msg: 'ok'})
                                }
                            }
                        )
                    }
                })
            })
    }
    //MUDA O LANCHE DA TARDE
    exports.patchJanta = (req,res) => {     
        mysql.getConnection((error,conn) =>{
            conn.release()
            if(error){
                return res.status(500).send({ error: error})
            }
            query = 'SELECT * FROM Janta WHERE email = ?'
            conn.query(
                query,[req.params.email.trim()],(error,result) => {
                    if(error){
                        return res.status(500).send({ error: error })
                    }
                    if(result.length<=0){
                        return res.status(500).send({ msg: 'Usuário não possui esta refeição' })
                    }
                    else{
                        query = 'UPDATE Janta SET carb_id = ?,carb_qtd =?, prot_id = ?,prot_qtd =?,legum_id = ?,legum_qtd =?,liquid_id = ?,liquid_qtd =?,fruit_id = ?,fruit_qtd =? WHERE email = ?';
                        conn.query(
                            query,[req.params.id_carb,req.params.carb_qtd,req.params.id_prot,req.params.prot_qtd,req.params.id_legum,req.params.legum_qtd,req.params.id_liquid,req.params.liquid_qtd,req.params.id_fruit,req.params.fruit_qtd,req.params.email.trim()],(error,result) =>{
                                if(error){
                                    return res.status(500).send({ error: error })
                                }
                                else{
                                    return res.status(201).send({msg: 'ok'})
                                }
                            }
                        )
                    }
                })
            })
    }
