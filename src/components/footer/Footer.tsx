
import { ReactNode, useContext } from 'react'
import { AuthContext } from '../../context/AuthContext';

function Footer() {

    let data = new Date().getFullYear()

    const { usuario } = useContext(AuthContext);

    let component: ReactNode

    if (usuario.token !== '') {

        component = (

            <div className="flex justify-center bg-[#9C9C42] text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                            Sustenta Mais | Copyright: {data}
                        </p>
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

export default Footer