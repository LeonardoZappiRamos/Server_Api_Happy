import Express from 'express';
import cors from 'cors';
import Path from 'path';

import routes from './routes';
import ErrorHandler from './Errors/handler';

import 'express-async-errors';
import "./database/conection";

const app = Express();

app.use(cors());
app.use(Express.json());
app.use(routes);
app.use('/uploader', Express.static(Path.join(__dirname,'..', 'uploader')));
app.use(ErrorHandler);

app.listen(3333);
