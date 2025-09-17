export interface LoginRequest {
    username: string;
    password: string;
}

export interface JwtResponse {
    access_token: string;
    refresh_token: string;
}

export interface DecodedToken {
    role?: string;
    id?: number;
    sub?: string;
    iat?: number;
    exp?: number;
}