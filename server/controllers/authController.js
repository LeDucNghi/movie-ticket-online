const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.signin = async (req, res) => {
  const { name, pwd } = req.body;

  if (!name || !pwd)
    return res
      .status(401)
      .send({ message: "Username and password are required." });

  const user = await User.findOne({ username: name });

  if (!user)
    return res.status(401).send({ message: "Can not find your account!" });

  bcrypt.compare(pwd, user.password).then((match) => {
    if (!match) return res.send({ message: "Username or password is wrong🤔" });

    const tokenPayload = {
      username: user.username,
    };
  });
};

exports.signup = async (req, res) => {
  const { user, pwd } = req.body;

  if (!user || !pwd)
    return res
      .status(400)
      .json({ message: "Username and password are required." });

  const duplicate = await User.findOne({ username: user }).exec();

  if (duplicate) return res.sendStatus(409);

  try {
    const hashedPwd = await bcrypt.hash(pwd, 10);

    const result = await User.create({
      username: user,
      password: hashedPwd,
    });

    console.log(result);

    res.status(201).json({ success: `User ${user} was created ` });
  } catch (error) {
    console.log(
      "🚀 ~ file: authController.js:23 ~ exports.register= ~ error:",
      error
    );
  }
};
