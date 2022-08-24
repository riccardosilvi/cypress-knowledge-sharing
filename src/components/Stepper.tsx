import { useState } from 'react'

export default function Stepper({ initial = 0 }) {
    const [count, setCount] = useState(initial)

    return (
        <div>
            <h1>Cypress Component Testing</h1>
            <button aria-label="decrement" onClick={() => setCount(count - 1)}>
                -
            </button>
            <span data-cy="counter">{count}</span>
            <button aria-label="increment" onClick={() => setCount(count + 1)}>
                +
            </button>
        </div>
    )
}
