import { Schema, model } from 'mongoose'; 


const heroSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    atkPoints: {
        type: Number,
        required: true
    },
    expPoints: {
        type: Number.default,
        required: true
    },
    monsterDefeat: {
        type: Schema.Types.ObjectId, 
        required: true
    }
  
});

export default model('Hero', heroSchema);