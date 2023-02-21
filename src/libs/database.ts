import * as mongoose from "mongoose";
import {IMongooseConnection} from './interface'
 

 
export  class Database implements IMongooseConnection{
  open: (arg0: any) => Promise<void>;
  close: () => Promise<void>;

  public static open = (mongoUri: string) => {
    return new Promise(function (resolve, reject){
      return mongoose.connect(
        mongoUri,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true,
          poolSize: 10,
          useFindAndModify: true
        },
        (err: any) => {
          if (err) {
            reject(err)
          } else {
            console.log("Successfully Connected!");
            return resolve('success');
          }
        }
      );
    })
  }
  public static close = () => {
      mongoose.disconnect();
  }
}


