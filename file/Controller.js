const express = require('express')
const conexion = require('./database')


exports.getData = (req, res) => {
    res.send({
        data: "Prueba de conexion"
    })
}

exports.getDataID = (req, res) => {
    conexion.query("select * from javascript where id = ?", [req.params.id],
        (err, rows) => {
            if (err) throw err
            res.send(rows)
        })
}

exports.allData = (req, res) => {
    conexion.query("select j.id, j.posicion, j.tema, jt.titulo, jt.descripcion as djt, jt.codificacion as cjt, jst.subtitulo, jst.descripcion, jst.codificacion from javascript j, javascriptTitulo jt , javascriptSubtitulo jst",
        (err, rows) => {
            if (err) throw err
            res.send(rows)
        })
}

exports.setData = (req, res) => {
    let data = {
        tema: req.body.tema,
        codigo: req.body.codigo,
        titulo: req.body.titulo,
        subTitulo: req.body.subTitulo,
        descripcion: req.body.descripcion,
    }
    let sql = "insert into contenido set ?"
    conexion.query(sql, data, (err, rows) => {
        if (err) throw err
        res.send(rows)
    })
}
exports.putData = (req, res) => {
    let id = req.params.id
    let sql = "update usuarios set id = ?"

    //let descripcion = req.body.descripcion
    //let sql2 = 'update usuarios set id = ?, descripcion = ?'
    //conexion.query(sql, [id, descripcion], (err, rows) => {

    conexion.query(sql, [id], (err, rows) => {
        if (err) throw err
        res.send(rows)
    })

}
exports.deleteData = (req, res) => {
    conexion.query(
        "delete from usuarios where id = ?",
        [req.params.id],
        (err, rows) => {
            if (err) throw err
            res.send(rows)
        }
    )
}

