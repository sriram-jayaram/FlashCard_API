const flcrdsrv = require("../services/flashcard.service");

// async function flcrdcon(req ,res){

// try{
//     const linno = req.Body;
//     console.log(linno);
//     const data = await flcrdsrv.flashcardgetone(linno.lineno);
//     res.send(data);
// }
// catch(error){
//     console.log(error);

//         res.json({
//             message:"fail"
//         })
// }

// }

function flcrdcon(req,res){

    const lino = req.params.lineno;
    console.log(lino);
    flcrdsrv.getby(lino,(err,result)=>{
         if(err){
            console.log(err);
            return err;

         }
         if(!result){
            return res.json({
                success: 0,
                message: "Record not Found"
            });
         }
         return res.json({
            success:1,
            data: result
         })
    })


}

function flcrdcount(req,res){

    flcrdsrv.getcount((err,result)=>{
         if(err){
            console.log(err);
            return err;

         }
         if(!result){
            return res.json({
                success: 0,
                message: "Record not Found"
            });
         }
         return res.json({
            success:1,
            data: result
         })
    })


}

module.exports = {
    flcrdcon,
    flcrdcount
}