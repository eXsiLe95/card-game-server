import express = require('express');
import { Request, Response } from 'express';
import { Configuration } from '../config/config';
import { Skipbo } from './games/skipbo';

const app = express();

app.use(express.json());

app.listen(Configuration.app.port);

app.get('/', (req: Request, res: Response) => {
    res.status(200).send({message: 'Welcome to Card Game Server'});
});

Skipbo.init(app);

export {app};
