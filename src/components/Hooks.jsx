import React, { useEffect, useState } from 'react';

function Hooks(props) {

    const [ counter, setCounter ] = useState(0)
    const [ name, setName  ] = useState('')
    const [ email, setEmail  ] = useState('')
    const [ password, setPassword ] = useState('')

    useEffect(() => {

        console.log("Componnet mount!")

    }, [])

    useEffect(() => {

        console.log("State name chnaged!")

    }, [name])

    useEffect(() => {

        return () => {
            console.log("Component unmounted!")
            clearInterval()
        }

    })


    return (
        <div>

            <div>{ counter }</div>
            <button onClick={() => setCounter(counter+1)} > + </button>
            <button onClick={() => setCounter(counter-1)} > - </button>

            <input value={name} onChange={(event) => setName(event.target.value)}  />
            <input value={email} onChange={(event) => setEmail(event.target.value)}  />
            <input value={password} onChange={(event) => setPassword(event.target.value)}  />


        </div>
    );
}

export default Hooks;