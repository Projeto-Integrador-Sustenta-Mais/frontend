
import './Home.css'
import ListaProduto from '../../components/produto/listagemProduto/ListagemProduto'

function Home() {
    return (
        <>
            <div id='bg-image' className="flex bg-no-repeat px-32">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 py-4">
                        <h2 className='text-5xl font-bold'>
                            Bem vindos ao Sustenta +
                        </h2>
                        <p className='text-xl font-light'>
                        Sustenta Mais é um projeto inspirado nas Metas de Desenvolvimento Sustentável da ONU, focado em promover práticas de produção responsável e sustentável. Nossa missão é reduzir o impacto ambiental, incentivar o uso eficiente de recursos e apoiar o bem-estar das comunidades. Junte-se a nós na busca por um mundo onde a produção sustentável seja a chave para um futuro melhor
                        </p>
                    </div>
                </div>
            </div>
            <div className='px-32 py-24 flex'>
                <h1 className='text-5xl font-bold text-[#262626] mr-2'>Nossos</h1><h1 className='text-5xl font-bold text-[#9C9C42]'> Produtos</h1>
            </div>

            <ListaProduto />
        </>
    )
}

export default Home