import * as types from "./types";

export function onWriteComment(this : types.socket,args : types.comment){
    console.log('comment \n', args)
    this.to(args.post).emit('comment \n', args);
}

export function onWrite(this: types.socket, args : types.write){

    console.log('write \n', args)

    console.log(this.id);
    
    this.broadcast.to(args.post).emit('write', 'asasas');

}

export function onJoinRoom(this : types.socket, args : types.join){

    console.log('join \n', args)
   
    console.log(this.id)
    this.join(args.post);

}