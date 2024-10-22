import mongoose from 'mongoose';


const connectDB = async () => {
    mongoose
        .connect('mongodb://localhost:27017/combate') 
        .then(() => console.log('Connected to MongoDB')) 
        .catch((error) => console.log(error)); 
};

export default connectDB;