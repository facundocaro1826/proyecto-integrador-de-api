const path = require('path');
const db = require('../../database/models');

const albumesAPIController = {
    'list': (req, res) => {
        db.Album.findAll({
            include: ["artistas"]
        })
        .then(albumes =>{
            res.status(200).json({
                ok: true,
                data: albumes
            }).catch(err =>{
                res.status(500).json({
                    ok: false,
                    msg: err.message
                })
            })
        })
       
    },//http://localhost:3001/api/albumes

    'detail': (req, res) => {
        db.Album.findByPk(req.params.id,
        {
            include: ["artistas"]
        })
        .then(albumes =>{
            res.status (200).json({
                ok: true,
                data: albumes
            })
        }).catch(err =>{
            res.status(500).json({
                ok: false,
                msg:err.message
            })
        })
    }//http://localhost:3001/api/albumes/3
}

module.exports = albumesAPIController;