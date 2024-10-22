import { Schema, model } from 'mongoose';

const monsterSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    atkPoints: {
        type: Number,
        required: true
    },
    expPoints: {
        type: Number,
        required: true
    },
    monsterDefeat: {
        type: Boolean, 
        required: false
    }
});

export default model('Monster', monsterSchema);

