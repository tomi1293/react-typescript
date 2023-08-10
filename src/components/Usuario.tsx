import { useState } from "react"

interface User {
    uid: string;
    name: string;
}

export const Usuario = () => {

    //Una vez que definimos que el estado tiene que cumplir con la interface User, podemos enviarle valores por defecto siempre y cuando cumplan con este tipado
    const [user, setUser] = useState<User>();

    const login = () => {
        setUser({
            uid: 'ABC123',
            name: 'Tomito Martinez'
        })
    }

  return (
    <div className="mt-5">
        <h3>Usuario</h3>

        <button onClick={login} className="btn btn-outline-primary">
            Login
        </button>

        {
            (!user)
                ? <pre>No hay usuario</pre>
                : <pre> { JSON.stringify(user) } </pre>
        }

        
    </div>
  )
}
