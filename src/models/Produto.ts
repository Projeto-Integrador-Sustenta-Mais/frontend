import Categoria from "./Categoria";
import User from "./Usuario";

export default interface Produto {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    foto: string;
    categoria: Categoria | null;
    user: User | null;
}

