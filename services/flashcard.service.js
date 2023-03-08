// const { Flash_Card } = require("../models/Flash_Card");
const pool = require("../config/database");

// async function flashcardgetone(req,callback){

//     const vwhere = {
//         where:{
//             lineno: "1"
//         }
//     };

//     vwhere.where.lineno = req;

//     let result = await Flash_Card.findOne(vwhere).catch(err =>{
//         return err;
//     })
//     console.log(result);
//     return callback(result);

// }

// module.exports = {
//     flashcardgetone
// }

 async function getby(req,callback){

    console.log(req);

    pool.query("select * from Flash_Card where lineno = ?", [req],
         (error, result) => {
             if (error) {
                 callback(error);
             }
             console.log(result);
             return callback(null, result[0]);
         })
}

async function getcount(callback){


    pool.query("SELECT COUNT(*) as count FROM Flash_Card",
         (error, result) => {
             if (error) {
                 callback(error);
             }
             let cnt = result[0].count;
             console.log(result[0].count);
             return callback(null,cnt);
         })
}

module.exports = {
    getby,
    getcount
}
