const express= require('express');
const app = express();
const control= require('./routes/control');
const identificacion= require('./routes/identificacion');
const recordatario= require('./routes/recordatorio');

app.set('port',3000)
app.use(express.json());
app.use('/api/control',control);
app.use('/api/identificacion',identificacion);
app.use('/api/recordatorio',recordatorio);


app.listen(app.get('port'),()=>{
    console.log(`Servidor corriendo en puerto  ${app.get('port')}`)
}) 