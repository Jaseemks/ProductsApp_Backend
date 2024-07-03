require('dotenv').config();

const express = require('express');
const router = require('./router');
const morgan = require('morgan')
const app = new express();


require('./db')

const cors = require('cors')
const PORT = process.env.PORT || 4568;

app.use(cors({
    origin:'*'
}));
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'))
app.use('/',router)

app.listen(PORT,()=>{

console.log("Running on port :"+PORT);

})