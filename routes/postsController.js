const express = require('express');
const router = express.Router();
const ObjectID = require('mongoose').Types.ObjectId

const { PostModel } = require('../models/postsModel');

// GET récupération des données
router.get('/', (req, res) => {
    PostModel.find((err, docs) => {
        if (!err) res.send(docs);
        else console.log("Erreur pour récupérer les données : " + err)
    })
});

//POST création des données
router.post('/', (req, res) => {
    console.log(req.body);
    const newRecord = new PostModel({
        titre: req.body.titre,
        description: req.body.description
    });

    newRecord.save((err, docs) => {
        if (!err) res.send(docs);
        else console.log('erreur pour créer la donnée' + err);
    })
})

//PUT modifier, mise à jour des données
router.put("/:id", (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send("ID unknow : " + req.params.id)

    const updateRecord = {
        titre: req.body.titre,
        description: req.body.description
    };

    PostModel.findByIdAndUpdate(
        req.params.id,
        { $set: updateRecord },
        { new: true },
        (err, docs) => {
            if (!err) res.send(docs)
            else console.log("erreur de modification" + err);
        }
    )
})

//DELETE pour supprimer les données :
router.delete("/:id", (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send("ID unknown : " + req.params.id)

    PostModel.findByIdAndDelete(
        req.params.id,
        (err, docs) => {
            if (!err) res.send(docs);
            else console.log("erreur de suppression" + err);
        }
    )
})



module.exports = router;