import { Express, Request, Response } from 'express';

export class Skipbo {

    public static init(app: Express) {

        app.get('/api/skipbo/new', (req: Request, res: Response) => {
            res.status(200).send({
                message: 'New game started!',
            });
        });

    }

}
