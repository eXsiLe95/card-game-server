import express = require('express');
import session = require('express-session');
import helmet = require('helmet');

import { Request, Response } from 'express';
import { Configuration } from '../config/config';
import { Skipbo } from './games/skipbo';

const app = express();

app.set('trust proxy', 1);

app.use(helmet());
app.use(express.json());
app.use(session(Configuration.session));

app.listen(Configuration.app.port);

/**
 * @api {get} / App entry point
 * @apiName GetAppEntry
 * @apiGroup Server
 * @apiVersion 0.0.1
 *
 * @apiSuccess {String} message A welcome message
 *
 * @apiSuccessExample Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *      "message": "Welcome to Card Game Server"
 *  }
 */
app.get('/', (req: Request, res: Response) => {
    res.status(200).send({message: 'Welcome to Card Game Server'});
});

Skipbo.init(app);

export { app };
