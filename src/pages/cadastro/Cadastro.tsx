import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import './Cadastro.css'

import { RotatingLines } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom'
import { cadastrarUsuario } from '../../service/Service'
import Usuario from '../../models/Usuario'
import { toastAlerta } from '../../utils/toastAlerta'

function Cadastro() {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [confirmaSenha, setConfirmaSenha] = useState<string>("")

    const [usuario, setUsuario] = useState<Usuario>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: ''
    })

    useEffect(() => {
        if (usuario.id !== 0) {
            retornar()
        }
    }, [usuario])

    function retornar() {
        navigate('/login')
    }

    function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
        setConfirmaSenha(e.target.value)
    }

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {
            setIsLoading(true)

            try {
                await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario)
                toastAlerta('Usuário cadastrado com sucesso', "sucesso")

            } catch (error) {
                toastAlerta('Erro ao cadastrar o Usuário', "erro")
            }

        } else {
            toastAlerta('Dados inconsistentes. Verifique as informações de cadastro.', "info")
            setUsuario({ ...usuario, senha: "" })
            setConfirmaSenha("")
        }

        setIsLoading(false)
    }

    function validaNome() {
        const txtNome = document.querySelector('#txtNome') as HTMLDivElement;
        if(usuario.nome.length == 0 || usuario.nome.length < 3){
            txtNome.innerHTML = 'Nome Inválido'
            txtNome.style.color = 'rgb(248 113 113)'
            

        }else if(usuario.nome === null ) {
            if (txtNome) {
                txtNome.style.display = 'none'
            }
        } else {
            txtNome.innerHTML = 'Nome Válido'
            txtNome.style.color = '#9C9C42'
        }
    }

    function validaEmail(){
        const txtEmail = document.querySelector('#txtEmail') as HTMLDivElement;
        if(usuario.usuario.indexOf('@') == -1 || usuario.usuario.indexOf('.') == -1) {
            txtEmail.innerHTML = 'E-mail inválido'
            txtEmail.style.color = 'rgb(248 113 113)'
        }else {
            txtEmail.innerHTML = 'E-mail válido'
            txtEmail.style.color = '#9C9C42'
        }
    }

    function validaSenha(){
        const txtSenha = document.querySelector('#txtSenha') as HTMLDivElement;
        if(usuario.senha.length >= 8) {
            txtSenha.innerHTML = 'Senha válida'
            txtSenha.style.color = '#9C9C42'
        }else {
            txtSenha.innerHTML = 'Senha inválida'
            txtSenha.style.color = 'rgb(248 113 113)'
        }
    }

    function validaConfirmaSenha(){
        const txtValidaSenha = document.querySelector('#txtConfirmaSenha') as HTMLDivElement;
        if(confirmaSenha.length >= 8 && usuario.senha === confirmaSenha) {
            txtValidaSenha.innerHTML = 'Senha válida'
            txtValidaSenha.style.color = '#9C9C42'
        }else {
            txtValidaSenha.innerHTML = 'Senha inválida'
            txtValidaSenha.style.color = 'rgb(248 113 113)'
        }
    }
    
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold">
            <div className="fundoCadastro hidden lg:block"></div>
            <form
                className='flex justify-center items-center flex-col w-2/3 gap-3'
                onSubmit={cadastrarNovoUsuario}>
                <h2 className='text-[#9C9C42]  text-5xl'>Cadastrar</h2>

                <div className="flex flex-col w-full">
                    <label htmlFor="nome">Nome</label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        placeholder=""
                        className="border-2 border-slate-700 rounded p-2"
                        value={usuario.nome}
                        onKeyUp={validaNome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>

                <div id='txtNome' className='w-full'></div>

                <div className="flex flex-col w-full">
                    <label htmlFor="usuario">E-mail</label>
                    <input
                        type="text"
                        id="usuario"
                        name="usuario"
                        placeholder=""
                        className="border-2 border-slate-700 rounded p-2"
                        value={usuario.usuario}
                        onKeyUp={validaEmail}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>

                <div id='txtEmail' className='w-full'></div>

                <div className="flex flex-col w-full">
                    <label htmlFor="foto">Foto</label>
                    <input
                        type="text"
                        id="foto"
                        name="foto"
                        placeholder=""
                        className="border-2 border-slate-700 rounded p-2"
                        value={usuario.foto}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>

                <div className="flex flex-col w-full">
                    <label htmlFor="senha">Senha</label>
                    <input
                        type="password"
                        id="senha"
                        name="senha"
                        placeholder=""
                        className="border-2 border-slate-700 rounded p-2"
                        value={usuario.senha}
                        onKeyUp={validaSenha}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>

                <div id='txtSenha' className='w-full'></div>

                <div className="flex flex-col w-full">
                    <label htmlFor="confirmarSenha">Confirmar Senha</label>
                    <input
                        type="password"
                        id="confirmarSenha"
                        name="confirmarSenha"
                        placeholder=""
                        className="border-2 border-slate-700 rounded p-2"
                        value={confirmaSenha}
                        onKeyUp={validaConfirmaSenha}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
                    />
                </div>

                <div id='txtConfirmaSenha' className='w-full'></div>

                <div className="flex justify-around w-full gap-8">
                    <button
                        className='rounded text-white bg-red-400 hover:bg-red-700 w-1/2 py-2'
                        onClick={retornar}>
                        Cancelar
                    </button>
                    <button
                        className='rounded text-white bg-[#9C9C42]  hover:bg-[#D9D94B] w-1/2 
                                               py-2 flex justify-center'
                        type='submit'>
                        {isLoading ? <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                            <span>Cadastrar</span>}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Cadastro