# Card Game Server

![Build status](https://travis-ci.com/eXsiLe95/card-game-server.svg?token=dyhpkqg71qTqqTMr1apg&branch=master)

## Technologies used

- [Express](https://expressjs.com/)
- [Helmet](https://helmetjs.github.io/)
- [ApiDoc](apidocjs.com)

## Project setup

To set up this project, different steps are mandatory.

### Set up dependencies and transpile sources

1. Run `npm run setup`
1. Run `npm run build`

### Set up environmental variables 

1. Add `APP_PORT` to your environment variables
1. Add `SESSION_NAME` to your environment variables
1. Add `SESSION_RESAVE` to your environment variables
1. Add `SESSION_SAVE_UNINITIALIZED` to your environment variables
1. Add `SESSION_SECRET` to your environment variables
1. Add `SESSION_COOKIE_DOMAIN` to your environment variables
1. Add `SESSION_COOKIE_EXPIRY_TIME` to your environment variables
1. Add `SESSION_COOKIE_HTTP_ONLY` to your environment variables
1. Add `SESSION_COOKIE_PATH` to your environment variables
1. Add `SESSION_COOKIE_SECURE` to your environment variables

### Run the application

1. Run `npm run run`

The server is running on `localhost:APP_PORT`.

### Generate docs

1. Run `npm run apidoc` to generate the API documentation
