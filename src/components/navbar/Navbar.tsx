import { ReactNode, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import './Navbar.css'
import { Link} from 'react-router-dom'
import { ShoppingCart, SignOut } from '@phosphor-icons/react';
import { toastAlerta } from '../../utils/toastAlerta';

function Navbar() {
    const { usuario, handleLogout } = useContext(AuthContext);

    function logout(){
        handleLogout()
        toastAlerta('Usuário deslogado com sucesso', "info")
    }

    let component: ReactNode

    if (usuario.token !== '') {

        component = (

            <div className='w-full  bg-white #262626
                flex justify-center py-8'>


                <div className="container text-[#262626] flex justify-between items-center text-[14px]">
                    <Link to='/home' className='text-[18px] font-bold'>Sustenta Mais</Link>

                    <div className='flex gap-4 self-center '>

                        <div>
                            {
                                usuario.usuario === 'root@root.com.br' ? (
                                    <div>
                                        <Link to='/categorias' className='text-1xl'>Categoria</Link>
                                    </div>
                                ) : false
                            }
                        </div>
                        <div>
                            <Link to='/produtos' className='text-1xl'>Meus anúncios</Link>
                        </div>
                        <div>
                            <Link to='/cadastrarProdutos' className='text-1xl'>Cadastrar produto</Link>
                        </div>
                        {
                            usuario.usuario === 'root@root.com.br' ? (
                                <div>
                                    <Link to="/cadastrocategoria" className='link-format'>Cadastro categorias</Link>
                                </div>
                            ) : false
                        }
                        <div>
                            <Link to='/sobre' className='text-1xl'>Sobre nós</Link>
                        </div>
                        <div>
                            <Link to='/contato' className='text-1xl'>Contato</Link>
                        </div>
                    </div>

                    <div className='flex items-center'>
                        <div>
                            <Link to='/carrinho' className='iconCart'> <ShoppingCart size={28} /> </Link>
                        </div>
                        <div className='pl-4 '>
                        <Link to='/login' onClick={logout} className='iconCart'><SignOut size={28} /></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            {component}
        </>
    )
}

export default Navbar