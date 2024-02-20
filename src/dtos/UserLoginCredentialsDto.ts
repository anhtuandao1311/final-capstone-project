export interface UserInfoDtos extends UserLoginFormDtos {
    name: string;
}

export interface UserRegisterFormDtos extends UserInfoDtos {
    confirmPassword: string;
}

export interface UserLoginFormDtos {
    email: string;
    password: string;
}