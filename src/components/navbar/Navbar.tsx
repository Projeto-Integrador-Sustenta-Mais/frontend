import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <div className='w-full  bg-green-600 text-white
                flex justify-center py-8'>

                <div className="container flex justify-between text-lg">
                    <Link to='/home' className='text-2xl font-bold'>Sustenta Mais</Link>

                    <div className='flex gap-4'>
                        <div>
                            <Link to='/login' className='text-1xl'>Login</Link>
                        </div>
                        <div>
                            <Link to='/categorias' className='text-1xl'>Categoria</Link>
                        </div>
                        <div>
                            <Link to='/cadastrarCategorias' className='text-1xl'>Cadastar Categoria</Link>
                        </div>
                        <div>
                            <Link to='/home' className='text-1xl'>Home</Link>
                        </div>
                        <div>
                            <Link to='/sobre' className='text-1xl'>Sobre Nós</Link>
                        </div>
                        <div>
                            <Link to='/contato' className='text-1xl'>Contato</Link>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar