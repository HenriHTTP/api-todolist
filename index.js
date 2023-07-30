const Express = require('express');
const app  =  Express();
const port =  require('./configs/config');
const Routes =  require ('./routes/router');
const  Cors = require('cors');


app.use(Express.json());
app.use(Cors())

app.use('/',Routes)

app.listen (port, ()=>{
    console.log(`server online in port${port}`)
});