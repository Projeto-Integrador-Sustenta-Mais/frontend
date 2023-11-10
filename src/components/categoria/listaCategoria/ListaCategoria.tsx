import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import { buscar } from '../../../service/Service';
import { AuthContext } from '../../../context/AuthContext';
import CardCategoria from '../cardCategoria/CardCategoria';
import Categoria from '../../../models/Categoria';

function ListaCategoria() {

    const [categoria, setCategoria] = useState<Categoria[]>([]);

    const navigate = useNavigate();

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    async function buscarCategoria() {
        try {
            await buscar('/categorias', setCategoria, {
                headers: { Authorization: token },
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
            alert('Você precisa estar logado');
            navigate('/login');
        }
    }, [token])

    useEffect(() => {
        buscarCategoria()
    }, [categoria.length])

    return (
        <>
            {categoria.length === 0 && (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              />
              </div >
            )
}

<div className="flex justify-center w-full my-4">
    <div className="container flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {categoria.map((categoria) => (
                <>
                    <CardCategoria key={categoria.id} categoria={categoria} />
                </>
            ))}

        </div>
    </div>
</div>
        </>
    )
}

export default ListaCategoria