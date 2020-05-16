const { Router } = require("express");
const router = Router();
const User = require("./user");

const createNewUser = async (req, res) => {
  const { nombre, apellido } = req.body;
  const newUser = await User.create({ nombre, apellido });
  console.log(newUser);
  res.json(newUser);
};

const getAllUsers = async (req, res) => {
  const users = await User.find({});
  console.log(users);
  res.json(users);
};

router.route("/").post(createNewUser).get(getAllUsers);

module.exports = router;
