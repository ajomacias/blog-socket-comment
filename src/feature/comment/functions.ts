import * as types from "./types";

export function onWriteComment(this : types.socket,args : any){
    console.log('comment \n', args)
    this.broadcast.to(args.post).emit('comment', args);
}

export function onWrite(this: types.socket, args : types.write){

    console.log('write \n', args)

    console.log(this.id);
    
    this.broadcast.to(args.post).emit('write');

}

export function onJoinRoom(this : types.socket, args : types.join){

    console.log('join \n', args)
   
    console.log(this.id)
    this.join(args.post);

}

export function onNoWrite(this : types.socket, args : types.write){

    console.log('no-write \n',args);

    this.broadcast.to(args.post).emit('no-write', args);

}