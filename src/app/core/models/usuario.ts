export type UsuarioRol = 'ADMIN' | 'VENDEDOR' | 'REPONEDOR';

export interface UsuarioI {
    id?: number;
    username: string;
    password?: string;
    rol: UsuarioRol;
    estado?: boolean;
}
