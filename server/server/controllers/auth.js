const User = require("../models/user");



// Signin logic, need 2 work on validation later
exports.postSignIn = async (req, res) => {
  let { email, password } = req.body;
  email = email.toLowerCase();
  try {
    const user = await User.findOne({ email });
    if (user) {
      const isMatch = await user.comparePassword(password);
      if (!isMatch) {
        return res
          .status(400)
          .json({ errorMessage: "Invalid email or password." });
      }
      req.session.user = user;
      req.session.user_id = user.id;
      console.log(req.session.user_id);
      return res
      .status(200)
      .json({ message: "logged in" });
    } else {
      return res
        .status(400)
        .json({ errorMessage: "Invalid email or password." });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};


exports.postRegisterUser = async (req, res) => {
  let { name, email, password, confirmPassword } = req.body;

  try {
    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ errorMessage: "Email already exists." });
    }
    if (password !== confirmPassword) {
      return res
        .status(400)
        .json({
          errorMessage: "Password confirmation does not match.",
        });
    }
    email = email.toLowerCase();
    const newUser = await User.create({ name, email, password });
    return res.status(201).json({message:"registered"});
  } catch (error) {
    return res.status(400).json({ errorMessage: error.message });
  }
};

// Handling Signout
exports.getSignOut = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    return res.status(200).json({message:"signed out"});

  });
};
