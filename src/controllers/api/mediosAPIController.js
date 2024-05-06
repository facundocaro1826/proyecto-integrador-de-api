const path = require('path');
const db = require('../../database/models');

const mediosAPIController = {
    'list': (req, res) => {
        db.Medio.findAll({})
        .then(medios =>{
            res.status(200).json({
                ok: true,
                date: medios
            }).catch(err =>{
                res.status(500).json({
                    ok: false,
                    msg: err.message
                })
            })
        })// http://localhost:3001/api/medios
    }
}
module.exports = mediosAPIController;