const User = require('../models/User');

const { hashPassword } = require('../helpers/auth')

const createUser = async (req, res) => {
  const userData = req.body;
  const password: string = userData.password;

  userData.password = hashPassword(password);

  const createUser = new User(userData);

  try {
    const userCreated = await userData.save();
    return res.status(200).json({ message: "User created" })
  } catch (e) {
    return res.status(400).json({ message: "Registration error" })
  }
  
}

export default {
  createUser
}