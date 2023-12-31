import {useState} from 'react';

export const Counter = () => {

    const [counter, setCounter] = useState(0)

    //*Con los :void indicamos que la fn no retorna nada
    const incrementar = ( numero:number =1 ):void => {
        setCounter(counter + numero)
    }

  return (
    <div className="mt-5">
        <h3>Counter</h3>
        <span>Valor: { counter }</span>
        <br />

        <button 
            className='btn btn-outline-primary m-2'
            onClick={ () => incrementar() }
        >
            +1
        </button>

        <button 
            className='btn btn-outline-primary m-2'
            onClick={ () => incrementar(2) }
        >
            +2
        </button>

        <button 
            className='btn btn-outline-danger m-2'
            onClick={ () => setCounter(0)}
        >
            Reset
        </button>
    </div>
  )
}
