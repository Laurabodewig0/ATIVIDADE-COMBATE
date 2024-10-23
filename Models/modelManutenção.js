import { Schema, model } from 'mongoose';

const manutençãoSchema = new Schema({
    workshop: {
        type: Schema.Types.ObjectId,
        required: true
    },
    vehicle: {
        type: Schema.Types.ObjectId,
        required: true
    },
    services: {
        type: String.Number,
        required: true
    },
    date: {
        type: Date, 
        required: true
    },
    totalCost: {
        type: Number, 
        required: true
    }
});

export default model('Manutenção', manutençãoSchema);

