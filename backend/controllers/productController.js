export const getProducts = (req, res) => {
    try {
        res.json({ message: 'Hello from getProducts' });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};