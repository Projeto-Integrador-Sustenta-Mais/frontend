function Contato() {
    return (
        <div className="grid h-screen w-full place-items-center font-bold" >
            <form className="flex justify-center items-center flex-col w-1/4 gap-4">
                <h2 className="text-4xl text-[#9C9C42]  ">Contato</h2>
                <div className="flex flex-col w-full">
                    <label htmlFor="nome">Nome</label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        placeholder="Nome"
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>
                <div className="flex flex-col w-full">
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="E-mail"
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>
                <div className="flex flex-col w-full">
                    <label htmlFor="telefone">Telefone</label>
                    <input
                        type="Number"
                        id="telefone"
                        name="telefone"
                        placeholder="Telefone"
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>
                <div className="flex flex-col w-full">
                    <label htmlFor="assunto">Assunto</label>
                    <textarea
                        cols={50}
                        rows={5}
                        id="assunto"
                        name="assunto"
                        placeholder="Assunto"
                        className="border-2 border-slate-700 rounded p-2 "
                    />
                </div>
                <div className="flex justify-around w-full gap-8">
                    <button
                        className='rounded text-white bg-[#9C9C42] hover:bg-[#D9D94B] w-28 py-2' type='submit'>
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Contato