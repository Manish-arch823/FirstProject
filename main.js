const express =require("express")

const app =express()

app.get('/',(req,res)=>{
    res.send("Hello Server Manish")
})

const POST = 3000

app.listen(POST ,()=>{
    console.log(`Server Running on PORT ${POST}`)
})
