import io from "../..";
import { functions } from '.'

const comments_space = io.of('/comment')

comments_space.on('connection', 

  function(socket){

    socket.on('join', functions.onJoinRoom);

    socket.on('comment', functions.onWriteComment);

    socket.on('write', functions.onWrite);

    socket.on('no-write', functions.onNoWrite);

});

comments_space.on('disconnect', ()=>{
  console.log('disconnect');
});
