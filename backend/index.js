import express from 'express'
import connectDB from './connectdb.js'
import web from "./web.js"
import cors from "cors"

const app = express()
app.use(cors())
const DATABASE_URL = "mongodb://localhost:27017";
connectDB(DATABASE_URL)
const port = '8088';

app.use(express.json())
app.use("/api", web)

app.listen(port, () => {
    console.log("Server is started...")
})