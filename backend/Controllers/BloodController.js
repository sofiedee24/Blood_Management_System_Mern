const Blood = require("../Models/DonorModel");

const blood_create_post = (req, res) => { 
    let blood = new Blood(req.body);
    blood
        .save()
        .then((blood) => { 
            res.send(blood);
        })
        .catch(function (err) {
            res.status(422).send("Crud add failed");

        });
    };

    module.exports = { 
        blood_create_post,
    };