import { Link } from 'react-router-dom'
import Produto from '../../../models/Produto'
import './CardProduto.css'
import { useLocation } from 'react-router-dom'
import { AuthContext } from '../../../context/AuthContext'
import { useContext } from 'react'
interface CardProdutoProps {
    produto: Produto
}

function CardProduto({ produto }: CardProdutoProps) {

    const { adicionarProduto, removerProduto } = useContext(AuthContext)


    const local = useLocation();

    let btnCard;

    switch (local.pathname) {
        case '/home':
            btnCard =  <button className='w-full text-white bg-[#9C9C42]  hover:bg-[#D9D94B] flex items-center justify-center py-2 rounded-[5px]' onClick={() =>adicionarProduto(produto)}>Adicionar</button>
            break;
            case '/carrinho':
                btnCard =  <button className='link-style rounded-[5px] bg-white' onClick={() =>removerProduto(produto.id)}>Remover</button>
                break;
        default:
            btnCard = <>
                <Link to={`/editarProduto/${produto.id}`} className='w-full text-white bg-[#9C9C42]
                    hover:bg-[#D9D94B] flex items-center justify-center py-2 rounded-[5px]'>
                    <button>Editar</button>
                </Link>
                <Link to={`/deletarProduto/${produto.id}`} className='link-style rounded-[5px] bg-white'>
                    <button>Deletar</button>
                </Link>
            </>
    }

    return (
        <div className='shadow-md	
            flex flex-col pb-2 w-64	rounded overflow-hidden justify-between p-4 bg-white'>

            <div className=''>
                <div className="flex w-full items-center py-2 px-4 gap-4">
                    <img src={produto.user?.foto} className='h-12 rounded-full shadow-md'
                        alt="Imagem do Usuário" />
                    <h3 className='text-lg font-bold text-center uppercase text-[14px]'>{produto.user?.nome}</h3>
                </div>
                <div className='p-4'>
                    <img src={produto.foto} alt="imagem do produto" className='rounded-[5px]' />
                    <h4 className='text-lg font-semibold uppercase text-[16px] mt-8'>{produto.nome}</h4>
                    <p className='text-lg text-[14px] mt-2'>{produto.descricao}</p>
                    <p className='text-[14px]'>Categoria: {produto.categoria?.tipo}</p>
                    <p className='text-[14px]'>Preço: R${produto.preco}</p>
                </div>
            </div>
            <div className="flex mb-3">
                {btnCard}
            </div>
        </div>
    )
}

export default CardProduto

