const express = require('express');
const router = express.Router();
const donor = require('../Models/DonorModel');

//Inserting(Creating) Data:
router.post("/insertdonor", async (req, res) => {
    const { Date, Donor, BloodGroup, Volume } = req.body;

    try {
        const pre = await donor.findOne({ Donor: Donor })
        console.log(pre);

        if (pre) {
            res.status(422).json("Product is already added.")
        }
        else {
            const addDonor = new donor({ Date, Donor, BloodGroup, Volume })

            await addDonor.save();
            res.status(201).json(addDonor)
            console.log(addDonor)
        }
    }
    catch (err) {
        console.log(err)
    }
})
/*
//Getting(Reading) Data:
router.get('/products', async (req, res) => {

    try {
        const getProducts = await products.find({})
        console.log(getProducts);
        res.status(201).json(getProducts);
    }
    catch (err) {
        console.log(err);
    }
})

//Getting(Reading) individual Data:
router.get('/products/:id', async (req, res) => {

    try {
        const getProduct = await products.findById(req.params.id);
        console.log(getProduct);
        res.status(201).json(getProduct);
    }
    catch (err) {
        console.log(err);
    }
})

//Editing(Updating) Data:
router.patch('/updateproduct/:id', async (req, res) => {
    const { ProductName, ProductPrice, ProductBarcode } = req.body;

    try {
        const updateProducts = await products.findByIdAndUpdate(req.params.id, { ProductName, ProductPrice, ProductBarcode }, { new: true });
        console.log("Data Updated");
        res.status(201).json(updateProducts);
    }
    catch (err) {
        console.log(err);
    }
})

//Deleting Data:
router.delete('/deleteproduct/:id', async (req, res) => {

    try {
        const deleteProduct = await products.findByIdAndDelete(req.params.id);
        console.log("Data Deleted");
        res.status(201).json(deleteProduct);
    }
    catch (err) {
        console.log(err);
    }

    
})*/


module.exports = router;