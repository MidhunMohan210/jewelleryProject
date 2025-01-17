import express from 'express'
import userRoute from './routes/userRoute.js'
import adminRoute from './routes/adminRoute.js'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

dotenv.config()
const port = process.env.port||7008

const app =express()

connectDB()


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/admin',adminRoute)
app.use('/user',userRoute)


app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})