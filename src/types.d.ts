export interface IUserInfo {
    id: string;
    name: string;
    email: string;
    status: boolean;
    role: 'user' | 'editor' | 'administrator';
}

export interface IUserMutation {
    name: string;
    email: string;
    status: boolean;
    role: 'user' | 'editor' | 'administrator';
}