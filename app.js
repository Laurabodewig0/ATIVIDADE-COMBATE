import express from 'express'
import connectDB from './config/db.js'
import routerCombat from './routers/routerCombat.js';
import routerHero from './routers/routerHero.js';
import routerMonster from './routers/routerMonster.js';


connectDB();


const app = express();
app.use(express.json());


app.use('/combat', routerCombat);
app.use('/hero', routerHero);
app.use('/monster', routerMonster);


app.listen(3000, () => console.log('Server running on port 3000'));

