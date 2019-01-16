import { Express, Request, Response } from 'express';

export class Skipbo {

    public static init(app: Express) {

        /**
         * @api {get} /api/skipbo/new Start a new Skip-bo game session
         * @apiName GetSkipboNew
         * @apiGroup Skipbo
         * @apiVersion 0.0.1
         *
         * @apiSuccess {String} message A success message stating a new game has been started
         *
         * @apiSuccessExample Success-Response:
         *  HTTP/1.1 200 OK
         *  {
         *      "message": "New game started!"
         *  }
         */
        app.get('/api/skipbo/new', (req: Request, res: Response) => {
            res.status(200).send({
                message: 'New game started!',
            });
        });

    }

}
