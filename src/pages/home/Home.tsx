
import ListaCategoria from "../../components/categoria/listaCategoria/ListaCategoria"

function Home() {
    return (
        <>
            <div className=" bg-stone-500	 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Bem vindos ao Sustenta +
                        </h2>
                        <p className='text-xl'>
                        Sustenta Mais é um projeto inspirado nas Metas de Desenvolvimento Sustentável da ONU, focado em promover práticas de produção responsável e sustentável. Nossa missão é reduzir o impacto ambiental, incentivar o uso eficiente de recursos e apoiar o bem-estar das comunidades. Junte-se a nós na busca por um mundo onde a produção sustentável seja a chave para um futuro melhor
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className="flex justify-around gap-4">
                               
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://i.imgur.com/fyfri1v.png"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>

            <ListaCategoria />
        </>
    )
}

export default Home