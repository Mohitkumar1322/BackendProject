const info = (req,res)=>{
    return res.json({
        success:true,
        message:'This is the API for the application and testing the express router',
        error:{},
        data:{}
    })
}
module.exports={
    info

}