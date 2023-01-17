import express from 'express';

const app=express()

app.get('/',(req,res)=>{
    res.send("Bienvenu Malo dev")
 })

app.listen(2000,(error)=>{
    if (!error) {
        console.log("Server lancer au port 2000")
    }
})