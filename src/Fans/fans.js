import Fan from './fan'
function Fans() {
    return (
        <div>
            <h3>Her er mine fans:</h3>
            <ul>
                {
                    fanList.map(fan => <li key={fan.navn}><Fan navn={fan.navn} alder={fan.alder} /></li>)
                }
            </ul>
        </div>

    )
}

//const rnd = (start) => start + Math.floor(Math.random(30) * 30)

const fanList = [
    {
        navn: "Jon",

        alder: 0
    },
    {
        navn: "Fehår",
        alder: 54
    },
    {
        navn: "Blondie",
        alder: 65
    }
]

export default Fans