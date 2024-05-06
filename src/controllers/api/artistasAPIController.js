const path = require('path');
const db = require('../../database/models');
const { where } = require('sequelize');

const artistasAPIController = {
    'list': (req, res) => {
        db.Artista.findAll({})
        .then(artistas =>{
            res.status (200).json({
                ok: true,
                data: artistas
            })
        }).catch(err =>{
            res.status(500).json({
                ok: false,
                msg:err.message
            })
        })
       //http://localhost:3001/api/artistas      (get)
    },
    create: (req,res) => {
        let {nombre} = req.body
        db.Artista.create({
            nombre
        })
        .then(()=>{
            res.status(201).json({
                ok: true,
                msg: "Artista creado"
            })
        })
        .catch((err)=>{
            res.status(500).json({
                ok: false,
                msg: err.message
            })
        })
        //http://localhost:3001/api/artistas/create  (post)
    },
    update: (req,res) => {
        let {nombre} = req.body
       
        let id = req.params.id
        db.Artista.update({
            nombre
        },
        {
            where: {id}
        }
    ).then(()=>{
        res.status(200).json({
            ok: true,
            msg: "Artista editado"
        })
    })
    .catch((err)=>{
        res.status(500).json({
            ok: false,
            msg: err.message
        })
    })    //    http://localhost:3001/api/artistas/update/275   (put)
        //return res.send('Puedes modifcar el nombre del artista en nuestra base de datos. Para porder utilizar esta API, debes ejecutar la ruta /artistas/update/id desde la plataforma POSTMAN');
    },
    destroy: (req,res) => {
        const destroyId = req.params.id
        db.Artista.destroy({
            where: { id:destroyId }
        }).then(()=>{
            res.status(200).json({
                ok: true,
                msg: "Producto editado con exito"
            })
        }) .catch((err)=>{
            res.status(500).json({
                ok: false,
                msg: err.message
            })
        })       //    http://localhost:3001/api/artistas/delete/276
        //return res.send('Puedes eliminar un artista a nuestra base de datos. Para porder utilizar esta API, debes ejecutar la ruta /artistas/delete/id desde la plataforma POSTMAN');
    }
}
module.exports = artistasAPIController;