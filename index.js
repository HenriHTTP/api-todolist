const Express = require('express');
const app  =  Express();
const port =  process.env.PORT || 3000
const Routes =  require ('./routes/router');
const  Cors = require('cors');


app.use(Express.json());
app.use(Cors())

app.use('/',Routes)

app.listen (port, ()=>{
    console.log(`server online in port${port}`)
});