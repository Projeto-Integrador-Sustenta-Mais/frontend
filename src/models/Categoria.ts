import Produto from "./Produto";

export default interface UsuarioLogin {
    id: number;
    tipo: string;
    isValid: boolean;
    produto: Produto | null;
}