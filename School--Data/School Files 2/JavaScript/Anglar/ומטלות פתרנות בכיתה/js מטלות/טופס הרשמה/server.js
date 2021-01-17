const express=require(`express`);
const db=require(`./db`);
const PORT=process.env.PORT || 5100;
const app=express();
app.get(`/`, (req,res)=>{
    res.send(`bdresh`);
})
app.listen(PORT,()=>{
    console.log(`app started http://localhost:${PORT}`)
});