let UserModel = require('../models/users');

//add new user
module.exports.create = async function (req, res, next) {
  try {
    let newUser = new UserModel(req.body);

    let result = await UserModel.create(newUser);
    console.log(result);

    res.json(
      {
        success: true,
        message: "User created successfully."
      }
    );
  } catch (error) {
    console.log(error);
    next(error);
  }
}

//get all users
module.exports.list = async function (req, res, next) {
  try {
    let users = await UserModel.find({});
    res.json({
        success: true,
        data: users
      });
  } catch (error) {
      console.log(error);
      next(error);
    }
  }
//get users by id
module.exports.userGet = async function (req, res, next) {
  try {
      let uID = req.params.userID;
      req.user = await UserModel.findOne({ _id: uID });
      next();
  } catch (error) {
      console.log(error);
      next(error);
  }
}
module.exports.userByID = async function (req, res, next) {
    res.json(req.user);
}

//update user by id
module.exports.update = async function (req, res, next) {
  try {
      let uID = req.params.userID;
      let updateUser = new UserModel(req.body);
      updateUser._id = uID;
      let result = await UserModel.updateOne({ _id: uID }, updateUser);
      console.log(result);
      if (result.modifiedCount > 0) {
          res.json(
              {
                  success: true,
                  message: 'User updated successfully.'
              }
          );
      } else {
          throw new Error('User not updated. Are you sure it exists?')
      }
  } catch (error) {
      console.log(error);
      next(error);
  }
}

//remove user by id
module.exports.remove = async function (req, res, next) {
  try {
      let uID = req.params.userID;

      let result = await UserModel.deleteOne({ _id: uID });
      console.log(result);
      if (result.deletedCount > 0) {
          res.json(
              {
                  success: true,
                  message: 'User deleted successfully.'
              }
          );
      } else {
          throw new Error('User not deleted. Are you sure it exists?')
      }
  } catch (error) {
      console.log(error);
      next(error);
  }
}
