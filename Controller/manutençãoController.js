import Manutenção from '../models/modelManutenção.js';

export const store = async (req, res) => {
    try {
        const manutenção = await Manutenção.create(req.body);
        return res.status(201).json(manutenção);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const index = async (req, res) => {
    try {
        const manutenção = await Manutenção.find().exec();
        return res.status(200).json(manutenção);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const update = async (req, res) => {
    try {
        const manutenção = await Manutenção.findByIdAndUpdate(req.params.id, req.body).exec();
        return res.status(200).json(manutenção);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const destroy = async (req, res) => {
    try {
        const manutenção = await Manutenção.findByIdAndDelete(req.params.id).exec();
        return res.status(200).json(manutenção);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

