import Veiculos from '../models/modelVeiculos.js';

export const store = async (req, res) => {
    try {
        const veiculos = await Veiculos.create(req.body);
        return res.status(201).json(veiculos);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const index = async (req, res) => {
    try {
        const veiculos = await Veiculos.find().exec();
        return res.status(200).json(veiculos);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const update = async (req, res) => {
    try {
        const veiculos = await Veiculos.findByIdAndUpdate(req.params.id, req.body).exec();
        return res.status(200).json(veiculos);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const destroy = async (req, res) => {
    try {
        const veiculos = await Veiculos.findByIdAndDelete(req.params.id).exec();
        return res.status(200).json(veiculos);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

