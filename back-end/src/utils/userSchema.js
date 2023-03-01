const Joi = require('joi');

const userSchema = Joi.object({
  name: Joi.string()
        .min(12)
        .required(),

  password: Joi.string()
        .min(6)
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
