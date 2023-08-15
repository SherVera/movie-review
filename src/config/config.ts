import { registerAs } from '@nestjs/config';
export default registerAs('config', () => {
  return {
    db_type: process.env.DATABASE_TYPE,
    db_name: process.env.DATABASE_DB,
    db_user: process.env.DATABASE_USER,
    db_password: process.env.DATABASE_PASSWORD,
    db_host: process.env.DATABASE_HOST,
    db_port: parseInt(process.env.DATABASE_PORT, 5434),
    api_url: process.env.API_URL,
    api_authorization: process.env.AUTHORIZATION_API_KEY,
  };
});
