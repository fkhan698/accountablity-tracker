import Joi from 'joi'

const userSchema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .messages({
      'string.empty': 'Email cannot be empty',
      'any.required': 'Email is required',
    }),
  password: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    .required()
    .messages({
      'string.pattern.base': 'Password should be between 3 to 30 characters and contain letters or numbers only',
      'string.empty': 'Password cannot be empty',
      'any.required': 'Password is required',
    }),
})
  .required()
  .options({ stripUnknown: true })
  .messages({
    'string.empty': 'User cannot be empty',
    'any.required': 'User is required',
  })

const validateUser = (user: any) => {
  return userSchema.validate(user)
}

export default validateUser
