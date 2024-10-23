import express from 'express'
import connectDB from './config/db.js'
import routerOficina from './routers/routerOficina.js';
import routerVeiculos from './routers/routerVeiculos.js';
import routerManutenção from './routers/routerManutenção.js';


connectDB();


const app = express();
app.use(express.json());


app.use('/oficina', routerOficina);
app.use('/veiculos', routerVeiculos);
app.use('/manutenção', routerManutenção);


app.listen(3000, () => console.log('Server running on port 3000'));

