import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
    const { usuario } = useContext(AuthContext);


    return (
        <>
            <div className='w-full  bg-white #262626
                flex justify-center py-8'>


                <div className="container text-[#262626] flex justify-between items-center text-lg">
                    <Link to='/home' className='text-2xl font-bold'>Sustenta Mais</Link>

                    <div className='flex gap-4 self-center '>

                        <div>
                            <Link to='/categorias' className='text-1xl'>Categoria</Link>
                        </div>
                        <div>
                            <Link to='/produtos' className='text-1xl'>Produto</Link>
                        </div>
                        <div>
                            <Link to='/cadastrarProdutos' className='text-1xl'>Cadastrar Produto</Link>
                        </div>
                        {
                            usuario.usuario === 'root@root.com.br' ? (
                                <div>
                                    <Link to="/cadastrocategoria" className='link-format'>Cadastro Categorias</Link>
                                </div>
                            ) : false
                        }
                        <div>
                            <Link to='/sobre' className='text-1xl'>Sobre Nós</Link>
                        </div>
                        <div>
                            <Link to='/contato' className='text-1xl'>Contato</Link>
                        </div>
                        <div>
                            <Link to='/carrinho' className='text-1xl'>carrinho</Link>
                        </div>
                    </div>

                    <div>
                        <button className='loginBtn'>
                            <Link to='/login' className='linkLogin'>Login</Link>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar