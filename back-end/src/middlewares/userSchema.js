const Joi = require('joi');

const userSchema = Joi.object({
  name: Joi.string()
        .min(12)
        .max(100)
        .required(),

  password: Joi.string()
        .alphanum()
        .min(6)
        .max(30)
        .required(),

  email: Joi.string()
        .email()
        .required(),
}).required().messages({
  'string.empty': 'The field {#label} cannot be empty',
  'string.min': 'The field {#label} has to have at least {#limit} characters',
  'string.max': 'The field {#label} has to have maximum {#limit} characters',
  'string.email': 'Invalid email!',
  'any.required': 'The field {#label} is required',
});

module.exports = userSchema;
