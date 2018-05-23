import { User } from './user'

interface IGroup {
    id: string
    name: string
    users: { [key: string]: User }
}

class Group implements IGroup {
    public id: string
    public name: string
    public users: { [key: string]: User }

    constructor(id: string, name: string) {
        this.id = id
        this.name = name
        this.users = {}
    }

    public getId(): string {
        return this.id
    }
    public getName(): string {
        return this.name
    }
    public getUsers(): User[] {
        return Object.keys(this.users).map(key => this.users[key])
    }

    public addUser(user: User): boolean {
        if (this.users[user.getName()]) return false
        this.users[user.getName()] = user
        return true
    }
    public addUsers(users: User[]): boolean {
        users.forEach(user => this.addUser(user))
        return true
    }
    public isContainUser(username: string): boolean {
        return (username in this.users)
    }
    public removeUser(userName: string): boolean {
        if (!this.users[userName]) return false
        delete this.users[userName]
        return true
    }
    public removeAllUsers(): boolean {
        this.users = {}
        return true
    }
}

export { Group, IGroup }