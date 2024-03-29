import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Routes } from './routes/Routes';
import * as mongoose from 'mongoose';
import * as cors from 'cors';
import { WinstonLogger } from './config/WinstonLogger';
import { SCMService } from './apiservices/systemcredentialsmanager';

const PORT = 8006;

class App {

    public app: express.Application = express();
    public routePrv: Routes = new Routes();
    public logger: WinstonLogger = new WinstonLogger();
    public SCMcredits = new SCMService();
    public DB_Url: string;

    constructor() { 
        this.DatabaseCredentials();
        this.logger.setupLogger();
        this.logger.configureWinston(this.app);
        this.initializeMiddlewares();
        this.routePrv.routes(this.app);
    }

    private initializeMiddlewares() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cors({ credentials: true, origin: true }))
    }

    private DatabaseCredentials() {
        this.SCMcredits.SCMData( async result => {
            this.DB_Url = result.data.DB_URL_monkaccounts_9301;
            await this.DBSetup();
        });
    }

    private DBSetup(): void {
        // mongoose.Promise = global.Promise;
        mongoose.connect(this.DB_Url, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(res => { console.log('db connected') })
            .catch(err => { console.log('DB error in connection:', err) });
    }


}

new App().app.listen(PORT, () => {
    console.log('Express server listening on port  ' + PORT);
})


