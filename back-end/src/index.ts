/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { createConnection, getConnectionOptions } from 'typeorm';
import app from './app';

createConnection();

// getConnectionOptions().then((options) => {
//   console.log(options);
// });

// console.log(process.env.JWT_SECRET_KEY);

app.listen(3333, () => {
  console.log('🚀 Server runing on http://localhost:3333/');
});
