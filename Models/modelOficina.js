import { Schema, model } from 'mongoose'; 

const oficinaSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    specialties:{
        type: String,
        required: true
    }
});


export default model('Oficina', oficinaSchema);

