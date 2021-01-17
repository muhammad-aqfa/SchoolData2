const mssql=require(`mssql`);
const object={
   config={
    user:'DB_A5E748_shenkar_admin',
    password:'!@sh98746987@!',
    server:`sql5059.site4now.net`,
    database:'DB_A5E748_shenkar',
    option:{
        enableArithAbort: true
    }
},
      execSQL:(queryText,res)=> {
         mssql.connect(db.config,(err)=>{
             if(err==ture)
                 console.log(err);
             var request= new mssql.Request()
             request.query(queryText,(err,result)=>{
                 if(err==ture)
                 console.log(err);
                 mssql.close();
                 res.send(result.recordset);
             })
         })
      }
    }
module.exports=db;
