let ContactModel = require('../models/contacts');

//add new contact
module.exports.create = async function (req, res, next) {
  try {
    let newcontact = new ContactModel(req.body);

    let result = await ContactModel.create(newcontact);
    console.log(result);

    res.json(
      {
        success: true,
        message: "contact created successfully."
      }
    );
  } catch (error) {
    console.log(error);
    next(error);
  }
}
//get all contacts
module.exports.list = async function (req, res, next) {
  try {
    let contacts = await ContactModel.find({});
    res.json({
        success: true,
        data: contacts
      });
  } catch (error) {
      console.log(error);
      next(error);
    }
  }
//get contacts by id
module.exports.contactGet = async function (req, res, next) {
  try {
      let uID = req.params.contactID;
      req.contact = await ContactModel.findOne({ _id: uID });
      next();
  } catch (error) {
      console.log(error);
      next(error);
  }
}
module.exports.contactByID = async function (req, res, next) {
    res.json(req.contact);
}

//update contact by id
module.exports.update = async function (req, res, next) {
  try {
      let uID = req.params.contactID;
      let updatecontact = new ContactModel(req.body);
      updatecontact._id = uID;
      let result = await ContactModel.updateOne({ _id: uID }, updatecontact);
      console.log(result);
      if (result.modifiedCount > 0) {
          res.json(
              {
                  success: true,
                  message: 'Contact updated successfully.'
              }
          );
      } else {
          throw new Error('Contact not updated. Are you sure it exists?')
      }
  } catch (error) {
      console.log(error);
      next(error);
  }
}

//remove contact by id
module.exports.remove = async function (req, res, next) {
  try {
      let uID = req.params.contactID;

      let result = await ContactModel.deleteOne({ _id: uID });
      console.log(result);
      if (result.deletedCount > 0) {
          res.json(
              {
                  success: true,
                  message: 'Contact deleted successfully.'
              }
          );
      } else {
          throw new Error('Contact not deleted. Are you sure it exists?')
      }
  } catch (error) {
      console.log(error);
      next(error);
  }
}
