import { useEffect, useState, useRef } from 'react'

interface IPokedata {
    ability: {
        name: string
        url: string
    }
    is_hidden: boolean
    slot: number
}

export const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [time, setTime] = useState(0);
    const [pokeData, setPokeData] = useState<IPokedata[]>({} as IPokedata[])

    let refParagraph = useRef<HTMLParagraphElement>({} as HTMLParagraphElement);
    // let refStopwatch = useRef<number | null>(null);
    // let refStopwatch = useRef<NodeJS.Timeout>({} as NodeJS.Timeout);
    let refStopwatch = useRef<NodeJS.Timeout>();

    console.log(refParagraph.current);

    refParagraph.current.textContent = "Hola soy un paragraph"


    const sum = () => setCounter(counter + 1);
    const rest = () => setCounter(counter - 1);

    useEffect(() => {
        refStopwatch.current && clearInterval(refStopwatch.current)
        refStopwatch.current = setInterval(() => setTime(prevtime => prevtime + 1)
            , 1000);
        return () => {
            // window.clearInterval(refStopwatch.current);
        }
    }, [])

    useEffect(() => {

        let getData = async () => {
            try {
                let res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
                console.log(res);

                if (!res.ok) throw new Error;

                let data = await res.json()
                console.log(data);
                console.log(typeof data);
                console.log(typeof data.abilities);

                setPokeData(data.abilities);



            } catch (error) {

            }
        }

        getData();

    }, [])





    return (
        <div>
            <h2>Counter</h2>
            <p>{counter > 0 ? counter : 0}</p>
            <button onClick={rest}>-</button>
            <button onClick={sum}>+</button>
            <br />
            <hr />
            <p>{time}</p>
            <br />
            <hr />
            <h2>Data</h2>
            <p>{JSON.stringify(pokeData)}</p>
            <p ref={refParagraph}></p>
        </div>
    )
}
