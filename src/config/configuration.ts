import { IConfig } from "./Iconfig";
// import { injectable } from "tsyringe";
const env: NodeJS.ProcessEnv = process.env;

class Configuration implements IConfig{
    port: number;
    nodeEnv:string;
    mongoUrl:string;
     env: any;
    constructor(){
        this.port= Number(env.PORT)||9004;
        this.nodeEnv =env.NODE_ENV|| 'dev';
        this.mongoUrl=env.MONGO_URL||' mongodb://localhost:27019/User?directConnection=true'
    }
}

export {Configuration};