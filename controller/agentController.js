const {Agent} = require('../model/userShema')

const agenController = async(req,res)=>{
    const {name,agent} = req.body
    console.log(name,agent)
    try {
        const agentObj ={
            name,
            agent
        }

        const newAgent = await Agent.create(agentObj)
        res.status(200).json({
            status:'success',
            data:[
                newAgent
            ]
        })
    } catch (error) {
        console.log(error)
        res.status(401).json({
            message:'success',
            data:error

        })
    }
}

module.exports = {
    agenController
}