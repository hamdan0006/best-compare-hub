const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const token = req.header("Authorization");

    if (!token) {
        return res.status(401).json({ message: "Access Denied: No token provided" });
    }

    try {
        const decoded = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET_KEY);
        
        req.user = decoded; // Attach user info to request

        next();
    } catch (error) {
        res.status(403).json({ message: "Invalid or expired token" });
    }
};

const adminMiddleware = (req, res, next) => {
    if (!req.user || !req.user.isAdmin) { // Change "isadmin" to "isAdmin"
        return res.status(403).json({ message: "Access Denied:" });
    }
    next();
};

module.exports = { authMiddleware, adminMiddleware };
