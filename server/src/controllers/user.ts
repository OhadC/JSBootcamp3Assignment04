import { Request, Response } from 'express'

import { userService, groupService } from '../services'

// TODO: to requestHandler

export const getAllUsers = async (req: Request, res: Response) => {
    const users = await userService.getAllUsers()
    res.json(users)
}

export const getUserById = async (req: Request, res: Response) => {
    const userId = req.params.id
    const user = await userService.getUserById(userId)
    res.send(user)
}

export const getAllGroupsById = async (req: Request, res: Response) => {
    const userId = req.params.id
    const groups = await groupService.getAllGroupsByUserId(userId)
    res.send(groups)
}

export const updateUser = async (req: Request, res: Response) => {
    const userId = req.params.id
    const newFields = req.body
    const user = await userService.updateUser(userId, newFields)
    res.send(user)
}

export const deleteUser = async (req: Request, res: Response) => {
    const userId = req.params.id
    const result = await userService.deleteUser(userId)
    res.send(result)
}
