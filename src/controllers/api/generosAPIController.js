const path = require('path');
const db = require('../../database/models');

const genresAPIController = {
    'list': (req, res) => {
       db.Genero.findAll({})
       .then(generos =>{
        res.status(200).json({
            ok: true,
            data: generos
        }).catch(err =>{
            res.status(500).json({
                ok: false,
                msg: err.message
            })
        })
       })
    }
}
module.exports = genresAPIController;