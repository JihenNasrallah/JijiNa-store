import User from "../models/userModel.js";
import bcrypt from "bcrypt";

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Update a user by ID
const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
// Delete a user by ID
const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "user deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//inscription

const AddUser = async (req, res) => {
  const passwordHash = await bcrypt.hash(req.body.password, 10);

  const email = req.body.email;
  const verifyMail = await User.findOne({ email: email });

  if (verifyMail) {
    res.status("inscription", { error: "user already exist" });
  } else {
    const newUser = new User({
      name: req.body.name,
      lastName: req.body.lastName,
      email: req.body.email,
      password: passwordHash,
      phone: req.body.phone,
      adresse: req.body.adresse,
      role: req.body.role,
    });

    await newUser.save();
  }
};

//post

const successLogin = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const verifyMail = await User.findOne({ email: email });
  if (!verifyMail) {
    return res.status(500).json({ error: "User does not exist" });
  }
  const verifyPassword = await bcrypt.compare(password, verifyMail.password);
  if (!verifyPassword) {
    return res.status(500).json({ error: "wrong password" });
  }

  res.json("login success");
};

export { getAllUsers, updateUser, deleteUser, AddUser, successLogin };
