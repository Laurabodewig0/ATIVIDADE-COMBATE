import { Schema, model } from 'mongoose'; 

const combatSchema = new Schema({
    hero: {
        type: Schema.Types.ObjectId,
        required: true
    },
    monster:{
        type: Schema.Types.ObjectId,
        required: true
    }
});


export default model('Combat', combatSchema);

