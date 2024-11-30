export type UserType = {
    id: string;
    name: string;
    email: string;
    avatar: string;
    backgroundAvatar: string;
    images: any;
};

export interface propsUser {
    user: UserType[];
}