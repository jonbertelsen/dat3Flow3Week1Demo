import { useState, useEffect } from 'react';

function Tid(props) {
    const { besked } = props
    const url = 'https://icanhazdadjoke.com'

    const [knapbesked, setKnapbesked] = useState('...')
    const [saldo, setSaldo] = useState(5000)
    const [bonusBesked, setBonusBesked] = useState('')
    const [joke, setJoke] = useState('')

    function visTid() {
        setKnapbesked(new Date().toString())
        setBonusBesked('')
    }

    function opdaterSaldo() {
        setSaldo(saldo + 100)
    }

    useEffect(
        () => {
            if (saldo > 5200) {
                setBonusBesked('Der er pillet ved din saldo!')
            } else {
                setBonusBesked('Sæt noget mere ind')
            }
        }, [saldo]
    )

    useEffect(
        () => {


        }, [knapbesked]
    )

    return (
        <div>
            <p>Hvad er klokken?</p>
            <p>{besked}</p>
            <button onClick={visTid}>Vis tid</button>
            <p>{knapbesked}</p>
            <button onClick={opdaterSaldo}>Sæt 100 kr ind på saldo</button>
            <p>Din saldo er: {saldo} kr</p>
            <p>Bonusinfo: {bonusBesked}</p>
            <button onClick={getJoke}>Hent joke</button>
            <p>{joke}</p>
        </div>
    )

    function getJoke() {
        fetch(url, { headers: { 'Accept': 'application/json' } })
            .then(res => res.json())
            .then(data => {
                setJoke(data.joke)
            })
    }

}

export default Tid