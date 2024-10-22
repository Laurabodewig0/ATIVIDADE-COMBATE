import Hero from '../models/modelHero.js';

export const store = async (req, res) => {
    try {
        const hero = await Hero.create(req.body);
        return res.status(201).json(hero);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const index = async (req, res) => {
    try {
        const hero = await Hero.find().exec();
        return res.status(200).json(hero);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const update = async (req, res) => {
    try {
        const hero = await Hero.findByIdAndUpdate(req.params.id, req.body).exec();
        return res.status(200).json(hero);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const destroy = async (req, res) => {
    try {
        const hero = await Hero.findByIdAndDelete(req.params.id).exec();
        return res.status(200).json(hero);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

