const Vaccines = require("../models/vaccine");

const createVaccine = async (req,res)=>{
    const { name, expected_date, vaccinated } = req.body

    try{
        const vaccine = await Vaccines.create({
            name,
            expected_date,
            vaccinated
        });

        res.status(201).send(vaccine);
        console.log(`vacina contra ${name} criada!`);
    }catch(error){
        res.status(500).send({
            message: error.message
        })
    }
};

module.exports = {
    createVaccine,
}