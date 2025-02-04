const { StatusCodes } = require('http-status-codes'); 

const info = (req,res)=>{
    return res.status(statu).json({
        //here it will return 500 status code at /api/v1/info
        success:true,
        message:'This is the API for the application and testing the express router',
        error:{},
        data:{}
    })
}
module.exports={
    info

}