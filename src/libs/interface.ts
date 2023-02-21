interface IMongooseConnection {
    open: (arg0: string,) =>Promise<unknown>
    close: () => void;
  }


  export {IMongooseConnection}