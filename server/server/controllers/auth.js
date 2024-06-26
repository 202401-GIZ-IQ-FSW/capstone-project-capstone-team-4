const User = require("../models/user");

// Render Signin Page
exports.getSignIn = (req, res) => {
  res.render("signin");
};

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
          .render("signin", { errorMessage: "Invalid email or password." });
      }
      req.session.user = user;
      req.session.user_id = user.id;
      console.log(req.session.user_id);
      res.redirect("/user/home");
    } else {
      return res
        .status(400)
        .render("signin", { errorMessage: "Invalid email or password." });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getRegisterUser = (req, res) => {
  res.render("register");
};

exports.postRegisterUser = async (req, res) => {
  let { name, email, password, confirmPassword } = req.body;

  try {
    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .render("register", { errorMessage: "Email already exists." });
    }
    if (password !== confirmPassword) {
      return res
        .status(400)
        .render("register", {
          errorMessage: "Password confirmation does not match.",
        });
    }
    email = email.toLowerCase();
    const newUser = await User.create({ name, email, password });
    return res.status(201).render("signin");
  } catch (error) {
    return res.status(400).render("register", { errorMessage: error.message });
  }
};

// Handling Signout
exports.getSignOut = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.redirect("/signin");
  });
};
