import {DataSource} from 'typeorm';
import {User} from './entity/User';
require('dotenv').config();

//Database connection
export const AppDataSource = new DataSource({
  ssl: {
    ca: process.env.SSL_CERT,
  },
  type: 'postgres',
  host: process.env.PGHOST,
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  synchronize: true,
  entities: [User],
});