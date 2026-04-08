const { db } = require("../config/firebase");

const registerUser = async (req, res) => {
  try {
    const { name, email, role } = req.body;

    const userRef = await db.collection("users").add({
      name,
      email,
      role,
    });

    res.status(201).json({
      message: "User Registered Successfully",
      id: userRef.id,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { registerUser };