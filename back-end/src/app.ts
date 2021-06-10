/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import express from 'express';
import routes from './routes';

// var express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

export default app;
