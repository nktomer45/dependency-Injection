

import  {Configuration}  from './config/configuration';
import  Server  from './Server';
const config=new Configuration();
const server = new Server(config);
server.bootStrap()
server.run()





