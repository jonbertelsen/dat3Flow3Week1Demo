import { useState, useEffect } from 'react';

const Tid2 = () => {

    const getTime = () => setTid(new Date().toString())

    const [tid, setTid] = useState('ingen tid')
    const [text, setText] = useState('')

    useEffect(() => {

        alert('Så er der trykket på tid')
        setText(Math.random().toString())

    }, [tid])

    return (
        <div>
            <button onClick={getTime}>Tid</button><br />
            Tid: klokken er nu { tid}
            <p>{text}</p>

        </div>
    )


}



