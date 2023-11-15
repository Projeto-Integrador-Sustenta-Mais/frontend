import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dna } from 'react-loader-spinner';
import { buscar } from '../../../service/Service';
import { AuthContext } from '../../../context/AuthContext';
import Produto from '../../../models/Produto';
import CardProduto from '../cardProduto/CardProduto';


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
                alert('O token expirou, favor logar novamente')
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado')
            navigate('/');
        }
    }, [token])

    useEffect(() => {
        buscarProduto()
    }, [produtos.length])

    return (
        <>
        {produtos.length === 0 && (
            <Dna
                visible={true}
                height="200"
                width="200"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper mx-auto"
            />
        )}

        <div className='container mx-32 
        grid  md:grid-cols-5 gap-24 pb-32'>
            {produtos.map((produto) => (
                <CardProduto key={produto.id} produto={produto} />
            ))}

        </div>
    </>
)
}

export default ListaProduto