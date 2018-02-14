import {User} from './user.model';

export interface Mail {
    subject: string;
    content: String;
    sender: User;
    receiver: User;
    id: number;
}