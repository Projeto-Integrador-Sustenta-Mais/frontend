import { ReactNode, useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Triangle } from 'react-loader-spinner';
import { buscar } from '../../../service/Service';
import { AuthContext } from '../../../context/AuthContext';
import Produto from '../../../models/Produto';
import CardProduto from '../cardProduto/CardProduto';
import { toastAlerta } from '../../../utils/toastAlerta';


function ListaProduto() {

    const navigate = useNavigate();

    const [produtos, setProdutos] = useState<Produto[]>([]);

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    async function buscarProduto() {
        try {
            await buscar('/produtos', setProdutos, {
                headers: {
                    Authorization: token,
                },
            })

        } catch (error: any) {
            if (error.toString().includes('403')) {
                toastAlerta('O token expirou, favor logar novamente', "info")
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            navigate('/');
        }
    }, [token])

    useEffect(() => {
        buscarProduto()
    }, [produtos.length])

    const local = useLocation();

    let listaCard : ReactNode;

    switch (local.pathname) {
        case '/home':
            listaCard = <div className='container mx-32 
            grid  md:grid-cols-5 gap-24 pb-32 mt-8'>
                    {produtos.map((produto) => (
                        <CardProduto key={produto.id} produto={produto} />
                    ))}
                </div>
            break;
        default:
            listaCard = <div className='container mx-32 
            grid  md:grid-cols-5 gap-24 pb-32 mt-8'>
                    {produtos.map((produto) => (
                       produto.user?.id === usuario.id ?  <CardProduto key={produto.id} produto={produto} /> : false
                    ))}
    
                </div>
            break;
    }



    return (
        <>
            <div className='sniper'>
                {produtos.length === 0 && (
                    <Triangle
                        height="80"
                        width="80"
                        color="#4fa94d"
                        ariaLabel="triangle-loading"
                        wrapperStyle={{}}
                        visible={true}
                    />
                )}
            </div>

            {listaCard}
        </>
    )
}

export default ListaProduto