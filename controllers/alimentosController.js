const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;

exports.getAlimentos = (req,res) =>{
    if((req.params.table) == 'Usuarios'){
        req.params.table+='A'
    }
    mysql.getConnection((error,conn) =>{
        if (error){
            return res.status(500).send({ error: error })
        }
        const query = `SELECT * FROM database1.${req.params.table}`;
        conn.query(
            query,(error,result,field) =>{
                conn.release()
                if (error){
                    return res.status(500).send({ error: error })
                }
                return res.status(200).json(result)
            }
        )
    })
}