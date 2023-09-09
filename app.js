const express =require('express')
const bodyParser = require('body-parser');

const app =express();
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.set('view engine', 'ejs')

app.use('/',require('./routers/index'))

app.listen(3000)