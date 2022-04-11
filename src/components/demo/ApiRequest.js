import { useEffect, useState } from "react";

const ApiRequest = () => {
    const [paises, setPaises] = useState(null);

    useEffect(() =>{
        fetch("https://restcountries.com/v2/all").then((response) => response.json()).then((data) => setPaises(data))
    
    }, [])

    return (
        <select>
            {paises && paises.map((pais, i) => {
                return (
                    <option key={i}>{pais.name}</option>
                )
            })}
        </select>
    )
}

export default ApiRequest