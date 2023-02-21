import "reflect-metadata";
import * as express from 'express';
import * as cors from 'cors';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import router from './controller/route';
import {Database} from './libs/database';
import {IMongooseConnection} from './libs/interface'

export default class Server {
    private app: express.Express;
    private db: IMongooseConnection
    constructor(private config: any) {
        this.app = express();
        this.db=new Database()
    }
    public setUpRoutes = () => {
      this.app.use('/api',router);
        return this.app;
    }
    private initCookieParser = () => {
        this.app.use(cookieParser());
    }
    private initCors = () => {
        this.app.use(cors);
    }

    private initJsonParser() {
        this.app.use(bodyParser.json({ limit: '100mb'}));
        this.app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));
      }
   private   initBodyParse = () => {
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(express.json());
    }

    public bootStrap = () => {
        this.initCookieParser();
        this.initBodyParse();
        this.setUpRoutes();
        this.initCors();
        this.initJsonParser();

        return this.app;
    }

    public run = async() => {
        try {
        const { port, mongoUrl,} = this.config;
        await Database.open(mongoUrl );
        await this.app.listen(port, () => {
            console.log(`App started successfuly on port http://localhost:${port} in dev environment.`);
            });
        } catch (error) {
            console.log(error);
            }
        return this.app;
    }

}
