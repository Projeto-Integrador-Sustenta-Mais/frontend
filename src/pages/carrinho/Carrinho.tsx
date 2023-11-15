import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext';
import CardProduto from '../../components/produto/cardProduto/CardProduto';

function Carrinho() {

    const { items, limparCart } = useContext(AuthContext)

    return (
        <>
            <div className='flex justify-end m-2'> 
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    onClick={limparCart}>Finalizar Compra</button>
            </div>

            <div className='flex flex-col'>
                <div className="flex justify-center w-full my-4">
                    <div className="container flex flex-col">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {
                                items.map(produto => (
                                    <CardProduto key={produto.id} produto={produto} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </ div >
        </>
    )
}

export default Carrinho