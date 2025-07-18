const express = require ('express')
const app = express()
const PORT = process.env.PORT || 3006

app.get("/",(req,res)=>{
    res.send("welcome to the page and test")
})
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})