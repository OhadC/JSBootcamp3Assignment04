import { Server } from 'http'
import * as socketIo from 'socket.io'

import { messageService } from './services'
import { IClientMessage } from './models';

const socketApp = (httpServer: Server) => {
    const io = socketIo(httpServer)

    const onConnection = (socket: socketIo.Socket) => {
        socket.on('message', onMessage)
    }

    const onMessage = async (message) => {
        const fromDbMessage: IClientMessage = await messageService.addMessage(message)
        io.emit('message', fromDbMessage)
    }

    io.on('connection', onConnection)
}

export default socketApp
