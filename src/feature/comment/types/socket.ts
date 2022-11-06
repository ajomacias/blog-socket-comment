import { Socket } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

export type socket = Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>