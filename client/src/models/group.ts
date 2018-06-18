import { IUser } from "./user";

export interface IGroup {
    id: string
    name?: string | null
    parentId?: string | null
    userIds: string[]
    users?: IUser[]
    groupIds: string[]
    isPrivate: boolean
}
