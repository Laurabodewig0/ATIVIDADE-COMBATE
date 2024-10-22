import Combat from '../models/modelCombat.js';

export const store = async (req, res) => {
    try {
        const combat = await Combat.create(req.body);
        return res.status(201).json(combat);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};