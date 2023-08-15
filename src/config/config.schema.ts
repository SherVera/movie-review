import * as Joi from 'joi';

const configSchema = Joi.object({
  DATABASE_TYPE: Joi.string().required(),
  DATABASE_DB: Joi.string().required(),
  DATABASE_PORT: Joi.number().required(),
  DATABASE_USER: Joi.string().required(),
  DATABASE_PASSWORD: Joi.string().required(),
  DATABASE_HOST: Joi.string().hostname().required(),
  API_URL: Joi.string().required(),
  AUTHORIZATION_API_KEY: Joi.string().required(),
});

export default configSchema;
