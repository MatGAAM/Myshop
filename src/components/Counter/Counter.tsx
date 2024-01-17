import { useState } from "react"

export const Counter: React.FC = () => {

    const [value, setValue] = useState(0)

    return (
        <section>
            <h1>{value}</h1>

            <button onClick={() => setValue(value + 1)}>Aumentar</button>
            <button onClick={() => setValue(value - 1)}>Diminuir</button>
        </section>
    )
}