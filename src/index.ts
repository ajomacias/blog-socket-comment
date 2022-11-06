import { Server } from 'socket.io'

const io = new Server(8080, {
 
    cors : { origin : '*'},
    serveClient : false

});


export default io;
import './app';