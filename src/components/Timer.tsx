import { useEffect, useState, useRef } from "react"

type TimerArgs = {
  miliseg: number
}

export const Timer = ({miliseg}: TimerArgs) => {
 
  const [segundos, setSegundos] = useState(0);
  const ref = useRef<NodeJS.Timeout>()

  useEffect(() => {
    ref.current && clearInterval(ref.current);
    ref.current = setInterval( () => setSegundos( s => s + 1 ) ,miliseg);

  }, [miliseg])
  

  return (
    <>
        <h4>Timer: <small> { segundos } </small></h4>
    </>
  ) 
}
