import { useState } from 'react'

const SubComponent = () => {

    const [lookism, setStrongest] = useState("Jonggun");

    const changeChar = () => {
        if(lookism === "Jonggun") {
            setStrongest("PHS");
        } else {
            setStrongest("Jonggun");
        }
    }
    return (
        <div>
            <h1>Trying state hook</h1>
            <p>Who is the strongest in lookism rn?</p>
            <button onClick={changeChar}>Change</button>
            <h2>{lookism}</h2>
        </div>
    )
}

export default SubComponent;