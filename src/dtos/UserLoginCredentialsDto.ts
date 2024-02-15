export interface UserLoginCredentialsDtos {
    name: string;
    password: string;
    email: string;
}

export interface UserLoginFormDtos extends UserLoginCredentialsDtos {
    confirmPassword: string;
}