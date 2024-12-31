const express=require("express")
const app=express()

const PORT=process.env.PORT||1111

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})