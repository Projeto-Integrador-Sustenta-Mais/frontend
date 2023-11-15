import { Link } from 'react-router-dom'
import Categoria from '../../../models/Categoria'
import './CardCategoria.css'

interface CardCategoriaProps {
    categoria: Categoria
}

function CardCategoria({ categoria }: CardCategoriaProps) {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-[#9C9C42]  text-white font-bold text-2xl'>
                Categoria
            </header>

            <p className='p-8 text-3xl bg-slate-200 h-full'>
                {categoria.tipo}
            </p>

            <div className="flex">
                <Link to={`/editarCategoria/${categoria.id}`}
                    className='w-full text-slate-100 bg-[#9C9C42]  hover:bg-[#D9D94B]
                        flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>

                <Link to={`/deletarCategoria/${categoria.id}`}
                    className='link-style'>
                    <button>Deletar</button>
                </Link>
            </div>

        </div>
    )
}

export default CardCategoria