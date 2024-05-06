const path = require('path');
const db = require('../../database/models');

const cancionesAPIController = {
    'list': (req, res) => {
        db.Cancion.findAll({
            include: [{
                association: "genero",
                attributes: ["nombre"]
            },{
                association: "medio",
                attributes: ["nombre"] 
            }
        ],
            
        })
        .then(canciones =>{
            res.status(200).json({
                ok: true,
                data: canciones
            })
        }).catch(err =>  {
            res.status(500).json({
                ok: false,
                msg: err.message
            })
        })
        //return res.send('Devuelve la información de todas las canciones resgitradas en nuestra plataforma, tomando en cuenta las asociaciones de estas con el genero y el tipo de medio utilizado.');
    }
}
module.exports = cancionesAPIController;