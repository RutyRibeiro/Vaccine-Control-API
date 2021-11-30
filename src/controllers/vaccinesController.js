const { sync } = require("../models/vaccine");
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

const getAllVaccines = async (req, res) =>{
    try{
        const vaccines = await Vaccines.findAll()
        
        vaccines && vaccines.length > 0 ? res.status(200).send(vaccines) : res.status(204).send()

    }catch(error){
        console.log(error)
        res.status(500).send({
            message: error.message
        })
    }
};

const getOneVaccine = async (req,res) => {
    const id = req.params.id
    try{
        const vaccine = await Vaccines.findAll({where:{id}})

        vaccine && vaccine.length > 0 ? res.status(200).send(vaccine) : res.status(404).send({message:`Vacina com ID ${id} não encontrada`})
        
    }catch(error){
        res.status(500).send({message: error.message}) 
    }
}

module.exports = {
    createVaccine,
    getAllVaccines,
    getOneVaccine
}