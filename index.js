
import path from 'path' 
import express from 'express';
import router from "./routes/routes.js";

const app = express();
const PORT = 8000;
app.set('view engine', 'ejs');
app.set("views" , path.resolve('./views'))

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));


app.use('/public', express.static(path.resolve('./public')));
app.use('/' , router)



app.listen(PORT , ()=>{
    console.log(`server started on port ${PORT}`)
})