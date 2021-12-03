const Vaccines = require("../models/vaccine");

const createVaccine = async (req,res)=>{
    const { name, expected_date, vaccinated } = req.body
    console.log(expected_date)

    try{
        const vaccine = await Vaccines.create({
            name,
            expected_date,
            vaccinated
        });

        res.status(201).send(vaccine);
        console.log(`vacina contra ${name} cadastrada!`);
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

const deleteAll = async (req,res) => {
    // const id = req.params.id
    try{
        deletedRows = await Vaccines.destroy({where:{}, truncate: false})
        console.log(deletedRows)
        deletedRows && deletedRows > 0 ? 
        res.status(200).send({message:`${deletedRows} vacinas deletadas`}) 
        : res.status(404).send({message:`Não foram encontradas vacinas para deletar `})
        
    }catch(error){
        res.status(500).send({message: error.message}) 
    }

}

const deleteOne = async (req,res) => {
    const id = req.params.id
    try{
        deletedRows = await Vaccines.destroy({where:{id}})
        console.log(deletedRows)
        deletedRows && deletedRows > 0 ? 
        res.status(200).send({message:`${deletedRows} vacina deletada`}) 
        : res.status(404).send({message:`A vacina de id ${id} não foi encontrada deletar `})
        
    }catch(error){
        res.status(500).send({message: error.message}) 
    }

}
const setVaccinated = async (req,res) => {
    const id = req.params.id
    try{
        const vaccine = await Vaccines.update({vaccinated: true}, {where: {id}})

        vaccine && vaccine[0] > 0 ? res.status(200).send({message: "Vacina marcada como aplicada!"}) : res.status(404).send({message:`Vacina com ID ${id} não encontrada para alterar status`})
        
    }catch(error){
        res.status(500).send({message: 'Error'}) 
    }
}

module.exports = {
    createVaccine,
    getAllVaccines,
    getOneVaccine,
    setVaccinated,
    deleteAll,
    deleteOne
}