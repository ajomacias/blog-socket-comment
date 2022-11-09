export interface Comment {
    id:          number;
    description: string;
    created:     Date;
    user:        User;
    post : string
}

export interface User {
    id:      number;
    name:    string;
    profile: Profile;
}

export interface Profile {
    img: string;
}
