const { db } = require("../config/firebase");

const getFarmers = async (req, res) => {
  try {
    const snapshot = await db.collection("users")
      .where("role", "==", "farmer")
      .get();

    const farmers = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    res.status(200).json(farmers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getFarmers };