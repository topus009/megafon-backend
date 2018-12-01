const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  fio: String,
  mainPhone: String,
  workPhone: String,
  email: String,
  dateOfBirth: String,
  address: String,
  vk: String,
  comments: String
});

const Contact = mongoose.model('contact', ContactSchema);

module.exports = Contact;
