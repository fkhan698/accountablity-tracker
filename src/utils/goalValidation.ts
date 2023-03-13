import Joi from 'joi'

const goalSchema = Joi.object({
  title: Joi.string().required().messages({
    'string.empty': 'Title cannot be empty',
    'any.required': 'Title is required',
  }),
  description: Joi.string().required().messages({
    'string.empty': 'Description cannot be empty',
    'any.required': 'Description is required',
  }),
  deadline: Joi.date().required().messages({
    'string.empty': 'Deadline cannot be empty',
    'any.required': 'Deadline is required',
  }),
  recipientEmail: Joi.string().required().messages({
    'string.empty': 'Recipient cannot be empty',
    'any.required': 'Recipient is required',
  }),
  completed: Joi.boolean().default(false),
})
  .required()
  .options({ stripUnknown: true })
  .messages({
    'string.empty': 'Goal cannot be empty',
    'any.required': 'Goal is required',
  })

const validateGoal = (goal: any) => {
  return goalSchema.validate(goal)
}

export default validateGoal
