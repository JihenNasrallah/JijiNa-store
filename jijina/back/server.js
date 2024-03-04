import express from "express";
import bodyParser from "body-parser";
import cors from 'cors'
import articleRoutes from "./routes/articleRoutes.js";
import userRoutes from "./routes/userRoutes.js"
import categoryRoutes from "./routes/categoryRoutes.js"
import dbConnect from "./config/dbConfig.js";

const app = express();
const port = 3001;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(express.static('public'))
app.use("/user",userRoutes)
app.use("/article",articleRoutes)
app.use("/category",categoryRoutes)


dbConnect().then(() => {
    app.listen(port, () => {
        console.log(`http://localhost:${port}`);
    })
})
