import express from 'express';
import router from './router.js';
import  bodyparser  from 'body-parser';

const app = express();
app.use(bodyparser.json());
app.use(router);

export default app;