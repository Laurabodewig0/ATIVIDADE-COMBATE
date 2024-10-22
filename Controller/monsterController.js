import Monster from '../models/modelMonster.js';

export const store = async (req, res) => {
    try {
        const monster = await Monster.create(req.body);
        return res.status(201).json(monster);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const index = async (req, res) => {
    try {
        const monster = await Monster.find().exec();
        return res.status(200).json(monster);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const update = async (req, res) => {
    try {
        const monster = await Monster.findByIdAndUpdate(req.params.id, req.body).exec();
        return res.status(200).json(monster);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const destroy = async (req, res) => {
    try {
        const monster = await Monster.findByIdAndDelete(req.params.id).exec();
        return res.status(200).json(monster);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

