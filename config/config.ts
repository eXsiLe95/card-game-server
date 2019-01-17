export class Configuration {

    public static app = {
        port: process.env.APP_PORT,
    };

    public static mongodb = {
        databaseName: process.env.MONGODB_NAME,
        options: {
            useNewUrlParser: true,
        },
        url: process.env.MONGODB_URL,
    };

    public static session = {
        cookie: {
            domain: process.env.SESSION_COOKIE_DOMAIN,
            expires: new Date(Date.now() + process.env.SESSION_COOKIE_EXPIRY_TIME),
            httpOnly: process.env.SESSION_COOKIE_HTTP_ONLY,
            path: process.env.SESSION_COOKIE_PATH,
            secure: process.env.SESSION_COOKIE_SECURE,
        },
        name: process.env.SESSION_NAME,
        resave: process.env.SESSION_RESAVE,
        saveUninitialized: process.env.SESSION_SAVE_UNINITIALIZED,
        secret: process.env.SESSION_SECRET,
    };
}
