export interface IUser {
    name: string;
    email: string;
}

export class User implements IUser {
    name: string;
    email: string;
 
    constructor() {
        this.name = '';
        this.email = '';
    }
}