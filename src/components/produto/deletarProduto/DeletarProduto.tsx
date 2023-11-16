import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { RotatingLines } from "react-loader-spinner"
import { buscar, deletar } from '../../../service/Service'
import { AuthContext } from '../../../context/AuthContext'
import Produto from '../../../models/Produto'
import { toastAlerta } from '../../../utils/toastAlerta'


function DeletarProduto() {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [produto, setProduto] = useState<Produto>({} as Produto)

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPorId(id: string) {
        try {
            await buscar(`/produtos/${id}`, setProduto, {
                headers: {
                    'Authorization': token
                }
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
            
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarProduto() {
        setIsLoading(true)

        try {
            await deletar(`/produtos/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            toastAlerta('Produto apagado com sucesso', "sucesso")

        } catch (error) {
            toastAlerta('Erro ao apagar o Produto', "error")
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/produtos")
    }

    return (
        <div className='container w-1/3 mx-auto '>
            <h1 className='text-4xl text-center my-4'>Deletar Produto</h1>

            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar o produto a seguir?
            </p>

            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between p-8 bg-white'>
                <header className=' text-[#262626] font-bold text-2xl'>
                Produto
                </header>

                <div className="text-[#262626] mb-6">
                    <p className='text-xl h-full'>{produto.nome}</p>
                    <p>{produto.descricao}</p>
                </div>
                <div className="flex">
                    
                    <button
                        className='w-full mr-8 text-slate-100 bg-[#9C9C42]
                        hover:bg-[#D9D94B] flex items-center justify-center p-2 rounded'
                        onClick={deletarProduto}>

                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                            <span>Sim</span>
                        }
                    </button>

                    <button
                        className='text-[#dc2626] bg-white border-solid border-[1px] border-[#dc2626] hover:text-white  hover:bg-red-600 w-full py-2'
                        onClick={retornar}>
                        Não
                    </button>

                </div>
            </div>
        </div>
    )
}
export default DeletarProduto